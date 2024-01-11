import "./style.css";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function RegistBadminton() {

    return (
        <div className='card' sx={{ display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
            <div class="card4">
                <div class="top-content">
                    <div class="header">
                        • B A D M I N T O N • T I C K E T •
                    </div>
                    <Box sx={{ padding: { md: 3, xs: 1 }, width: { md: 500 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography color="#4B6889" fontWeight={600} variant="h4" component="div">
                            16 Jan 2023
                        </Typography>
                    </Box>
                    <Chip href="https://maps.app.goo.gl/5HiU8w7CMSzupG7y9" className="location" size="small" label="คณัสนันท์ คอร์ดแบดมินตัน" />
                </div>

                <div class="mid-content">
                    <div class="left-notch"></div>
                    <div class="rip">
                        <div class="dash"></div>
                    </div>
                    <div class="right-notch"></div>
                </div>
                <div class="bot-content">
                    <Box sx={{ padding: { md: 3, xs: 1 }, width: { md: 500 }, display: 'flex', flexDirection: 'column' }}>

                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={{ md: 2, xs: 1 }}
                        >
                            <TextField fullWidth id="outlined-basic" label="ชื่อจ้า" variant="outlined" size="small" />

                            <Button variant="contained" sx={{ minWidth: '160px' }}>เพิ่มจ้า</Button>
                        </Stack>
                        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {[0, 1, 2, 3].map((value) => {
                                const labelId = `checkbox-list-secondary-label-${value}`;
                                return (
                                    <ListItem
                                        key={value}
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt={`Avatar n°${value + 1}`}
                                                    src={`/static/images/avatar/${value + 1}.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default RegistBadminton;