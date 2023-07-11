import React, { useState } from "react"
import { Picture } from "./Picture"
import { PictureList } from "./Custom"
import { useDrop } from "react-dnd"
import { Grid } from "@mui/material"

export const finalList=[];


export const Dropdrag=()=>{

    const [board,setBoard]=useState([]);

    const [,drop]= useDrop(()=>({
        accept:"image",
        drop: (item)=>addImageToBoard(item.id),
        collect:(monitor)=>({
           isOver:!!monitor.isOver(),
        }),
    }))

    const addImageToBoard=(key)=>{
        console.log('addingimage')
        const DroppedList=[]
        PictureList.map((picture)=>{
            if(key===picture["id"]){
               DroppedList.push(picture)
               finalList.push(picture)
            }
            return null
        }) 
        
        console.log(PictureList)
        setBoard((board)=>[...board,DroppedList[0]])

    } 

    return(
        <>
        <Grid container  direction="row" justifyContent="space-around" alignItems="center" style={{paddingTop:"20px"}}>
            {
                PictureList.map((picture)=>{
                    return(
                        <Grid>
                            <Picture url={picture.image} id={picture.id} name={picture.name}/>
                        </Grid>
                    )
                })
            }
        </Grid>
        <div>
            <div className="Board" ref={drop} 
                style={{padding:"5px 60px",fontFamily:"cursive",color:"saddlebrown",textAlign:"center"}}>
                <span style={{position:"relative"}}>Drop Here</span>
                <div className="row">
                    {board.map((picture)=>{
                        return(
                            <div className="card">
                                <Picture url={picture.image} id={picture.id} name={picture.name}/>
                            </div>
                        ) 
                    })}
                </div>
               
            </div>
        </div>
        <Bouquet1/>
        </>
    )
}

const Bouquet1=()=>{
    console.log('Final clic');
    return(
        
        <div className="image" >
            <img style={{width:"1000px"}} src="assets/main3.png" alt="Bouquet" className="flowers"/>
            {
                finalList.map((picture)=>{
                    if(picture["selected"]===true){
                        return(
                            <img style={{width:"700px",paddingLeft: "140px"}} src={picture.image} alt="flower" className="flowers"/>
                        )
                    }
                    return null
                })
            }
        </div>
    )
}

