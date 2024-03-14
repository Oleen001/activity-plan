import "./style.css";
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import bmt from "./EventBadminton.lottie"
import { Box, Typography } from "@mui/material";
import PinIcon from "./pin.svg"

function EventCard({ name = '', participant = 0, isPinned = true }) {
    return (
        <Box className="oleen-event-card" sx={{ width: "100%", position: "relative" }}>
            <DotLottiePlayer
                style={{ height: "90px", width: "90px", paddingTop: "8px", alignSelf:"center"}}
                src={bmt}
                autoplay
                loop
            />
            <Box sx={{ height:"100px",width: "100%", display: "flex", flexDirection: "column", p: { xs: 2, md: 3}, flexGrow: 1, justifyContent: "center" }}>
                <Typography noWrap="true" fontFamily="Inter" color="#4E6B95" fontWeight={500} variant="h5" component="h5">{name}</Typography>
                <Typography fontFamily="Inter" color="#C6D6E4" fontWeight={400} variant="p" component="div">{participant} ppl</Typography>
            </Box>
            {isPinned &&
                (<div className="oleen-ribbin">
                    <svg width={40} height={40} >
                        <image href={PinIcon} />
                    </svg>
                </div>)}

        </Box>
    )
}


export default EventCard;