import {
  Box,
  Button,
  Chip,
  List,
  ListItem,
  styled,
  TextField,
} from "@mui/material";

export const ModalContainer = styled(Box)(({ theme }) => ({
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

export const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: "white",
}));

export const SearchBar = styled(TextField)(({ theme }) => ({
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

export const PlaceImage = styled("img")({
  width: 60,
  height: 60,
  borderRadius: 8,
  marginRight: 16,
  objectFit: "cover",
});

export const CategoryFilter = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export const StyledChip = styled(Chip)(({ theme, selected }) => ({
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

export const PlaceList = styled(List)(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  padding: 0,
}));

export const PlaceItem = styled(ListItem)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  width: "80%",
  borderRadius: "20px",
  padding: theme.spacing(1.5),
}));
