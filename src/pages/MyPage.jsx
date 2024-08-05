import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import {useNavigate} from "react-router-dom";

const MyPage = () => {
    const navigate = useNavigate();
    const [plans, setPlans] = useState([
        { id: 1, name: 'plan 1', location: '서울', startDate: '8/1', endDate: '8/7' },
        { id: 2, name: 'plan 2', location: '제주', startDate: '8/1', endDate: '8/7' },
    ]);

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleDetailClick = (plan) => {
        setSelectedPlan(plan);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleEditClick = (plan) => {
        console.log('Edit clicked for plan:', plan);
        navigate('/create');
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    my plan
                </Typography>
                <List>
                    {plans.map((plan) => (
                        <ListItem key={plan.id} sx={{ border: '1px solid #ccc', mb: 2, borderRadius: 1 }}>
                            <ListItemText
                                primary={plan.name}
                                secondary={`${plan.location} ${plan.startDate}-${plan.endDate} plan`}
                            />
                            <Button variant="contained" onClick={() => handleEditClick(plan)} sx={{ mr: 1 }}>
                                수정
                            </Button>
                            <Button variant="contained" onClick={() => handleDetailClick(plan)}>
                                상세
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Plan Details</DialogTitle>
                <DialogContent>
                    {selectedPlan && (
                        <>
                            <Typography variant="h6">{selectedPlan.name}</Typography>
                            <Typography>Location: {selectedPlan.location}</Typography>
                            <Typography>Start Date: {selectedPlan.startDate}</Typography>
                            <Typography>End Date: {selectedPlan.endDate}</Typography>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default MyPage;