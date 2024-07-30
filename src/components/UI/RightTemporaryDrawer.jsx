import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';

const NaviItems = [
    {
        icon: <PersonIcon />,
        text: 'login',
        isLogin: false
    }, {
        icon: null,
        text: 'support',
        isLogin: null
    }, {
        icon: null,
        text: 'community',
        isLogin: null
    }, {
        icon: null,
        text: 'template',
        isLogin: null
    }, {
        icon: null,
        text: 'travle destination',
        isLogin: null
    }, {
        icon: null,
        text: 'logout',
        isLogin: true
    }];

const RightDrawer = ({open, onClose}) => {


    const list = () => (
        <Box
            sx={{width: 200}}
            role="presentation"
            onClick={onClose}
            onKeyDown={onClose}
        >
            <List>
                {NaviItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            {item.icon && (
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                            )}
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >
            {list()}
        </Drawer>
    );
};

export default RightDrawer;