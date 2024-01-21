import "./style.css";
import { Box } from "@mui/material";


function BadmintonList() {

    return (
        <div className="card-wrapper">
            <div className="bg-card bg1"></div>
            <div className="bg-card bg2"></div>
            <div className="bg-card bg3"></div>
            <div className='card' sx={{ display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
                <Box sx={{ padding: { md: 3, xs: 1 }, width: { md: 500 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    List Page
                </Box>
            </div>
        </div>
    )

}

export default BadmintonList;