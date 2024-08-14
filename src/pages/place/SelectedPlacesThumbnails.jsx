import { Box, IconButton, styled, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useSelectedPlaces } from "../../store/place/PlaceContext.jsx";
import defaultImg from "../../assets/images/place/default_img.png";
import ThumbnailContentWithTooltip from "../../components/UI/ThumbnailContent.jsx";

const SelectedPlaces = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "auto",
}));

const ThumbnailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  gap: theme.spacing(1),
  overflowX: "auto",
  overflowY: "hidden",
  padding: theme.spacing(1),
  "&::-webkit-scrollbar": {
    height: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[300],
    borderRadius: "4px",
  },
}));

const ThumbnailWrapper = styled(Box)({
  position: "relative",
  width: 60,
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Thumbnail = styled("img")({
  width: 60,
  height: 60,
  borderRadius: 8,
  objectFit: "cover",
});

const ThumbnailContent = styled(Box)(({ theme }) => ({
  maxWidth: 60,
  fontSize: 12,
  textAlign: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginTop: theme.spacing(0.5),
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: -8,
  right: -8,
  padding: 4,
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const SelectedPlacesThumbnails = ({ isAccommodation = false }) => {
  const { selectedPlaces, removePlace, selectedLodgings, removeLodging } =
    useSelectedPlaces();
  const selectedItemSize = selectedPlaces.length;
  const selectedLodgingSize = selectedLodgings.length;
  return (
    <>
      {isAccommodation && selectedLodgingSize > 0 && (
        <SelectedPlaces>
          <Typography variant="subtitle1" gutterBottom>
            selected Accommodation
          </Typography>
          <ThumbnailContainer>
            {selectedLodgings.map((place) => (
              <ThumbnailWrapper key={place.id}>
                <Thumbnail
                  src={place.imgUrl || defaultImg}
                  alt={place.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultImg;
                  }}
                />
                <ThumbnailContentWithTooltip title={place.title} />
                <CloseButton
                  size="small"
                  onClick={() => removeLodging(place.id)}
                >
                  <Close fontSize="small" />
                </CloseButton>
              </ThumbnailWrapper>
            ))}
          </ThumbnailContainer>
        </SelectedPlaces>
      )}
      {selectedItemSize > 0 && !isAccommodation && (
        <SelectedPlaces>
          <Typography variant="subtitle1" gutterBottom>
            seleted Places ({selectedItemSize})
          </Typography>
          <ThumbnailContainer>
            {selectedPlaces.map((place) => (
              <ThumbnailWrapper key={place.id}>
                <Thumbnail
                  src={place.imgUrl || defaultImg}
                  alt={place.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultImg;
                  }}
                />
                <ThumbnailContentWithTooltip title={place.title} />
                <CloseButton size="small" onClick={() => removePlace(place.id)}>
                  <Close fontSize="small" />
                </CloseButton>
              </ThumbnailWrapper>
            ))}
          </ThumbnailContainer>
        </SelectedPlaces>
      )}
    </>
  );
};

export default SelectedPlacesThumbnails;
