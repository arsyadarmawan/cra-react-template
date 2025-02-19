import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

const Sidenav = ({ open, onClose }) => {
    const items = [
        { text: 'Inbox', icon: <InboxIcon /> },
        { text: 'Mail', icon: <MailIcon /> },
    ];

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            sx={{
                '& .MuiDrawer-paper': {
                    backgroundColor: '#333',
                    color: '#fff',
                    width: '250px',
                },
            }}
        >
            <List>
                {items.map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidenav;