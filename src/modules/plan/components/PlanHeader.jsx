import { Box, styled, Typography } from "@mui/material";

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: 120,
  backgroundColor: "#ffffff",
  padding: theme.spacing(3),
  boxSizing: "border-box",
  width: "100%",
}));

const HeaderColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const DestinationColumn = styled(HeaderColumn)({
  flex: "0 0 35%",
});

const DateColumn = styled(HeaderColumn)({
  flex: "0 0 40%",
});

const EmptyColumn = styled(HeaderColumn)({
  flex: "0 0 10%",
});

const Destination = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  fontWeight: 700,
  color: "#464555",
  letterSpacing: "-0.5px",
}));

const DateRange = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const DateText = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  color: "#464555",
  letterSpacing: "0.25px",
  alignSelf: "center",
}));

const PlanHeader = () => {
  return (
    <Header>
      <DestinationColumn>
        <Destination>SEOUL</Destination>
      </DestinationColumn>
      <EmptyColumn />
      <DateColumn>
        <DateRange>
          <DateText>2024.08.19(MON)</DateText>
          <DateText style={{ margin: "4px 0" }}>TO</DateText>
          <DateText>2024.08.22(THU)</DateText>
        </DateRange>
      </DateColumn>
    </Header>
  );
};

export default PlanHeader;
