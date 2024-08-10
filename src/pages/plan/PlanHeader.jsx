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
import LINKS from "../../routes/Links.jsx";
import { useStartPlan } from "../../store/PlanContext.jsx";
import { useNavigate } from "react-router-dom";

const PlanHeader = () => {
  const { startDate, endDate, placeName } = useStartPlan();
  const navigate = useNavigate();

  if (
    startDate === undefined ||
    endDate === undefined ||
    placeName === undefined
  ) {
    navigate({
      pathname: LINKS.CREATE.path,
    });
  }
  return (
    <Header>
      <DestinationColumn>
        <Destination>
          {placeName !== "" ? placeName.toUpperCase() : PLAN_HEADER_TITLE}
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
