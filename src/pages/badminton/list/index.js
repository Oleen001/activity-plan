import "./style.css";
import EventCard from "./eventCard";


function BadmintonList() {

    return (
        <div className="card-wrapper">
            <div className="oleen-bg-card bg1"></div>
            <div className="oleen-bg-card bg2"></div>
            <div className="oleen-bg-card bg3"></div>
            <div className='oleen-card' >
                <div className="event-list" >
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                </div>
            </div>
        </div>
    )

}

export default BadmintonList;