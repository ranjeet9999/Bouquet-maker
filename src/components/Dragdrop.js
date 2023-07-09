import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Link, useNavigate } from "react-router-dom"
import { Dropdrag } from "./Dropdrag"
import { finalList } from "./Dropdrag"

export const Dragdrop=()=>{
    const navigate=useNavigate();
    const clickHandler=()=>{
        if(finalList.length !==0){
            navigate("/bouquetReady")
        }
        else{
            alert("Please drop atleast one flower ")
        }
    }
    return(
        <div>
            <Box >
                <AppBar position="static" style={{ backgroundColor: "MediumSeaGreen" }}>
                    <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1}} style={{ fontFamily:"cursive" }}>
                        Drag And Drop The Images
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <DndProvider backend={HTML5Backend}>
                <div>
                    <Dropdrag />
                </div>
            </DndProvider>
            <div>
                <Button variant="contained" onClick={clickHandler}
                    style={{ backgroundColor: "saddlebrown",
                    fontFamily:"cursive",position:"fixed",right:"10px",bottom:"60px", }}>
                    Next
                </Button>
                <Button variant="contained" component={ Link } to="/selectToppings"
                    style={{ backgroundColor: "saddlebrown",
                    fontFamily:"cursive",position:"fixed",left:"10px",bottom:"60px", }}>
                    Previous
                </Button>
            </div>
        </div>
        ) 
}

