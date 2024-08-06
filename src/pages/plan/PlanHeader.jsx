import {
  DateColumn,
  DateText,
  Destination,
  DestinationColumn,
  EmptyColumn,
  Header,
  DateRange,
} from "./PlanHeader.style.jsx";

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
