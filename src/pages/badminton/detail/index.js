import "./style.css";
import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { IconButton, LinearProgress,Button, Skeleton, Chip, Typography, TextField, Stack, Box, ListItemAvatar, ListItemText, ListItemButton, ListItem, List, } from "@mui/material";

import { useNavigate } from 'react-router-dom';


import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DiceBearAvatar from '../../avatar'


function RegistBadmintonDetail() {
    const navigate = useNavigate();
    const [newUserName, setNewUserName] = useState('');
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [usersLoading, setUsersLoading] = useState(false);


    const queryParameters = new URLSearchParams(window.location.search)
    const activityId = queryParameters.get("activity")

    const [activity, setActivity] = useState([]);

    const getActivity = async () => {
        try {
            setUsersLoading(true);
            const res = await axios.get(`https://oleen-activity.cyclic.app/api/activities/${activityId}`);
            setActivity(res.data);;
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
            await axios.delete(`https://oleen-activity.cyclic.app/api/activities/${activityId}/members/${id}`);
            getActivity();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
            setProgress(97);
        }
    }
    const addUser = async (user) => {
        const { name } = user;
        try {
            setLoading(true);
            setProgress(0);
            await axios.post(`https://oleen-activity.cyclic.app/api/activities/${activityId}/members`, {
                memberName: name,
            });
            getActivity();
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
        if(!activityId){
            navigate('/list');
        }
        try {
            getActivity();
        } catch (err) {
            console.log(err);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log(activity);
    }, [activity]);

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
            <div className='card-oleen'>
                <div className="top-content" >
                    <div className="header">
                        • B A D M I N T O N • T I C K E T •
                    </div>
                    <Box sx={{ width: '100%' }}>
                        {loading && <LinearProgress variant="determinate" value={progress} />}
                    </Box>
                    <Box sx={{ padding: { md: 3, xs: 2 }, width: { md: 500 }, display: 'flex', flexDirection: 'row', alignItems: 'center' }}><IconButton
                        size="large"
                        edge="start"
                        color="#2E4B6B"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => navigate('/list')}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                        {!activity ? (<Skeleton variant="rounded" animation="wave" height={40} width='50%' />) : (<Typography mr={2} width="100%" color="#4B6889" fontWeight={600} variant="h5" component="div" align="center">
                            {activity?.name}
                        </Typography>)}

                    </Box>
                    <a href={activity.link} target="_blank" rel="noopener noreferrer">
                        <Chip className="location" size="small" label={activity.location} />
                    </a>

                </div>
                <div className="mid-content">
                    <div className="left-notch"></div>
                    <div className="rip">
                        <div className="dash"></div>
                    </div>
                    <div className="right-notch"></div>
                </div>
                <div className="bot-content">
                    <Box sx={{ padding: { md: 3, xs: 2 }, width: { md: 500 }, display: 'flex', flexDirection: 'column' }}>

                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={{ md: 1, xs: 1 }}
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
                                color="primary" variant="contained" sx={{ width: "100%" }}
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
                            (activity?.members?.length > 0 && (<List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                {activity?.members.map((data, index) => {
                                    const labelId = data.uuid;

                                    return (
                                        <ListItem
                                            key={data.uuid}
                                            disablePadding
                                        >
                                            <ListItemButton>
                                                <ListItemAvatar sx={{ mr: { md: 2, xs: 1 }, minWidth: '40px', aspectRatio: '1', borderRadius: '100%', overflow: 'hidden', backgroundColor: '#cdecf9' }}>
                                                    <DiceBearAvatar seed={generateSeed(data.uuid)} />
                                                </ListItemAvatar>
                                                <ListItemText id={labelId} primary={`${index + 1}. ${data.name}`} />
                                                <IconButton aria-label="delete" size="large" onClick={() => handleDelete(labelId)}>
                                                    <DeleteIcon />
                                                </IconButton>

                                            </ListItemButton>
                                        </ListItem>
                                    );
                                })}
                            </List>))}
                    </Box>
                </div>
            </div>
        </div>


    );
}

export default RegistBadmintonDetail;