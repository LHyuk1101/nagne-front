import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  styled,
} from "@mui/material";
import { Search, ArrowBack, Add, Check, Place } from "@mui/icons-material";

const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  maxWidth: "600px",
  margin: "0 auto",
  boxShadow: theme.shadows[5],
  outline: "none",
}));

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: "white",
}));

const SearchBar = styled(TextField)(({ theme }) => ({
  flex: 1,
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: 20,
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
}));

const PlaceImage = styled("img")({
  width: 60,
  height: 60,
  borderRadius: 8,
  marginRight: 16,
  objectFit: "cover",
});

const CategoryFilter = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

const StyledChip = styled(Chip)(({ theme, selected }) => ({
  margin: theme.spacing(0, 0.5),
  backgroundColor: selected ? theme.palette.primary.matchFirst : "transparent",
  color: selected ? "white" : theme.palette.text.primary,
  border: `1px solid ${selected ? theme.palette.primary.matchFirst : theme.palette.divider}`,
  "&:hover": {
    backgroundColor: selected
      ? theme.palette.action.matchFirst
      : theme.palette.primary.matchFirst,
    color: "white",
  },
}));

const PlaceList = styled(List)(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  padding: 0,
}));

const PlaceItem = styled(ListItem)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const SelectedPlaces = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "80%", // 버튼의 너비를 조정
  borderRadius: "20px",
  padding: theme.spacing(1.5),
}));

const PlaceModal = ({ open, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("추천 장소");
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const categories = ["추천 장소", "명소", "맛집", "숙소"];
  const places = [
    {
      id: 1,
      name: "제주 빛의 벙커",
      description: "제주시(제주) 오션뷰 카페",
      image:
        "http://tong.visitkorea.or.kr/cms/resource/23/2378023_image2_1.JPG",
    },
    { id: 2, name: "빛의 벧킹", description: "20년 숙성된 제주의 비밀 빵집" },
    { id: 3, name: "성산 일출봉", description: "명소 ♥ 14558 ★ 4.7" },
    { id: 4, name: "제주동문시장", description: "명소 ♥ 13611 ★ 4" },
    { id: 5, name: "섭지코지", description: "명소 ♥ 12522 ★ 4.4" },
    { id: 6, name: "함덕해변", description: "명소 ♥ 10888 ★ 4.6" },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handlePlaceSelect = (place) => {
    if (selectedPlaces.find((p) => p.id === place.id)) {
      setSelectedPlaces(selectedPlaces.filter((p) => p.id !== place.id));
    } else {
      setSelectedPlaces([...selectedPlaces, place]);
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

        <PlaceList>
          {places.map((place) => (
            <PlaceItem
              key={place.id}
              button
              onClick={() => handlePlaceSelect(place)}
            >
              <PlaceImage
                src={place.image}
                alt={place.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "http://tong.visitkorea.or.kr/cms/resource/23/2378023_image2_1.JPG";
                }}
              />
              <ListItemText
                primary={place.name}
                secondary={place.description}
                primaryTypographyProps={{ variant: "subtitle1" }}
                secondaryTypographyProps={{ variant: "body2" }}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => handlePlaceSelect(place)}>
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

        <SelectedPlaces>
          <Typography variant="subtitle1" gutterBottom>
            선택한 장소 ({selectedPlaces.length})
          </Typography>
          {selectedPlaces.map((place) => (
            <StyledChip
              key={place.id}
              label={place.name}
              onDelete={() => handlePlaceSelect(place)}
              selected={true}
            />
          ))}
        </SelectedPlaces>

        <ButtonContainer>
          <StyledButton variant="contained" color="primary" onClick={onClose}>
            선택완료
          </StyledButton>
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  );
};

export default PlaceModal;