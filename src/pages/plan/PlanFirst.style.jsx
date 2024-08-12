import { Box, Button, styled, Tab, Tabs, Typography } from "@mui/material";

export const StyledTabs = styled(Tabs)({
  borderBottom: "1px solid #e0e0e0",
});

export const StyledTab = styled(Tab)({
  textTransform: "none",
  fontWeight: 600,
  color: "#4FC3F7",
  "&.Mui-selected": {
    color: "#4FC3F7",
  },
});

export const ContentArea = styled(Box)({
  flex: 1,
  overflowY: "auto",
  padding: "2px 1px",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
});

export const PlaceList = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const PlaceHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 1.5),
}));

export const PlaceNumber = styled(Typography)(({ theme }) => ({
  width: 40,
  height: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: theme.spacing(2),
  fontSize: 45,
  transform: "translateY(-15%)",
  fontWeight: 700,
}));

export const PlaceName = styled(Typography)(({ theme }) => ({
  flex: 1,
  fontSize: 18,
  fontWeight: 500,
}));

export const AddPlaceButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary,
  fontWeight: 600,
  textTransform: "none",
  padding: theme.spacing(1, 0),
  justifyContent: "flex-start",
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "1rem",
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  padding: "0 1rem",
  maxWidth: "600px",
  margin: "0 auto",
  boxSizing: "border-box",
}));

export const CreateScheduleButton = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary,
  color: "#ffffff",
  fontWeight: 600,
  fontSize: 16,
  "&:hover": {
    backgroundColor: "#1765CC",
  },
}));

export const PlaceItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  borderBottom: "1px solid #e0e0e0",
}));

export const PlaceItemNumber = styled(Typography)(
  ({ theme, backgroundColor }) => ({
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    color: "#ffffff",
    borderRadius: "50%",
    marginRight: theme.spacing(2),
    fontSize: 16,
    fontWeight: 600,
  }),
);

export const PlaceItemContent = styled(Box)({
  flex: 1,
});

export const PlaceItemName = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  marginBottom: theme.spacing(0.5),
}));

export const PlaceItemAddress = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: "#666",
}));

export const PlaceImgContent = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  marginRight: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
}));

export const PlaceImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const PlaceItemActions = styled(Box)({
  display: "flex",
  alignItems: "center",
});
