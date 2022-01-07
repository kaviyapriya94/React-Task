import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import Sidebar from './sidebar.js';
import Pagination from './Pagination';
import AddToCart from './AddToCart';
import { useDispatch,useSelector } from "react-redux";
import actions from "../redux/AddToCart/actions";
import {Spinner} from "react-bootstrap";

export default function Products(){
    const count = useSelector(
        (state) => state.countReducer
      );
  const dispatch = useDispatch();

    const navigate=useNavigate();
    const[ProductsList,setProductsList]=useState([]);
    const[currentPage,setCurrentPage]=useState(1);
    const[Loading,setLoading]=useState(false);
    // const[add,setAdd]=useState(1);
    let productsPerPage=10;
    const[value,setValue]=useState('all');
    useEffect(() =>{
        
        Axios.get("https://fakestoreapi.com/products").then(res=>{
            setProductsList(res.data);
            setLoading(true);
            
         });
     }, []); 

     //Get current products
     const indexOfLastProduct=currentPage*productsPerPage;
     const indexOfFirstProduct=indexOfLastProduct-productsPerPage;
     const currentProducts=ProductsList.slice(indexOfFirstProduct,indexOfLastProduct);

     
     function handleDetails(p){
   
        navigate('/productDetails',{state : {
            productTitle : p.title,
            productPrice : p.price,
            productDescription : p.description,
            productCategory : p.category,
            productImage : p.image,
            productRate : p.rating.rate,
            productCount : p.rating.count
        }  
    })
    
   }
   const paginate=(pageNumber)=>{
       setCurrentPage(pageNumber);

   }
   const handleCount=(e)=>{
    e.preventDefault();
    const add=count.count+1;
    dispatch({ type: actions.UPDATE_COUNT, payload: add});

}

   function setSelect(e){
       setValue(e.target.value);
    
   }

   function handleChecked(e){
    var name = e.target.value;
    var checked = e.target.checked;
    let sortedData = [...ProductsList];

        if(name === "NtoO"){
                if(checked === true){

                    setProductsList(sortedData);

                }else return null;
            }else 
            if(name === "atoz"){
                if(checked === true){

                    console.log("Ascending Order");
                    let sortProduct = sortedData.sort((a, b) => (a.title < b.title) ? 0 : 1);
                    setProductsList(sortProduct);

                }else return null;
            }else if(name === "ZtoA"){
                if(checked === true){

                    console.log("Descending Order");
                    let sortProduct = sortedData.sort((a, b) => (a.title > b.title) ? -1 : 1);
                    setProductsList(sortProduct);

                }else return null;
            }else if (name === "OtoN"){
                if(checked === true){

                    console.log("Older to Newer")
                    let sortProduct = sortedData.reverse();
                    setProductsList(sortProduct);

                }else return null;
            }else if(name === "LtoH"){
                if(checked === true){

                    console.log("Low to High");
                    let sortProduct = sortedData.sort((a,b)=>(parseFloat(a.price) - parseFloat(b.price)))
                    setProductsList(sortProduct);
                   
                }else return null;
            }else if(name === "HtoL"){
                if(checked === true){

                    console.log("High to Low");
                    let sortProduct = sortedData.sort((a,b)=>(parseFloat(b.price) - parseFloat(a.price)))
                    setProductsList(sortProduct);
                    
                }else return null;
        }

   }
  
    return(
        <>
        {Loading?
        <div>
            <h1 className="text-primary pb-3 pt-3 text-center">Products</h1>
            {value==="all"?
            <>
            <h5 className="text-center text-primary pb-2">Showing {indexOfFirstProduct+1}-{indexOfLastProduct} products of {ProductsList.length} products</h5>

            <div className="product">
            
            {currentProducts.map((p)=>
                        <div className='pborder'key={p.id}>
                            <img className="pt-4 pl-3"src={p.image} alt="Card" width="50%" height="200vh" />
                            <div className="pb-3">
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
                                <div className='row'>
                                    <div className='col-auto'>
                                        <button className="btn btn-primary" onClick={()=>handleDetails(p)}>View Details</button>
                                    </div>
                                    <div className='col-auto'>
                                        <AddToCart handleCount={handleCount}/>
                                    </div>
                                </div>
                            </div>
            
                        </div>
                    )}
                
            </div>
            <div>
                <Pagination perPage={productsPerPage} total={ProductsList.length} paginate={paginate}/>
            </div>
            </>
        :<>
        <div className="product">
            
            {ProductsList.filter(val=>{
                val= val.category.toLowerCase().includes(value.toLowerCase());
                return val;
            }).map((p)=>
                        <div className='pborder' key={p.id}>
                            <img className="pt-4 pl-3"src={p.image} alt="Card" width="50%" height="200vh" />
                            <div className="pb-3">
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
                                
                                    <button className="btn btn-primary" onClick={()=>handleDetails(p)}>View Details</button>
                                
                    
                            </div>
            
                        </div>
                    )}
                
            </div>
        </>}
        <Sidebar setSelect={setSelect} handleChecked={handleChecked}/>
        </div>
        :<div className="p-5 text-center"><Spinner animation="border" variant="primary" /></div>
        }
        </>
    )
}