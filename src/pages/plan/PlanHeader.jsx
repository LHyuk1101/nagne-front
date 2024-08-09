import {
  Header,
  DestinationColumn,
  Destination,
  EmptyColumn,
  DateColumn,
  DateRange,
  DateText,
} from "./PlanHeader.style.jsx";

const PlanHeader = ({ selectedSlide, startDate, endDate }) => {
  return (
    <Header>
      <DestinationColumn>
        <Destination>
          {selectedSlide ? selectedSlide.toUpperCase() : "UNKNOWN DESTINATION"}
        </Destination>
      </DestinationColumn>
      <EmptyColumn />
      <DateColumn>
        <DateRange>
          <DateText>
            {startDate ? startDate.toLocaleDateString() : "N/A"}
          </DateText>
          <DateText style={{ margin: "4px 0" }}>TO</DateText>
          <DateText>{endDate ? endDate.toLocaleDateString() : "N/A"}</DateText>
        </DateRange>
      </DateColumn>
    </Header>
  );
};

export default PlanHeader;
