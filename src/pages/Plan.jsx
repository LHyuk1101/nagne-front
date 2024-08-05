import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Typography,
    Box,
    Button,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemText,
    Avatar,
    Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import GoogleMap from '../modules/domainname/components/map/GoogleMap.js';

const Plan = () => {
    const navigate = useNavigate();
    const travelData = {
        area: "SEOUL",
        startDate: new Date("2024-08-02"),
        endDate: new Date("2024-08-11"),
        center: { lat: 37.5665, lng: 126.9780 },
        itinerary: [
            {
                day: 1,
                date: new Date("2024-08-02"),
                places: [
                    { time: "20:50-22:00", type: "Location", name: "성산 일출봉", image: "https://cdn.pixabay.com/photo/2019/10/30/07/43/jeju-4588910_960_720.jpg" },
                    { time: "23:35-23:35", type: "Accommodation", name: "스위트호텔 제주", image: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg", action: "예약하기" }
                ],
                travel: { duration: "95분" }
            },
            {
                day: 2,
                date: new Date("2024-08-03"),
                places: [
                    { time: "12:39-12:39", type: "Accommodation", name: "스위트호텔 제주", image: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg", action: "예약하기" }
                ],
                travel: { duration: "76분" }
            },
            {
                day: 3,
                date: new Date("2024-08-04"),
                places: [
                    { time: "20:50-22:00", type: "Location", name: "성산 일출봉", image: "https://cdn.pixabay.com/photo/2019/10/30/07/43/jeju-4588910_960_720.jpg" },
                    { time: "23:35-23:35", type: "Accommodation", name: "스위트호텔 제주", image: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg", action: "예약하기" }
                ],
                travel: { duration: "95분" }
            },
            {
                day: 4,
                date: new Date("2024-08-05"),
                places: [
                    { time: "20:50-22:00", type: "Location", name: "성산 일출봉", image: "https://cdn.pixabay.com/photo/2019/10/30/07/43/jeju-4588910_960_720.jpg" },
                    { time: "23:35-23:35", type: "Accommodation", name: "스위트호텔 제주", image: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg", action: "예약하기" }
                ],
                travel: { duration: "95분" }
            },
            {
                day: 5,
                date: new Date("2024-08-06"),
                places: [
                    { time: "20:50-22:00", type: "Location", name: "성산 일출봉", image: "https://cdn.pixabay.com/photo/2019/10/30/07/43/jeju-4588910_960_720.jpg" },
                    { time: "23:35-23:35", type: "Accommodation", name: "스위트호텔 제주", image: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg", action: "예약하기" }
                ],
                travel: { duration: "95분" }
            },
            {
                day: 6,
                date: new Date("2024-08-07"),
                places: [
                    { time: "20:50-22:00", type: "Location", name: "성산 일출봉", image: "https://cdn.pixabay.com/photo/2019/10/30/07/43/jeju-4588910_960_720.jpg" },
                    { time: "23:35-23:35", type: "Accommodation", name: "스위트호텔 제주", image: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg", action: "예약하기" }
                ],
                travel: { duration: "95분" }
            }
        ]
    };

    const { area, startDate, endDate, center, itinerary } = travelData;

    const formatDate = (date) => {
        return date.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' });
    };

    const mapContainerStyle = {
        width: '100%',
        height: '200px'
    };

    const handlePrevious = () => {
        navigate('/create');
    };

    const handleNext = () => {
        navigate('/mypage');
    };

    const handleAddAPlace = () => {
        navigate('/plan/:location')
    }

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
                    onClick={handleAddAPlace}
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

            <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
                {itinerary.map((day) => (
                    <Accordion key={day.day} sx={{ mb: 1 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ flexGrow: 1 }}>day {day.day}</Typography>
                            <Typography>{formatDate(day.date)}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                {day.places.map((place, index) => (
                                    <React.Fragment key={index}>
                                        <ListItem alignItems="flex-start">
                                            <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{index + 1}</Avatar>
                                            <ListItemText
                                                primary={
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <Typography variant="subtitle1">{place.time}</Typography>
                                                        <Typography variant="body2">{place.type}</Typography>
                                                    </Box>
                                                }
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography variant="body1" component="span">{place.name}</Typography>
                                                        {place.action && (
                                                            <Button size="small" color="primary" sx={{ ml: 1 }}>
                                                                {place.action}
                                                            </Button>
                                                        )}
                                                    </React.Fragment>
                                                }
                                            />
                                            <Box
                                                component="img"
                                                src={place.image}
                                                alt={place.name}
                                                sx={{ width: 80, height: 80, borderRadius: 1 }}
                                            />
                                        </ListItem>
                                        {index < day.places.length - 1 && (
                                            <ListItem>
                                                <DirectionsCarIcon sx={{ mr: 1 }} />
                                                <Typography variant="body2">{day.travel.duration}</Typography>
                                            </ListItem>
                                        )}
                                        {index < day.places.length - 1 && <Divider variant="inset" component="li" />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button
                    variant="contained"
                    onClick={handlePrevious}
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
                    onClick={handleNext}
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

export default Plan;