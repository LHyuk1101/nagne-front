import { useEffect, useState } from "react";
import {
  Modal,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
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
} from "./PlaceModal.style.jsx";
import { getPlaceByArea } from "../../services/place/place.js";
import { useQuery } from "@tanstack/react-query";
import { useSelectedPlaces } from "../../store/place/PlaceContext.jsx";

const PlaceModal = ({ open, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("attraction");
  const { selectedPlaces, addPlace, removePlace } = useSelectedPlaces();

  const { data, isLoading, error } = useQuery({
    queryKey: ["placeList", {}],
    queryFn: () => getPlaceByArea(),
    enabled: open,
  });
  const categories = ["attraction", "restaurant"];

  useEffect(() => {}, []);

  const randerContent = () => {
    if (isLoading) {
      return <div> Loading Bar...</div>;
    }

    if (error) {
      return <div>this is Error</div>;
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
                  src={place.placeUrlImages[0]}
                  alt={place.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = { defaultImg };
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
          </PlaceList>
          <Box> 더 보기</Box>
        </>
      );
    }
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
        {randerContent()}
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
