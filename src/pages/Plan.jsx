import React from 'react';
import {
    Typography,
    Box,
    Button,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const App = () => {
    const travelData = {
        area: "SEOUL",
        startDate: new Date("2024-08-19"),
        endDate: new Date("2024-08-22"),
        center: { lat: 37.5665, lng: 126.9780 }
    };

    const { area, startDate, endDate, center } = travelData;

    const formatDate = (date) => {
        const options = { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('en-US', options).toUpperCase();
    };

    const mapContainerStyle = {
        width: '100%',
        height: '200px'
    };

    return (
        <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', py: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h4">{area}</Typography>
                <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="body1">{formatDate(startDate)}</Typography>
                    <Typography variant="body1">TO</Typography>
                    <Typography variant="body1">{formatDate(endDate)}</Typography>
                </Box>
            </Box>

            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={10}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mb: 2 }}>
                <Button
                    variant="contained"
                    sx={{
                        width: '37.5%',
                        backgroundColor: '#3a86ff',
                        '&:hover': {
                            backgroundColor: '#2a76ef'
                        }
                    }}
                >
                    Add a place
                </Button>
            </Box>

            {[1, 2, 3, 4].map((day) => (
                <Accordion key={day} sx={{ mb: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{day}일차</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Day {day} content goes here</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#3a86ff',
                        '&:hover': {
                            backgroundColor: '#2a76ef'
                        }
                    }}
                >
                    Previous
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#3a86ff',
                        '&:hover': {
                            backgroundColor: '#2a76ef'
                        }
                    }}
                >
                    Next
                </Button>
            </Box>
        </Container>
    );
};

export default App;