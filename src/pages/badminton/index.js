import "./style.css";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

function RegistBadminton() {

    return (
        <Card className='card' sx={{ display: 'flex', boxShadow: 3, borderRadius: 3}}>
            <Box sx={{ padding: { md: 3, xs: 1 }, width: {md:500}, display: 'flex', flexDirection: 'column' }}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={{md:2, xs:1}}
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
        </Card>
    );
}

export default RegistBadminton;