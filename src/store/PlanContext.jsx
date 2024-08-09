import { createContext, useContext } from "react";
import { useState } from "react";

/**
 * @typedef {Object} PlanContextType
 * @property {Date|null} startDate - 여행 시작 날짜
 * @property {function(Date): void} setStartDate - 시작 날짜를 설정하는 함수
 * @property {Date|null} endDate - 여행 종료 날짜
 * @property {function(Date): void} setEndDate - 종료 날짜를 설정하는 함수
 * @property {string} placeName - 여행 장소 이름
 * @property {function(string): void} setPlaceName - 장소 이름을 설정하는 함수
 */

/**
 * 여행 계획 정보를 위한 React Context
 * @type {React.Context<PlanContextType|undefined>}
 */
const PlanContext = createContext(undefined);

export const PlanContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [placeName, setPlaceName] = useState("");

  const value = {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    placeName,
    setPlaceName,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

export const useStartPlan = () => {
  return useContext(PlanContext);
};
