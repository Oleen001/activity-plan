import "./style.css";
import EventCard from "./eventCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { List, ListItem, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";


function BadmintonList() {
    const [activities, setActivities] = useState([]);
    const navigate = useNavigate();

    const getActivities = async () => {
        try {
            const res = await axios.get("https://oleen-activity.cyclic.app/api/activities");
            setActivities(res.data.sort((a, b) => new Date(b.props.created) - new Date(a.props.created)));
        } catch (err) {
            console.error(err);
        }
    }
    const handleListItemClick = (activityId) => {
        navigate(`/?activity=${activityId}`); // Navigate to /:id path with the activity ID
    };

    useEffect(() => {
        try {
            getActivities();
        } catch (err) {
        }
    }, []);
    
    const sortedActivities = activities.sort((a, b) => b.props.pinned - a.props.pinned);

    return (
        <div className="card-wrapper">
            <List sx={{ width: '100%' }}>
                {sortedActivities.map((data) => (
                    <ListItem key={data.key}>
                        <ListItemButton sx={{ p: '0' }} onClick={() => handleListItemClick(data.props.id)}>
                            <EventCard name={data.props.name} participant={data.props.memberCount} isPinned={data.props.pinned} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    )

}

export default BadmintonList;