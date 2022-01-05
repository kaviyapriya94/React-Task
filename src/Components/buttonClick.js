import React, {useState} from "react";
export default function Increment(){
    var[count,setCount]=useState(0);
    function Increment(){
        setCount(count+1);
    }
    function Decrement(){
       setCount(count-1);
    }
    function Reset(){
       setCount(0);
    }
    return(
        <div className="container">
            <h2 className=" pt-5 text-primary">Counter</h2>
            <h3 className="text-success">Current Count : <span className="text-danger">{count}</span></h3>
            <div className="row pt-5">
                <div className="col-auto"><button className="btn btn-primary btn-lg"  onClick={Increment}>Increment</button></div>
                <div className="col-auto"><button  disabled={count<=0}className="col-auto btn btn-primary btn-lg" onClick={Decrement}>Decrement</button></div>
                <div className="col-auto"><button className="col-auto btn btn-primary btn-lg" onClick={Reset}>Reset</button></div>
            </div>
        </div>
    );
} 
