import dayjs from "dayjs";

/**
 * 두 날짜 사이의 일수를 계산합니다.
 * @param {string|Date|dayjs.Dayjs} startDate - 시작 날짜
 * @param {string|Date|dayjs.Dayjs} endDate - 종료 날짜
 * @returns {number} 두 날짜 사이의 일수
 */
export const calculateDaysBetween = (startDate, endDate) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  return end.diff(start, "day");
};

/**
 * Date To 'YYYY.MM.DD' 형식으로 변경합니다.
 * @param {string|Date|dayjs.Dayjs} date
 * @returns {string}
 */
export const formatDate = (date) => {
  return date ? dayjs(date).format("YYYY.MM.DD") : "N/A";
};

/**
 * 현재 요일을 반환합니다.
 * @param {string|Date|dayjs.Dayjs} date
 * @returns {string}
 */
export const toDate = (date) => {
  return dayjs(date).format("ddd");
};
