import React,{useState} from 'react';
import { useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import ReactStars from "react-rating-stars-component";
import AddToCart from "./AddToCart";
import { useDispatch,useSelector} from "react-redux";
import actions from '../redux/AddToCart/actions';
import actions1 from "../redux/Cartpage/actions";
import { useNavigate } from 'react-router-dom';


export default function ProductDetails(){
    const count = useSelector(
        (state) => state.countReducer
      );
      const cart = useSelector(
        (state) => state.CartReducer
      );
    console.log(count);
    const {state}=useLocation();
    const dispatch = useDispatch();
    const cartid = JSON.parse(window.localStorage.getItem("cartId")) || [];
    var[id,setId] = useState(cartid);
    const navigate=useNavigate();
    const handleCount=(Id)=>{
        if(id.length === 0){
            setId(id = [Id])
            window.localStorage.setItem("cartId",JSON.stringify(id))
            dispatch({ type: actions1.UPDATE_CART,cart : id})
            const add=count.count+1;
            dispatch({ type: actions.UPDATE_COUNT, payload: add});
        }
        else {
            if(!cart.id.includes(Id)){
            var addId = JSON.parse(window.localStorage.getItem("cartId"))
            var finalId = [...addId,Id];
            window.localStorage.setItem("cartId",JSON.stringify(finalId));
             dispatch({ type: actions1.UPDATE_CART,cart : finalId})
             const add=count.count+1;
             dispatch({ type: actions.UPDATE_COUNT, payload: add});
            
         }
         else{
             alert("This Item already exist in Cart");
         }
         
     }
 }
 function handleBack(){
    navigate('/Products');
}
    return(
        <div>
            <div className="row justify-content-center">
            <div className="text-end pt-4">
                <button className="btn bg-primary text-white"onClick={handleBack}>Back</button>
            </div>
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
                    <AddToCart handleCount={()=>handleCount(state.productId)}/>
                </div>
                <div className="col-sm-4 pt-3">
                    <img src= {state.productImage} alt="pic" height="300vh" width="80%"/>
                </div>
                </div>
            </div>
        
    )
}