import React,{useState,useEffect} from "react";
import {useSelector,useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import actions from "../redux/AddToCart/actions";
import actions1 from "../redux/Cartpage/actions";
import { useNavigate } from 'react-router-dom';

export default function CartPage(){
    
    var[sameProductCount,setSameProductCount] =useState([]);
    const[sortProduct2,setSortProduct2]=useState([]);
    
    const cart = useSelector(
        (state) => state.CartReducer
      );
    const count = useSelector(
        (state) => state.countReducer
      );
    const dispatch = useDispatch();
    const navigate=useNavigate();
    
    useEffect(() =>{
        Axios.get("https://fakestoreapi.com/products").then(res=>{
            setSortProduct2(res.data);
            });
    }, []); 
    
    useEffect(()=>{  
        //count the same values count
        const countValue = {};
        [...cart.id].forEach((x)=>{
            countValue[x] = (countValue[x] || 0) + 1;
        })
         setSameProductCount(countValue)
      },[cart.id]);

    function handleRemove(deleteId){
            const add = count.count - 1;
            dispatch({ type: actions.UPDATE_COUNT, payload: add});
            
            //Remove the clicked id from array
            let array = [...cart.id]
            let index = cart.id.findIndex(id => id === deleteId)
            if(index !== -1){
            array.splice(index,1)
            }
            window.localStorage.setItem("cartId",JSON.stringify(array));
            dispatch({ type: actions1.UPDATE_CART,cart : array})
    }
    function placeOrder(){
        alert("Order Placed Successfully!!!");
    }
    
    function handleIncrease(IncId){
        var addId = JSON.parse(window.localStorage.getItem("cartId"))
        var finalId = [...addId,IncId];
        
        window.localStorage.setItem("cartId",JSON.stringify(finalId));
        dispatch({ type: actions1.UPDATE_CART,cart : finalId})
    }
      
    function handleDecrease(DecId){
        if(!cart.id.includes(DecId))
        {
            const add = count.count - 1;
            dispatch({ type: actions.UPDATE_COUNT, payload: add});
        }
        else{
             //Remove the clicked id from array
            let array = [...cart.id]
            let index = cart.id.findIndex(id => id === DecId)
            if(index !== -1){
            array.splice(index,1)
            }
            window.localStorage.setItem("cartId",JSON.stringify(array));
            dispatch({ type: actions1.UPDATE_CART,cart : array})
            dispatch({ type: actions.UPDATE_COUNT, payload: count.count});
        }
    }
    
    function handleBack(){
        navigate('/Products');
    }
    
    return(
        <>
            <div className="text-end pt-4">
                <button className="btn bg-primary text-white"onClick={handleBack}>Back</button>
            </div>
            <h1 className="pb-3 text-primary text-center">My Cart ({count.count})</h1>
            {sortProduct2.filter(val=>{
                for(let i=0; i<=20; i++){
                    if(val.id === cart.id[i]){
                        return val;
                    }
                } 
                }).map((p)=>
                    <div className="container pb-3">
                        <div className='cartpage row ' key={p.id}>
                            <div className="col-sm-6">
                                <h5 className="pt-2">{p.title}</h5>
                                <p>{p.category}</p>
                                <h5><FontAwesomeIcon icon={faRupeeSign}/>{p.price}</h5>
                                <h5 className="pstar"> <ReactStars
                                count={5}
                                value={p.rating.rate}
                                size={26}
                                activeColor="#ffd700"
                                isHalf={true}
                                edit={false}
                                />({p.rating.rate})</h5>
                                <div className='Cartcount'>
                                    <div className='Singlecount'>
                                        <button className='count' disabled={sameProductCount[`${p.id}`]<=1}onClick={()=>handleDecrease(p.id)}> - </button>
                                        <span className="p-2"><b>
                                            {sameProductCount[`${p.id}`]}
                                        </b></span>
                                        <button className='count' onClick={()=>handleIncrease(p.id)}> + </button>  
                                    </div>
                                </div>
                            </div> 
                            <div className="col-sm-3">
                                <img src={p.image} alt="Card" width="100%" height="230vh" />
                            </div>
                            <div className="col-sm-3 p-5 text-center">
                                <div className="pt-2">
                                    <button className="btn btn-danger" onClick={()=>handleRemove(p.id)}>Remove</button>
                                </div>
                                <div className="pt-2">
                                    <button className="btn btn-success" onClick={placeOrder}>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
        </>
    )
}