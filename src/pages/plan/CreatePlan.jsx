import {
  Container,
  Typography,
  Box,
  Button,
  ThemeProvider,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { addDays, addMonths } from "date-fns";
import "../../styles/CreatePlan.css";
import { SelectDestinationModal } from "../../components/UI/SelectDestinationModal";
import { theme } from "../../styles/globalStyle";

const CreatePlan = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const isNextButtonDisabled = !startDate || !endDate;

  const filterDate = (date) => {
    if (!startDate) return date;
    if (!endDate) {
      return date >= startDate && date <= addDays(startDate, 9);
    }
    return true; // endDate가 선택된 후에는 모든 날짜를 활성화
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{ maxWidth: "600px", textAlign: "center", marginTop: "3rem" }}
      >
        <Typography variant="h4" gutterBottom>
          Please select a travel date
        </Typography>
        <Box display="flex" justifyContent="center" mt={2}>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            minDate={new Date()}
            maxDate={addMonths(new Date(), 5)}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            showDisabledMonthNavigation
            calendarStartDay={1}
            filterDate={filterDate} // 추가된 필터링 함수
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "3rem" }}
          disabled={isNextButtonDisabled}
          onClick={toggleOpen}
        >
          NEXT
        </Button>
        <SelectDestinationModal isOpen={isOpen} toggleOpen={toggleOpen} />
      </Container>
    </ThemeProvider>
  );
};

export default CreatePlan;
