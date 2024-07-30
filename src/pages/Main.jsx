import React from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components for the images and layout
const OverlayGroup = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '235px',
    height: '91px',
}));

const NagneImage = styled('img')(({ theme }) => ({
    width: '111px',
    objectFit: 'cover',
    position: 'absolute',
    height: '91px',
    top: 0,
    left: 0,
}));

const AreaImage = styled('img')(({ theme }) => ({
    width: '159px',
    height: '162px',
}));

const NavBar = () => (
    <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://ifh.cc/g/P714sJ.png" style={{ marginRight: '30px', height: '60px' }} />
                <Typography variant="h6" sx={{ color: '#000000' }}>
                    Nagne
                </Typography>
            </div>
            <Button color="inherit" sx={{ color: '#000000', fontSize: '2rem',
                minWidth: 'auto',
                padding: '6px 12px'  }}>
                =
            </Button>
        </Toolbar>
    </AppBar>
);

const Logo = () => (
    <Box sx={{ position: 'relative', width: '584px', height: '90.54px' }}>
        <Box sx={{ position: 'relative', height: '91px' }}>
            <OverlayGroup>
                <Typography variant="h5" sx={{ position: 'absolute', top: '23px', left: '83px', textAlign: 'center' , color: '#000000' }}>
                </Typography>
            </OverlayGroup>
        </Box>
    </Box>
);

const MainContent = () => (
    <Box sx={{ position: 'relative', width: '604px', height: '962px' }}>
        <Box sx={{ position: 'absolute', width: '604px', height: '439px', top: '416px', left: 0 }}>
            <Typography variant="h4" sx={{ position: 'absolute', top: '28px', left: '20px', color: '#000000' }}>
                Travel Destination
            </Typography>
            <Box sx={{ position: 'absolute', top: '168px', left: '20px', display: 'flex', gap: 2 }}>
                <Box>
                    <AreaImage src="area-3-image.svg" alt="Area 1" />
                    <Typography variant="h6" sx={{ textAlign: 'center', color: '#000000' }}> {/* Updated text color */}
                        Area 1
                    </Typography>
                </Box>
                <Box>
                    <AreaImage src="area-2-image.svg" alt="Area 2" />
                    <Typography variant="h6" sx={{ textAlign: 'center', color: '#000000' }}> {/* Updated text color */}
                        Area 2
                    </Typography>
                </Box>
                <Box>
                    <AreaImage src="area-1-image.svg" alt="Area 3" />
                    <Typography variant="h6" sx={{ textAlign: 'center', color: '#000000' }}> {/* Updated text color */}
                        Area 3
                    </Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={{ position: 'absolute', width: '604px', height: '368px', top: '22px', left: 0 }}>
            <Typography variant="h3" sx={{ position: 'absolute', top: '-1px', left: '20px', color: '#000000' }}>
                <span>Get recommended <br />hidden hot places <br />in Korea and <br />make a travel plan!<br /><br /></span>
                <span style={{ fontSize: '25px' }}>Are you ready?</span>
            </Typography>
            <Box sx={{ position: 'absolute', width: '180px', height: '68px', top: '298px', right: '20px' }}>
                <Button variant="contained" sx={{ width: '100%', height: '100%', backgroundColor: '#3561f1', border: '1px solid #000' }}>
                    <Typography variant="h6" sx={{ color: '#ffffff' }}>
                        Let’s Start!
                    </Typography>
                </Button>
            </Box>
        </Box>
    </Box>
);

const App = () => {
    return (
        <Container sx={{ backgroundColor: '#ffffff', height: '100%', padding: 2 }}>
            <NavBar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
                <Logo />
                <MainContent />
            </Box>
        </Container>
    );
}

export default App;