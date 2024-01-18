import "./style.css";
import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { IconButton, LinearProgress, Skeleton, Chip, Typography, TextField, Stack, Button, Box, ListItemAvatar, ListItemText, ListItemButton, ListItem, List } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DiceBearAvatar from "../avatar";


function RegistBadminton() {
    const [newUserName, setNewUserName] = useState('');
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [usersLoading, setUsersLoading] = useState(false);

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
            setUsersLoading(true);
            const res = await axios.get(`https://oleen-activity.cyclic.app/api/users/`);
            setData(res.data.results);
        } catch (err) {
            console.error(err);
        } finally {
            setUsersLoading(false);
        }

    }
    function userSkeleton() {
        return (<ListItem disablePadding>
            <ListItemButton>
                <Skeleton variant="circular" animation="wave" width={40} height={40} sx={{ mr: { md: 2, xs: 1 } }} />
                <Skeleton variant="rounded" animation="wave" width="100%" height={40} />
            </ListItemButton>
        </ListItem>)

    }
    const deleteUser = async (id) => {
        try {
            setLoading(true);
            setProgress(0);
            await axios.delete(`https://oleen-activity.cyclic.app/api/users/${id}`);
            getUsers();
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
            getUsers();
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
    }, []);

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
        <div className="card-wrapper">
            <div className="bg-card bg1"></div>
            <div className="bg-card bg2"></div>
            <div className="bg-card bg3"></div>
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
                            {!latestName ? (<Skeleton variant="rounded" animation="wave" height={40} width='50%' />) : (<Typography color="#4B6889" fontWeight={600} variant="h4" component="div">
                                {latestName?.key}
                            </Typography>)}

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
                            {usersLoading ?
                                (<List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                    {[...Array(5)].map(function (object, i) {
                                        return userSkeleton();
                                    })}
                                </List>) :
                                (<List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                    {data.map((data) => {
                                        const labelId = data.key;

                                        return (
                                            <ListItem
                                                key={data.key}
                                                disablePadding
                                            >
                                                <ListItemButton>
                                                    <ListItemAvatar sx={{ mr: { md: 2, xs: 1 }, minWidth: '40px', aspectRatio: '1', borderRadius: '100%', overflow: 'hidden', backgroundColor: '#cdecf9' }}>
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
                                </List>)}
                        </Box>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default RegistBadminton;