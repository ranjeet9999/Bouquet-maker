import { useDrag } from "react-dnd"

export const Picture=(props)=>{
    const [{isDragging},drag]=useDrag(()=>({
        type:"image",
        item:{id:props.id},
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging(),
        }),
    }))
    return(
        <div>
           <img ref={drag} 
            src={props.url}
            id={props.id}
            alt={props.name}
            style={{ width:"150px",height:"150px",border: isDragging ? "2px solid red" :"2px solid forestGreen"}}/>
        </div>
    )
}