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
            console.log(res);
            setActivities(res.data.results.sort((a, b) => new Date(b.props.created) - new Date(a.props.created)));
            console.log(res.data.results);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        try {
            getActivities();
            console.log("act=", activities);
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className="card-wrapper">
            <List dense sx={{ width: '100%' }}>
                {activities.map((data, index) => {
                    const labelId = data.key;
                    return (
                        <ListItem
                            key={data.key}
                        >
                            <EventCard name={data.props.name} data={data.key} />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    )

}

export default BadmintonList;