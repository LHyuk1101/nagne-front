import { Box, styled, Typography } from "@mui/material";

export const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: 80,
  maxHeight: 100,
  backgroundColor: "#ffffff",
  padding: theme.spacing(3),
  boxSizing: "border-box",
  width: "100%",
}));

export const HeaderColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const DestinationColumn = styled(HeaderColumn)({
  flex: "0 0 35%",
});

export const DateColumn = styled(HeaderColumn)({
  flex: "0 0 40%",
});

export const EmptyColumn = styled(HeaderColumn)({
  flex: "0 0 10%",
});

export const Destination = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  fontWeight: 700,
  color: "#464555",
  letterSpacing: "-0.5px",
}));

export const DateRange = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const DateText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  color: "#464555",
  letterSpacing: "0.25px",
  alignSelf: "center",
}));
