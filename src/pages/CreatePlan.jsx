import { Container, Typography, Box, Button, ThemeProvider } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";
import { addMonths, differenceInDays } from 'date-fns';
import '../assets/styles/CreatePlan.css';
import { Modal } from '../components/UI/Modal';
import { theme } from '../assets/styles/globalStyle'

const CreatePlan = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [error, setError] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);

        if (start && end) {
            const dayDifference = differenceInDays(end, start);
            if (dayDifference > 9) {
                setError("Please select a date less than 10 days");
            } else {
                setError("");
            }
        } else {
            setError("");
        }
    };

    const isNextButtonDisabled = !startDate || !endDate || error !== "";

    return (
        <ThemeProvider theme={theme}>
        <Container style={{ maxWidth: '600px', textAlign: 'center', marginTop: '3rem' }}>
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
                />
            </Box>
            {error && (
                <Typography variant="body2" color="error" style={{ marginTop: '3rem' }}>

                    {error}
                </Typography>
            )}
            <Button 
                variant="contained" 
                color="primary" 
                style={{ marginTop: '3rem' }} 
                disabled={isNextButtonDisabled}
                onClick={toggleOpen}
            >
                NEXT
            </Button>
            <Modal 
                isOpen={isOpen}
                toggleOpen={toggleOpen}
            />
        </Container>
        </ThemeProvider>
    );
};

export default CreatePlan;
