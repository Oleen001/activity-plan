import "./style.css";
import EventCard from "./eventCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { List, ListItem } from "@mui/material";


function BadmintonList() {
    const [activities, setActivities] = useState([]);

    const getActivities = async () => {
        try {
            const res = await axios.get("https://oleen-activity.cyclic.app/api/users/LatestNames");
            setActivities(res.data.results.sort((a, b) => new Date(b.props.created) - new Date(a.props.created)));
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        try {
            getActivities();
        } catch (err) {
        }
    }, []);

    return (
        <div className="card-wrapper">
            <List dense sx={{ width: '100%' }}>
                {activities.map((data) => {
                    return (
                        <ListItem
                            key={data.key}
                        >
                            <EventCard name={data.props.name} />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    )

}

export default BadmintonList;