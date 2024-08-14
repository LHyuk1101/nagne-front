import {
  Header,
  Destination,
  DateContainer,
  DateText,
} from "./PlanHeader.style.jsx";
import { PLAN_HEADER_TITLE } from "../../constants/constant.js";
import usePlanStore from "../../store/PlanContext.js";
import { toDate, formatDate } from "../../utils/dateUtils.js";
const PlanHeader = () => {
  const { startDate, endDate, placeName } = usePlanStore();

  return (
    <Header>
      <Destination>
        {placeName !== "" ? placeName.toUpperCase() : PLAN_HEADER_TITLE}
      </Destination>
      <DateContainer>
        <DateText>
          {startDate ? `${formatDate(startDate)}(${toDate(startDate)})` : "N/A"}
        </DateText>
        <DateText>-</DateText>
        <DateText>
          {endDate ? `${formatDate(endDate)}(${toDate(endDate)})` : "N/A"}
        </DateText>
      </DateContainer>
    </Header>
  );
};

export default PlanHeader;
