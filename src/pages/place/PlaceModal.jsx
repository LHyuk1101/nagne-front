import React, { useEffect, useState } from "react";
import {
  Modal,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@mui/material";
import { Search, ArrowBack, Add, Check, Favorite } from "@mui/icons-material";
import SelectedPlacesThumbnails from "./SelectedPlacesThumbnails.jsx";
import defaultImg from "../../assets/images/place/default_img.png";
import {
  ModalContainer,
  Header,
  SearchBar,
  PlaceImage,
  CategoryFilter,
  StyledChip,
  PlaceList,
  PlaceItem,
  ButtonContainer,
  StyledButton,
  LoadMoreContainer,
} from "./PlaceModal.style.jsx";
import { getPlaceByArea } from "../../services/place/place.js";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSelectedPlaces } from "../../store/place/PlaceContext.jsx";
import { useInView } from "react-intersection-observer";
import usePlanStore from "../../store/PlanContext.js";
import { calculateDaysBetween } from "../../utils/dateUtils.js";
import WarningDialog from "../../components/UI/WarningDialog.jsx";
import { useWarningDialog } from "../../hooks/useWarningDialog.jsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const PlaceModal = ({ open, onClose, areaCode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({
    name: "attraction",
    code: 76,
  });
  const { selectedPlaces, addPlace, removePlace } = useSelectedPlaces();
  const { startDate, endDate } = usePlanStore();
  const { ref, inView } = useInView();
  const { isOpen, message, openWarningDialog, closeWarningDialog } =
    useWarningDialog();

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["placeList", selectedCategory, searchTerm],
    queryFn: ({ pageParam = 1, signal }) =>
      getPlaceByArea({
        areaCode,
        selectedRegions: selectedCategory,
        page: pageParam,
        signal,
        searchTerm,
      }),
    getNextPageParam: (lastPage) =>
      lastPage.nextPage && lastPage.items.length > 0
        ? lastPage.nextPage
        : undefined,
    enabled: open && searchTerm !== undefined,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const categories = [
    { name: "attraction", code: 76 },
    { name: "restaurant", code: 82 },
  ];

  const renderContent = () => {
    if (isLoading) {
      return <Box>Loading...</Box>;
    }

    if (error) {
      return <Box>No data found for {selectedCategory.name}.</Box>;
    }

    if (data) {
      return (
        <>
          <PlaceList>
            {data.pages.map((page, pageIndex) => (
              <React.Fragment key={pageIndex}>
                {page.items.map((place) => (
                  <PlaceItem
                    key={place.id}
                    onClick={() => handlePlaceSelect(place)}
                  >
                    <PlaceImage
                      src={place.imgUrl || defaultImg}
                      alt={place.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultImg;
                      }}
                    />
                    <ListItemText
                      primary={place.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            display="block"
                          >
                            {place.address}
                          </Typography>
                          <Typography
                            component="span"
                            variant="body2"
                            display="block"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Favorite
                              fontSize="small"
                              color="error"
                              style={{
                                marginRight: "4px",
                                transform: "translateY(1px)",
                                color: "black",
                              }}
                            />
                            {place.likes || 0} likes
                          </Typography>
                        </React.Fragment>
                      }
                      primaryTypographyProps={{ variant: "subtitle1" }}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        onClick={() => handlePlaceSelect(place)}
                      >
                        {selectedPlaces.find((p) => p.id === place.id) ? (
                          <Check />
                        ) : (
                          <Add color="primary" />
                        )}
                      </IconButton>
                    </ListItemSecondaryAction>
                  </PlaceItem>
                ))}
              </React.Fragment>
            ))}
            <LoadMoreContainer ref={ref}>
              {isFetchingNextPage ? (
                <div>Loading more...</div>
              ) : hasNextPage ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                >
                  More
                </Button>
              ) : (
                <div>No more places to load</div>
              )}
            </LoadMoreContainer>
          </PlaceList>
        </>
      );
    }

    return null;
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  const handleValidPlaces = () => {
    const day = calculateDaysBetween(startDate, endDate) + 1;
    if (selectedPlaces.length < day) {
      openWarningDialog(`A minimum of ${day} places are required.`);
      return;
    }
    onClose();
  };

  const handlePlaceSelect = (place) => {
    if (selectedPlaces.find((p) => p.id === place.id)) {
      removePlace(place.id);
    } else {
      if (selectedPlaces.length >= 10) {
        openWarningDialog("You can select a maximum of 10 places.");
        return;
      }
      addPlace(place);
    }
  };

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <ModalContainer>
          <Header>
            <IconButton onClick={onClose} color="inherit">
              <ArrowBack />
            </IconButton>
            <SearchBar
              placeholder="enter place name"
              variant="outlined"
              value={searchTerm}
              onChange={handleChangeSearch}
              InputProps={{
                startAdornment: <Search color="action" />,
              }}
            />
          </Header>

          <CategoryFilter>
            {categories.map((category) => (
              <StyledChip
                key={category.name}
                label={category.name}
                onClick={() => handleCategorySelect(category)}
                selected={selectedCategory.name === category.name}
              />
            ))}
          </CategoryFilter>
          {renderContent()}
          <SelectedPlacesThumbnails />

          <ButtonContainer>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={handleValidPlaces}
            >
              Done
            </StyledButton>
          </ButtonContainer>
        </ModalContainer>
      </Modal>
      <WarningDialog
        isOpen={isOpen}
        message={message}
        onClose={closeWarningDialog}
      />
    </>
  );
};

export default PlaceModal;
