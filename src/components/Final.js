import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { finalList } from "./Dropdrag"


export const Final=()=>{
    return(
        <div>
            <Box >
                <AppBar position="static" style={{ backgroundColor: "forestgreen" }}>
                    <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1}} style={{ fontFamily:"cursive" }}>
                        Your Bouquet is ready!!
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Bouquet />
        </div>
    ) 
}

const Bouquet=()=>{
    return(
        <div className="image" >
            <img style={{width:"800px"}} src="assets/main3.png" alt="Bouquet" className="flowers"/>
            {
                finalList.map((picture)=>{
                    if(picture["selected"]===true){
                        return(
                            <img style={{width:"500px",paddingLeft: "140px"}} src={picture.image} alt="flower" className="flowers"/>
                        )
                    }
                    return null
                })
            }
        </div>
    )
}



