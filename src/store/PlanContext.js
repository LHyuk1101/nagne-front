import { create } from "zustand";

/**
 * @typedef {Object} PlanState
 * @property {Date|null} startDate - 여행 시작 날짜
 * @property {Date|null} endDate - 여행 종료 날짜
 * @property {string} placeName - 여행 장소 이름
 * @property {function(Date): void} setStartDate - 시작 날짜를 설정하는 함수
 * @property {function(Date): void} setEndDate - 종료 날짜를 설정하는 함수
 * @property {function(string): void} setPlaceName - 장소 이름을 설정하는 함수
 */

/**
 * @type {import('zustand').UseBoundStore<PlanState>}
 */
const usePlanStore = create((set) => ({
  startDate: null,
  endDate: null,
  placeName: "",
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setPlaceName: (name) => set({ placeName: name }),
}));

export default usePlanStore;

// export const useStartPlan = () => {
//   return useContext(PlanContext);
// };
