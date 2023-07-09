import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { Data } from './Data';
import { Button, CardActions, CardMedia, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const PictureList=[]

export  const Custom=()=>{
    const navigate=useNavigate();
    const clickHandler=()=>{
        if(PictureList.length !==0){
            navigate("/dragDrop")
        }
        else{
            alert("Please select atleast one Flower")
        }
    }

    return(
    <div>
        <Box>
            <AppBar position="static" style={{ backgroundColor: "tomato" }}>
                <Toolbar>
                    <Typography variant="h4" 
                        component="div" sx={{ flexGrow: 1}} style={{ fontFamily:"cursive" }}>
                        Choose Your type of flower
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box> 
        <div className='container'>
            <div className='row'>
                { Data.map((item,index)=>{
                        return ( 
                            <div className='card'>
                                <Container image={item.image} name={item.name} id={item.id} select={item.selected} />
                            </div>
                        )  
                    })}
            </div>
        </div>
        <p style={{fontFamily:'cursive',paddingLeft:"50px", marginTop:"-20px",color:"saddlebrown"}}>
            Scroll towards right for more Flower</p>
        <div style={{paddingTop:"25px"}}>
            <Button variant="contained"  onClick={clickHandler}
                style={{ backgroundColor: "saddlebrown",
                position:"fixed",right:"10px",bottom:"20px",fontFamily:"cursive" }}>
                Next
            </Button>
        </div>
    </div> 
    )
}

const Container=(props)=>{
    
    const [value,setValue]=React.useState(props.select)

    const ClickHandler =(e,value)=>{
        const currentState=!value
        e.preventDefault();
        setValue(currentState)
        if(currentState){
            Data[e.target.id-1]["selected"]=!Data[e.target.id-1]["selected"]
            PictureList.push(Data[e.target.id-1])
        }
        else{
            Data[e.target.id-1]["selected"]=!Data[e.target.id-1]["selected"]
            PictureList.pop(Data[e.target.id-1])
        }
    }
    
    return (
    <div>    
        <div style={{paddingTop:"30px"}}>
            <Card  sx={{ maxWidth: 220, backgroundColor:"lightpink"}}>
                <CardMedia
                component="img"
                alt={props.name}
                height="250"
                src={props.image}
                />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography style={{ fontSize: 20, fontFamily:"cursive" }} color="text.secondary" gutterBottom>
                            {props.name}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6}>
                        <CardActions style={{paddingTop:"15px",paddingLeft:"10px"}}>
                            <Button id={props.id} style={{ fontFamily:"cursive" }} 
                                variant="contained" color={value ? 'error' : 'success'} size="medium"
                                onClick={e=>ClickHandler(e,value)}
                                >{value ? 'unselect' : 'select'}
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>       
        </div>
    </div>   
    )
}