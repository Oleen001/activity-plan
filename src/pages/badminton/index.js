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
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useState, useEffect } from "react";
import axios from "axios";
import { IconButton, LinearProgress } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DiceBearAvatar from "../avatar";


function RegistBadminton() {
    const [newUserName, setNewUserName] = useState('');
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);

    const getLatestName = async () => {
        try {
            const res = await axios.get("https://oleen-activity.cyclic.app/api/users/latestName");
            setLatestName(res.data);
        } catch (err) {
            console.error(err);
        }
    }
    const [latestName, setLatestName] = useState(() => {
        const res = getLatestName();
        return res.data;
    });
    const [data, setData] = useState([]);

    const getUsers = async () => {
        try {
            const res = await axios.get(`https://oleen-activity.cyclic.app/api/users/`);
            setData(res.data.results);
        } catch (err) {
            console.error(err);
        }

    }
    const deleteUser = async (id) => {
        try {
            setLoading(true);
            setProgress(0);
            await axios.delete(`https://oleen-activity.cyclic.app/api/users/${id}`);
            getLatestName();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
            setProgress(97);
        }
    }
    const addUser = async (user) => {
        const { name, img } = user;
        try {
            setLoading(true);
            setProgress(0);
            await axios.post("https://oleen-activity.cyclic.app/api/users/", {
                name: name,
                img: img // Assuming 'img' is a URL to the user's image
            });
            getLatestName();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
            setProgress(97);
        }
    }

    function handleDelete(id) {
        deleteUser(id);
    }

    function handleAdd(name, imgURL) {
        const user = {
            name: name,
            img: imgURL
        }
        addUser(user);
    }
    function handleInputChange(event) {
        setNewUserName(event.target.value);
    }

    function handleAddClick() {
        handleAdd(newUserName);
        setNewUserName('');
    }


    const generateSeed = (name) => {
        return name.toLowerCase(); // You can customize this as needed
    };



    useEffect(() => {
        try {
            getUsers();
        } catch (err) {
            console.log(err);
        }
    }, [latestName]);

    useEffect(() => {

    }, [data]);

    useEffect(() => {
        let progressInterval;
        if (loading) {
            progressInterval = setInterval(() => {
                setProgress((oldProgress) => {
                  const diff = Math.random() * 50;
                  console.log(Math.min(oldProgress + diff, 95));
                  return Math.min(oldProgress + diff, 95);
                });
              }, 100);
        } else {
            clearInterval(progressInterval);
        }

        return () => {
            clearInterval(progressInterval);
        };
    }, [loading]);


    return (
        <div className='card' sx={{ display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
            <div class="card4">
                <div class="top-content">
                    <div class="header">
                        • B A D M I N T O N • T I C K E T •
                    </div>
                    <Box sx={{ width: '100%' }}>
                        {loading && <LinearProgress variant="determinate" value={progress} />}
                    </Box>
                    <Box sx={{ padding: { md: 3, xs: 1 }, width: { md: 500 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography color="#4B6889" fontWeight={600} variant="h4" component="div">
                            {latestName?.key}
                        </Typography>
                    </Box>
                    <a href="https://maps.app.goo.gl/5HiU8w7CMSzupG7y9" target="_blank" rel="noopener noreferrer">
                        <Chip href="https://maps.app.goo.gl/5HiU8w7CMSzupG7y9" className="location" size="small" label={"คณัสนันท์ คอร์ดแบดมินตัน"} />
                    </a>

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
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="ชื่อจ้า"
                                variant="outlined"
                                size="small"
                                value={newUserName}
                                onChange={handleInputChange}
                            />

                            <Button
                                variant="contained"
                                sx={{ minWidth: '160px' }}
                                onClick={handleAddClick} // Attach an onClick handler
                            >
                                เพิ่มจ้า
                            </Button>
                        </Stack>
                        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {data.map((data) => {
                                const labelId = data.key;
                                return (
                                    <ListItem
                                        key={data.key}
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemAvatar sx={{ mr: { md: 2, xs: 1 }, minWidth: '40px', borderRadius: '100%', overflow: 'hidden', backgroundColor: '#cdecf9' }}>
                                                <DiceBearAvatar seed={generateSeed(data.key)} />
                                            </ListItemAvatar>
                                            <ListItemText id={labelId} primary={data.props.name} />
                                            <IconButton aria-label="delete" size="large" onClick={() => handleDelete(labelId)}>
                                                <DeleteIcon />
                                            </IconButton>

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