import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Modal,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import {
  Close as CloseIcon,
  Favorite as FavoriteIcon,
  Place as PlaceIcon,
  Phone as PhoneIcon,
  AccessTime as AccessTimeIcon,
} from "@mui/icons-material";
import defaultImg from "../../assets/images/place/default_img.png";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: "90%",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: theme.palette.grey[500],
  zIndex: 1,
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 240,
  marginTop: 30,
  padding: 24,
  paddingBottom: 0,
  borderRadius: theme.shape.borderRadius,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
  flewGrow: 1,
  overflowY: "auto",
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: "bold",
}));

const InfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1),
  display: "flex",
  alignItems: "center",
}));

const StatsTypography = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: "flex",
  alignItems: "center",
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  maxHeight: "150px",
  overflowY: "auto",
}));

const CustomPoiModal = ({ open, onClose, poi }) => {
  if (!poi) return null;
  const isContactNumber = poi.contactNumber !== "";
  const isOpeningHour = poi.opentime !== "";

  return (
    <StyledModal open={open} onClose={onClose}>
      <StyledCard>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <StyledCardMedia
          component="img"
          image={poi.imgUrl || defaultImg}
          alt={poi.title}
        />
        <StyledCardContent>
          <TitleTypography variant="h5">{poi.title}</TitleTypography>
          <InfoRow>
            <StatsTypography variant="body2" color="text.secondary">
              <FavoriteIcon
                color="error"
                fontSize="small"
                style={{ color: "black", marginRight: "8px" }}
              />
              {poi.likes}
            </StatsTypography>
          </InfoRow>
          <DescriptionTypography variant="body2" color="text.secondary">
            {poi.overview}
          </DescriptionTypography>
          <InfoRow>
            <IconWrapper>
              <PlaceIcon color="action" fontSize="small" />
            </IconWrapper>
            <Typography variant="body2">{poi.address}</Typography>
          </InfoRow>
          {isContactNumber && (
            <InfoRow>
              <IconWrapper>
                <PhoneIcon color="action" fontSize="small" />
              </IconWrapper>
              <Typography variant="body2">{poi.contactNumber}</Typography>
            </InfoRow>
          )}
          {isOpeningHour && (
            <InfoRow>
              <IconWrapper>
                <AccessTimeIcon color="action" fontSize="small" />
              </IconWrapper>
              <Typography variant="body2">
                Opening Hours: {poi.opentime}
              </Typography>
            </InfoRow>
          )}
        </StyledCardContent>
      </StyledCard>
    </StyledModal>
  );
};

export default CustomPoiModal;
