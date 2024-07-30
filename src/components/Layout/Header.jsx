import {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RightDrawer from '../UI/RightTemporaryDrawer.jsx';
import {WINDOW_MD_WIDTH_SIZE} from "../../constants/constant.js";
import Box from "@mui/material/Box";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= WINDOW_MD_WIDTH_SIZE);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= WINDOW_MD_WIDTH_SIZE);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    return (
        <>
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    backgroundColor: 'white',
                    color: '#464555',
                    borderBottom: '1px solid #E0E0E0'
                }}
            >
                <Toolbar>
                    <Box sx={{display: 'flex', alignItems: 'center', flexGrow: 1}}>
                        <img
                            src="/path/to/your/logo.png"
                            alt="Logo"
                            style={{
                                height: '30px',
                                marginRight: '10px'
                            }}
                        />
                        <Typography variant="h6" component="div">
                            Nagne
                        </Typography>
                    </Box>
                    {isMobile && (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{
                                outline: 'none',
                                border: 'none',
                                '&:focus': {
                                    outline: 'none',
                                    border: 'none',
                                }
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <RightDrawer open={open} onClose={toggleDrawer(false)}/>
        </>
    );
};

export default Header;