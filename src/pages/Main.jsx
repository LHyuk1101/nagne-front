import React from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';

const OverlayGroup = (props) => (
    <Box
        {...props}
        sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '235px',
            height: '91px',
        }}
    />
);

const AreaImage = (props) => (
    <Box
        component="img"
        {...props}
        sx={{
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
        }}
    />
);

const NavBar = () => (
    <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        </Toolbar>
    </AppBar>
);

const Logo = () => (
    <Box sx={{ position: 'relative', width: '100%', height: '90.54px' }}>
        <Box sx={{ position: 'relative', height: '91px' }}>
            <OverlayGroup>
                <Typography variant="h5" sx={{ position: 'absolute', top: '23px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: '#000000' }}>
                </Typography>
            </OverlayGroup>
        </Box>
    </Box>
);

const MainContent = () => (
    <Box sx={{ position: 'relative', width: '100%', paddingBottom: '16px' }}>
        <Box sx={{ padding: '16px 20px' }}>
            <Typography variant="h4" sx={{ color: '#000000', marginBottom: '16px' }}>
                Travel Destination
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                <Box sx={{ width: 'calc(33% - 8px)' }}>
                    <AreaImage src="https://ifh.cc/g/P714sJ.png" alt="Area 1" />
                    <Typography variant="h6" sx={{ textAlign: 'center', color: '#000000', marginTop: '8px' }}>
                        Area 1
                    </Typography>
                </Box>
                <Box sx={{ width: 'calc(33% - 8px)' }}>
                    <AreaImage src="https://ifh.cc/g/P714sJ.png" alt="Area 2" />
                    <Typography variant="h6" sx={{ textAlign: 'center', color: '#000000', marginTop: '8px' }}>
                        Area 2
                    </Typography>
                </Box>
                <Box sx={{ width: 'calc(33% - 8px)' }}>
                    <AreaImage src="https://ifh.cc/g/P714sJ.png" alt="Area 3" />
                    <Typography variant="h6" sx={{ textAlign: 'center', color: '#000000', marginTop: '8px' }}>
                        Area 3
                    </Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={{ padding: '16px 20px', textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: '#000000', marginBottom: '16px', fontSize: '5vw' }}>
                Get recommended <br />hidden hot places <br />in Korea and <br />make a travel plan!
            </Typography>
            <Typography variant="h5" sx={{ fontSize: '4vw', color: '#000000', marginBottom: '16px' }}>
                Are you ready?
            </Typography>
            <Button variant="contained" sx={{ width: '80%', maxWidth: '300px', height: '48px', backgroundColor: '#3561f1', border: '1px solid #000', margin: '0 auto' }}>
                <Typography variant="h6" sx={{ color: '#ffffff' }}>
                    Let’s Start!
                </Typography>
            </Button>
        </Box>
    </Box>
);

const App = () => {
    return (
        <Container sx={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: 0 }}>
            <NavBar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <Logo />
                <MainContent />
            </Box>
        </Container>
    );
}

export default App;