import "./style.css";
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import bmt from "./EventBadminton.lottie"
import { Box, Typography } from "@mui/material";
import PinIcon from "./pin.svg"

function EventCard({ name = '', participant = 0, isRunning = true }) {
    return (
        <Box className="oleen-event-card" sx={{ width: { md: 500 }, position: "relative" }}>
            <DotLottiePlayer
                style={{ height: "120px", width: "auto", paddingTop: "8px" }}
                src={bmt}
                autoplay
                loop
            />
            <Box sx={{ display: "flex", flexDirection: "column", p: { xs: 2, md: 3 }, flexGrow: 1, justifyContent: "center" }}>
                <Typography fontFamily="Inter" color="#4E6B95" fontWeight={500} variant="h5" component="div">{name}</Typography>
                <Typography fontFamily="Inter" color="#C6D6E4" fontWeight={400} variant="p" component="div">{participant} ppl</Typography>
            </Box>
            {isRunning &&
                (<div className="oleen-ribbin">
                    <svg width={40} height={40} >
                        <image href={PinIcon} />
                    </svg>
                </div>)}

        </Box>
    )
}


export default EventCard;