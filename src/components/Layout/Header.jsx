import {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import RightSideMenu from '../UI/RightSideMenu.jsx';
import {WINDOW_MD_WIDTH_SIZE} from "../../constants/constant.js";
import Box from "@mui/material/Box";
import logo from '../../assets/images/nagne_logo.png';
import titleLogo from '../../assets/images/nagne_title_logo.png';

/**
 * @typedef {Object} NaviItem
 * @property {string} text - 화면에서 보이는 메뉴 Text
 * @property {string} route - route 주소
 * @property {boolean|null} isLogin - login 상태인지 확인. true = 로그인중, false = 로그인 이전, null = 기본으로 보여줘야할 데이터
 */

/** @type {NaviItem[]} */
const NaviItems = [
    {
        text: 'Travel Destinations',
        route: '/travel',
        isLogin: null
    },
    {
        text: 'Templates',
        route: '/templates',
        isLogin: null
    },
    {
        text: 'Community',
        route: '/community',
        isLogin: null
    },
    {
        text: 'Support',
        route: '/support',
        isLogin: null
    },
    {
        text: 'Login',
        route: '/login',
        isLogin: false
    },
    {
        text: 'Logout',
        route: '/logout',
        isLogin: true
    }
];

const Header = () => {
    const [open, setOpen] = useState(false);
    /** @type {boolean} */
    const [isMobile, setIsMobile] = useState(window.innerWidth <= WINDOW_MD_WIDTH_SIZE);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    // 로그인 시 setIsLoggedIn을 핸들링 할 함수.
    const manageLoggedInUser = () => {

        return null;
    }

    const getFilteredNaviItems = () => {
        return NaviItems.filter(item =>
            item.isLogin === null || item.isLogin === isLoggedIn
        );
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
                            src={logo}
                            alt="Logo"
                            style={{
                                height: '46px',
                                marginRight: '10px'
                            }}
                        />
                        <Typography variant="h6" component="div">
                        <img
                            src={titleLogo}
                            alt="titleLogo"
                            style={{
                                height: '50px',
                                marginRight: '10px'
                            }}
                        />
                        </Typography>
                    </Box>
                    {isMobile ? (
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
                    ) : (
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            {getFilteredNaviItems().map((item, index) => (
                                <Button
                                    key={index}
                                    color="inherit"
                                    sx={{ml: 2}}
                                >
                                    {item.text}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <RightSideMenu isLoggedIn={isLoggedIn} open={open} onClose={toggleDrawer(false)}/>
        </>
    );
};

export default Header;