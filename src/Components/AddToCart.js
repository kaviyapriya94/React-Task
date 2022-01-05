import React from "react";

export default function AddButton({handleCount}){
    return(
        <div className="col-auto">
            <button className="btn btn-primary" onClick={handleCount}>Add to Cart</button>
        </div>
    )
}