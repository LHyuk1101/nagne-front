import { useEffect, useState } from "react";
import {
  Modal,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { Search, ArrowBack, Add, Check } from "@mui/icons-material";
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
import { useQuery } from "@tanstack/react-query";
import { useSelectedPlaces } from "../../store/place/PlaceContext.jsx";

const PlaceModal = ({ open, onClose, areaCode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("attraction");
  const { selectedPlaces, addPlace, removePlace } = useSelectedPlaces();

  const { data, isLoading, error, fetchNextPage, hasNextPage } = useQuery({
    queryKey: ["placeList", selectedCategory],
    queryFn: ({ pageParam = 1 }) => getPlaceByArea(areaCode, selectedCategory),
    enabled: open,
    staleTime: 5 * 60 * 1000,
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
  });

  const categories = ["attraction", "restaurant"];

  const renderContent = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (data) {
      return (
        <>
          <PlaceList>
            {data.items.map((place) => (
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
                  secondary={place.address}
                  primaryTypographyProps={{ variant: "subtitle1" }}
                  secondaryTypographyProps={{ variant: "body2" }}
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
            <LoadMoreContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={() => fetchNextPage()}
                disabled={isLoading}
              >
                더 보기
              </Button>
            </LoadMoreContainer>
          </PlaceList>
        </>
      );
    }

    return null;
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handlePlaceSelect = (place) => {
    if (selectedPlaces.find((p) => p.id === place.id)) {
      removePlace(place.id);
    } else {
      addPlace(place);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContainer>
        <Header>
          <IconButton onClick={onClose} color="inherit">
            <ArrowBack />
          </IconButton>
          <SearchBar
            placeholder="장소명을 입력해주세요"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <Search color="action" />,
            }}
          />
        </Header>

        <CategoryFilter>
          {categories.map((category) => (
            <StyledChip
              key={category}
              label={category}
              onClick={() => handleCategorySelect(category)}
              selected={selectedCategory === category}
            />
          ))}
        </CategoryFilter>
        {renderContent()}
        <SelectedPlacesThumbnails />

        <ButtonContainer>
          <StyledButton variant="contained" color="primary" onClick={onClose}>
            Done
          </StyledButton>
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  );
};

export default PlaceModal;
