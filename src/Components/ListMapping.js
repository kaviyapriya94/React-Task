import React from 'react';
export default function ListMapping({List,handleClick}){
    return(
        <div className="container p-5 text-center">
            {List.map((p)=>
            
                <div className="pb-3 ">
                    <button onClick={()=>handleClick(p)} className="btn btn-md bg-primary text-white">{p}</button>
                </div>
           
            )}
        </div>
    )
}