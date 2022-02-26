import React from "react";

export default function AddButton({handleCount}){
    return(
        <>
           <div className="col-auto">
                <button className="btn btn-primary" onClick={handleCount}>Add To Cart</button>
            </div>
        </>
    )
}