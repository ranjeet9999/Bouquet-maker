import React, { useState } from "react"
import { Picture } from "./Picture"
import { PictureList } from "./Custom"
import { useDrop } from "react-dnd"
import { Grid } from "@mui/material"

export const finalList=[];


export const Dropdrag=()=>{

    const [board,setBoard]=useState([]);

    const [{isOver},drop]= useDrop(()=>({
        accept:"image",
        drop: (item)=>addImageToBoard(item.id),
        collect:(monitor)=>({
            isOver:!!monitor.isOver(),
        }),
    }))

    const addImageToBoard=(key)=>{
        console.log(key)
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
        </>
    )
}