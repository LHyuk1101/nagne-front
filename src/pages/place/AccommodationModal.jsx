import React, { useEffect, useState } from "react";
import {
  Modal,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { Search, ArrowBack, Add, Check } from "@mui/icons-material";
import defaultImg from "../../assets/images/place/default_img.png";
import {
  ModalContainer,
  Header,
  SearchBar,
  PlaceImage,
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
import SelectedPlacesThumbnails from "./SelectedPlacesThumbnails.jsx";
import WarningDialog from "../../components/UI/WarningDialog.jsx";
import { useWarningDialog } from "../../hooks/useWarningDialog.jsx";

const AccommodationModal = ({ open, onClose, areaCode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { selectedLodgings, addLodging, removeLodging } = useSelectedPlaces();
  const { ref, inView } = useInView();
  const { isOpen, message, openWarningDialog, closeWarningDialog } =
    useWarningDialog();
  const isAccommodation = false;

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["placeList", areaCode],
    queryFn: ({ pageParam = 1 }) => getPlaceByArea(areaCode, 80, pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    enabled: open,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const renderContent = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>No data found for Accommodation.</div>;
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
                      secondary={place.address}
                      primaryTypographyProps={{ variant: "subtitle1" }}
                      secondaryTypographyProps={{ variant: "body2" }}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        onClick={() => handlePlaceSelect(place)}
                      >
                        {selectedLodgings.find((p) => p.id === place.id) ? (
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

  const handlePlaceSelect = (place) => {
    if (selectedLodgings.length > 0) {
      openWarningDialog("You cannot select more than one accommodation.");
      return;
    }

    if (selectedLodgings.find((p) => p.id === place.id)) {
      removeLodging(place.id);
    } else {
      addLodging(place);
    }
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
              placeholder="Enter place name"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <Search color="action" />,
              }}
            />
          </Header>

          {renderContent()}
          <SelectedPlacesThumbnails isAccommodation={!isAccommodation} />

          <ButtonContainer>
            <StyledButton variant="contained" color="primary" onClick={onClose}>
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

export default AccommodationModal;
