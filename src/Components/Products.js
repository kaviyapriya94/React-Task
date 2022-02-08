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
   
    const[currentPage,setCurrentPage]=useState(1);
    const[Loading,setLoading]=useState(false);
    let productsPerPage=10;
    
    var[selectM,setSelectM] = useState("u");
    var[selectJ,setSelectJ] = useState("u");
    var[selectE,setSelectE] = useState("u");
    var[selectW,setSelectW] = useState("u");
    
    var[notSelected,setNotSelected] = useState('')
    
    var[isselectM,setIsselectM] = useState(false);
    var[isselectE,setIsselectE] = useState(false);
    var[isselectJ,setIsselectJ] = useState(false);
    var[isselectW,setIsselectW] = useState(false);
    
    var[isselectA,setIsselectA] = useState(false);
    var[isselectZ,setIsselectZ] = useState(false);
    var[isselectN,setIsselectN] = useState(false);
    var[isselectO,setIsselectO] = useState(false);
    var[isselectH,setIsselectH] = useState(false);
    var[isselectL,setIsselectL] = useState(false);
    
    var[clicked,setClicked] = useState(false);
    var[below499,setBelow499]=useState(false);
    var[below1000,setBelow1000]=useState(false);

    var[startValue,setStartValue]=useState(0);
    var[endValue,setEndValue]=useState(1000);
    const[sortProduct2,setSortProduct2]=useState([]);
    const[ProductsList,setProductsList]=useState([]);
    useEffect(() =>{
        
        Axios.get("https://fakestoreapi.com/products").then(res=>{
            setSortProduct2(res.data);
            setLoading(true);
            
        });
    }, []); 
  
    useEffect(() => {
        setProductsList([...sortProduct2].filter(val => {
          for (var j = startValue; j <= endValue; j++) {
            if (j === parseInt(val.price)) {
              return val;
            }
          }
        }))
      }, [sortProduct2,setProductsList,startValue,endValue])

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

    function handleChecked(e){
        var name = e.target.value;
        var checked = e.target.checked;
        let sortedData = [...ProductsList];
        
        if(name === "NtoO"){
            if(checked === true){
                setClicked(false)
                setIsselectN(true);
                setIsselectO(false);
                setProductsList(ProductsList);
            }else return setProductsList(sortedData);
        }else if(name === "atoz"){
            if(checked === true){
                setClicked(false)
                setIsselectA(true);
                setIsselectZ(false);
                console.log("Ascending Order");
                let sortProduct = sortedData.sort((a, b) => (a.title < b.title) ? -1 : 1);
                setProductsList(sortProduct);
            }else return setProductsList(sortedData);
        }else if(name === "ZtoA"){
            if(checked === true){
                setIsselectZ(true);
                setIsselectA(false);
                setClicked(false);
                console.log("Descending Order");
                let sortProduct = sortedData.sort((a, b) => (a.title > b.title) ? -1 : 1);
                setProductsList(sortProduct);
            }else return setProductsList(sortedData);
        }else if (name === "OtoN"){
            if(checked === true){
                setIsselectO(true);
                setIsselectN(false);
                setClicked(false)
                console.log("Older to Newer")
                let sortProduct = sortedData.reverse();
                setProductsList(sortProduct);
            }else return setProductsList(sortedData);
        }else if(name === "LtoH"){
            if(checked === true){
                setIsselectL(true);
                setIsselectH(false);
                setClicked(false);
                console.log("Low to High");
                let sortProduct = sortedData.sort((a,b)=>(parseFloat(a.price) - parseFloat(b.price)))
                setProductsList(sortProduct);
            }else return setProductsList(sortedData);
        }else if(name === "HtoL"){
            if(checked === true){
                setIsselectH(true);
                setIsselectL(false);
                setClicked(false);
                console.log("High to Low");
                let sortProduct = sortedData.sort((a,b)=>(parseFloat(b.price) - parseFloat(a.price)))
                setProductsList(sortProduct);
            }else return setProductsList(sortedData);
        }
    }
    
    function HandleSelectM(e){
        if(e.target.checked === true){
            console.log(e.target.value);
            setIsselectM(true);
            setClicked(false)
            setSelectM(e.target.value);
        }else{
            setSelectM("u")
        }
    }
 
    function HandleSelectJ(e){
        if(e.target.checked === true){
            setIsselectJ(true)
            setClicked(false)
            setSelectJ(e.target.value);
        }else{
            setSelectJ("u")
        }
    }

    function HandleSelectE(e){
        if(e.target.checked === true){
            setIsselectE(true)
            setClicked(false)
            setSelectE(e.target.value);
        }else{
            setSelectE("u")
        }
    }

    function HandleSelectW(e){
        if(e.target.checked === true){
            setIsselectW(true) ;
            setClicked(false)
            setSelectW(e.target.value);
        }else{
            setSelectW("u")
        }
    }
    
    useEffect(()=>{
        setNotSelected(selectM + selectJ + selectE + selectW)
    },[selectM,selectJ,selectE,selectW,notSelected]);

    function HandleUncheck(){
        setClicked(true)
        setSelectM("u");
        setSelectJ("u");
        setSelectE("u");
        setSelectW("u");

        setIsselectM(false);
        setIsselectJ(false);
        setIsselectE(false);
        setIsselectW(false);
        setIsselectA(false);
        setIsselectZ(false);
        setIsselectN(false);
        setIsselectO(false);
        setIsselectH(false);
        setIsselectL(false);
        setProductsList(sortProduct2);
        setBelow499(false);
        setBelow1000(false);
    }
    function handleBelow1000(e){
        setStartValue(500);
        setEndValue(1000);
        setClicked(false);
        setBelow499(false);
        setBelow1000(true);
        }
    function handleBelow499(){
    setStartValue(0);
    setEndValue(499);
    setClicked(false);
    setBelow1000(false);
    setBelow499(true);
 }
 function handleCartPage(){
    navigate('/productDetails')
}
  
    return(
        <>
        {Loading?
        <div>
            <h1 className="text-primary pb-3 pt-3 text-center">Products</h1>
            {notSelected==="uuuu" || clicked===true ?
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
                if(val.category.toLowerCase().includes(selectM.toLowerCase())||
                    val.category.toLowerCase().includes(selectE.toLowerCase())||
                    val.category.toLowerCase().includes(selectJ.toLowerCase())||
                    val.category.toLowerCase().includes(selectW.toLowerCase())){
                    return val;
                }else return null;
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
        <Sidebar handleChecked={handleChecked} HandleSelectM={HandleSelectM}
            HandleSelectJ={HandleSelectJ} HandleSelectE={HandleSelectE}
            HandleSelectW={HandleSelectW} HandleUncheck={HandleUncheck} 
            isselectM={isselectM} isselectJ={isselectJ} isselectE={isselectE} 
            isselectW={isselectW} isselectA={isselectA} isselectZ={isselectZ} 
            isselectN={isselectN} isselectL={isselectL} isselectO={isselectO}
            isselectH={isselectH} below499={below499} below1000={below1000}
            handleBelow499={handleBelow499} handleBelow1000={handleBelow1000}/>
        </div>
        :<div className="p-5 text-center"><Spinner animation="border" variant="primary" /></div>}
        </>
    )
}