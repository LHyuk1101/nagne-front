import { Box, styled, Typography } from "@mui/material";

export const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  maxHeight: 120,
  backgroundColor: "#ffffff",
  padding: theme.spacing(3),
  boxSizing: "border-box",
  width: "100%",
}));

export const HeaderColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const Destination = styled(Typography)(({ theme }) => ({
  fontSize: 26,
  fontWeight: 700,
  color: "#464555",
  letterSpacing: "-0.5px",
  marginBottom: theme.spacing(1), // 추가: 하단 여백 추가
}));

export const DateRange = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const DateText = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  color: "#464555",
  letterSpacing: "0.25px",
  alignSelf: "center",
  marginRight: "5px",
  fontWeight: 530,
}));

export const DateContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});
