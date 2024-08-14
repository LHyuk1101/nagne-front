import {
  Header,
  Destination,
  DateContainer,
  DateText,
} from "./PlanHeader.style.jsx";
import { PLAN_HEADER_TITLE } from "../../constants/constant.js";
import LINKS from "../../routes/Links.jsx";
import usePlanStore from "../../store/PlanContext.js";
import { useNavigate } from "react-router-dom";
import { toDate, formatDate } from "../../utils/dateUtils.js";
const PlanHeader = () => {
  const { startDate, endDate, placeName } = usePlanStore();
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
