import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths, subMonths } from "date-fns";

const CustomCalendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const CustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <div className="custom-header">
      <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {"<"}
      </button>
      <span>{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</span>
      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {">"}
      </button>
    </div>
  );

  return (
    <div className="calendar-container">
      <h2>여행 기간이 어떻게 되시나요?</h2>
      <p>* 여행 일자는 최대 10일까지 선정 가능합니다.</p>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        monthsShown={2}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 12)}
        renderCustomHeader={CustomHeader}
      />
      <button className="select-button">선택</button>
    </div>
  );
};

export default CustomCalendar;
