import React,{useState} from 'react';
import ListMapping from './ListMapping';
export default function List(){
    const[List,setList]=useState(["BMW","VOLVO","FORD"]);
    const handleClick=(car)=>{
            setList([...List,`${car} added`])

    }
    function handleDelete(value){
        console.log(value)
        var array = [...List];
        var index = array.indexOf(value);
        if(index !== -1){
            array.splice(index,1)
            setList(array)
            alert(`${value} is deleted...`)
        }
    }
    return(
        <>
           <ListMapping List={List} handleClick={handleClick} handleDelete={handleDelete}/>
        </>
    )
}