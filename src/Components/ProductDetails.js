import React from 'react';
import { useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import ReactStars from "react-rating-stars-component";
import AddToCart from "./AddToCart";
import { useDispatch,useSelector} from "react-redux";
import actions from '../redux/AddToCart/actions';

export default function ProductDetails(){
    const count = useSelector(
        (state) => state.countReducer
      );
    console.log(count);
    const {state}=useLocation();
    const dispatch = useDispatch();
    const handleCount=(e)=>{
        e.preventDefault();
        const add=count.count+1;
        dispatch({ type: actions.UPDATE_COUNT, payload: add});
    }
    return(
        <div>
            <div className="row justify-content-center">
                <h1 className="text-primary pb-5 text-center pt-2">Product Details</h1>
                <div className="col-sm-6">
                    <h3>{state.productTitle}</h3>
                    <h4><FontAwesomeIcon icon={faRupeeSign}/> {state.productPrice}</h4>
                    <p>{state.productDescription}</p>
                    <h5>{state.productCategory}</h5>
                    <h5 className="pstar"> <ReactStars
                        
                        count={5}
                        value={state.productRate}
                        size={26}
                        activeColor="#ffd700"
                        isHalf={true}
                        edit={false}
                        
                        />({state.productRate})</h5>
                    <h5 className="pb-3">Count: {state.productCount}</h5>
                    <AddToCart handleCount={handleCount}/>
                </div>
                <div className="col-sm-4 pt-3">
                    <img src= {state.productImage} alt="pic" height="300vh" width="80%"/>
                </div>
                </div>
            </div>
        
    )
}