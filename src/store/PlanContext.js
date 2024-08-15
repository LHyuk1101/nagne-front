import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * @typedef {Object} PlanState
 * @property {Date|null} startDate - 여행 시작 날짜
 * @property {Date|null} endDate - 여행 종료 날짜
 * @property {string} placeName - 여행 장소 이름
 * @property {string} lat - 여행지 위도
 * @property {string} lng - 여행지 경도
 * @property {function(Date): void} setStartDate - 시작 날짜를 설정하는 함수
 * @property {function(Date): void} setEndDate - 종료 날짜를 설정하는 함수
 * @property {function(string): void} setPlaceName - 장소 이름을 설정하는 함수
 * @property {function(string): void} setLat - 위도를 설정하는 함수
 * @property {function(string): void} setLng - 경도를 설정하는 함수
 */

/**
 * @type {import('zustand').UseBoundStore<PlanState>}
 */
const usePlanStore = create(
  persist(
    (set) => ({
      startDate: null,
      endDate: null,
      placeName: "",
      areaCode: 0,
      lat: "",
      lng: "",
      selectedPlaces: [],
      isPlanCreated: false,
      setSelectedPlaces: (selectedItems) =>
        set({ selectedPlaces: selectedItems }),
      setStartDate: (date) => set({ startDate: date }),
      setEndDate: (date) => set({ endDate: date }),
      setPlaceName: (name) => set({ placeName: name }),
      setLat: (lat) => set({ lat: lat }),
      setLng: (lng) => set({ lng: lng }),
      setAreaCode: (code) => set({ areaCode: code }),
      setIsPlanCreated: (value) => set({ isPlanCreated: value }),
    }),
    {
      name: "plan-storage",
      getStorage: () => localStorage,
    },
  ),
);

export default usePlanStore;
