import React from 'react';
export default function ListMapping({List,handleClick,handleDelete}){
    return(
        <div className="container p-5 text-center">
            {List.map((p)=>
                <>
                    <div className='row justify-content-center'>
                        <div className="col-sm-3 pb-3">
                            <button onClick={()=>handleClick(p)} className="btn btn-md bg-primary text-white">{p}</button>
                        </div>
                        <div className='col-sm-3'>
                            <button onClick={()=>handleDelete(p)} className="btn btn-md bg-danger text-white">Delete</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}