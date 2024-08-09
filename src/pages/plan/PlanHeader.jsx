import {
  Header,
  DestinationColumn,
  Destination,
  EmptyColumn,
  DateColumn,
  DateRange,
  DateText,
} from "./PlanHeader.style.jsx";
import { PLAN_HEADER_TITLE } from "../../constants/constant.js";

const PlanHeader = ({ selectedPlaceName, startDate, endDate }) => {
  return (
    <Header>
      <DestinationColumn>
        <Destination>
          {selectedPlaceName
            ? selectedPlaceName.toUpperCase()
            : PLAN_HEADER_TITLE}
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
