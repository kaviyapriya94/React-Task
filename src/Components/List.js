import React,{useState} from 'react';
import ListMapping from './ListMapping';
export default function List(){
    const[List,setList]=useState(["BMW","VOLVO","FORD"]);
    const handleClick=(car)=>{
            setList([...List,`${car} added`])

    }
    return(
        <>
           <ListMapping List={List} handleClick={handleClick} />
        </>
    )
}