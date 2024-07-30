import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Divider, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };
    const handleLoginClick = () => {
        navigate("/login");
        setIsDrawerOpen(false);
    };
    const drawerContent = (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{ width: 250 }}
        >
            <IconButton onClick={toggleDrawer(false)} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <CloseIcon />
            </IconButton>
            <List>
                <ListItemButton onClick={handleLoginClick}>
                    <ListItemText primary="로그인하기 >" />
                </ListItemButton>
                <Divider />
                <ListItem>
                    <ListItemText primary="고객지원" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="커뮤니티" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="템플릿" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <AppBar position="static" style={{ marginBottom: '5rem' }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/path/to/logo.png" alt="Nagne" style={{ height: '40px', marginRight: '10px' }} />
                        <Typography variant="h6">Nagene</Typography>
                    </div>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
            </Drawer>
        </>
    );
};

export default Header;
