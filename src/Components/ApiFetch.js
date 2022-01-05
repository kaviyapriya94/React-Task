import React,{useEffect,useState} from "react";
import axios from 'axios'
import Users from './Users.js';
import Pagination from './Pagination.js';
import { Tab,Tabs} from "react-bootstrap";
import 'react-tabs/style/react-tabs.css';
import'../index.css';

export default function ApiFetch(){
    
    const[userlist,setUserList] = useState([]);
    const[currentPage,setCurrentPage]=useState(1);
    const[TotalUsers,setTotalUsers]=useState(0);
    const[PId,setPId]=useState('');
    const[PFirstName,setPFirstName]=useState('');
    const[PLastName,setPLastName]=useState('');
    const[PEmail,setPEmail]=useState('');
    const[PAvatar,setPAvatar]=useState('');
    const[phonenumber,setPhonenumber]=useState('');
    const[address,setAddress]=useState('');
    const[show,setShow]=useState(false);
    const[updateshow,setUpdateshow]=useState('');
    const[show2,setShow2]=useState(false);
    let per_page=3;
    const[key,setKey]=useState("users"); 

    
    useEffect(() =>{
       axios.get(`https://reqres.in/api/users?page=1&per_page=${per_page}`).then(res=>{
           setUserList(res.data.data);
           setTotalUsers(res.data.total);
        });
    }, [per_page]); 
   
    const fetchUsers=async(currentPage)=>{
        const res=await fetch(`https://reqres.in/api/users?page=${currentPage}&per_page=${per_page}`);
        const data=await res.json();
        return data.data;
    }
    
    const paginate=async(pageNumber)=>{
        setCurrentPage(pageNumber);
        const usersFormServer=await fetchUsers(currentPage);
        setUserList(usersFormServer);
    }
    
    const rowClicked=(profileId,first_name,last_name,email,avatar)=>{
       setKey("profile");
        setPId(profileId);
        setPFirstName(first_name);
        setPLastName(last_name);
        setPEmail(email);
        setPAvatar(avatar);
        setShow(true);
    }
    const handleUpdate=(e)=>{
        e.preventDefault();
        setShow2(true);
    }
    const handleConfirm=(e)=>{
        e.preventDefault();
        setUpdateshow("Updated Successfully");
    }
    
   
   return(
        <div>
            <Tabs 
            defaultActiveKey="users"  
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
                <Tab eventKey="users" title="Users">
                    <Users currentUsers={userlist} rowClicked={rowClicked} />
                    <Pagination perPage={per_page} total={TotalUsers} paginate={paginate}/>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                {show?
                <>
                    <div className="container">
                       <div className="row justify-content-center">
                            <h1 className="text-primary pt-5 pb-3">Profile Details</h1>
                            <div className="col-sm-5">
                                <form >
                                    <div className="form-group  pt-4">
                                        <label className="col-sm-5">ID</label>
                                        <input className="col-sm-7" name="id"  type="text" value={PId} />
                                    </div>
                                    <div className="form-group  pt-4">
                                        <label className="col-sm-5">First Name</label>
                                        <input className="col-sm-7" name="firstname"  type="text" value={PFirstName}  />
                                    </div>
                                    <div className="form-group pt-4">
                                        <label className="col-sm-5">Last Name</label>
                                        <input className="col-sm-7"   name="lastname" type="text" value={PLastName} />
                                    </div>
                                    <div className="form-group pt-4">
                                        <label className="col-sm-5">Email</label>
                                        <input className="col-sm-7" name="email" type="text"  value={PEmail} />
                                    </div>
                                    <div className="form-group  pt-4">
                                        <label className="col-sm-5">phonenumber</label>
                                        <input className="col-sm-7" name="id"  type="text" onChange={(e)=>setPhonenumber(e.target.value)} />
                                    </div>
                                    <div className="form-group  pt-4">
                                        <label className="col-sm-5">Address</label>
                                        <input className="col-sm-7" name="firstname"  type="text" onChange={(e)=>setAddress(e.target.value)}  />
                                    </div>
                                    <div className="col-auto pt-5">
                                        <button onClick={handleUpdate} type="submit"className="btn btn-primary btn-md">Update</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-4 pt-3">
                                <div><img className="rounded-circle" src= {PAvatar} alt="pic" height="120vh" width="50%"   /></div>
                                    <h2 className="pt-2">{PFirstName} {PLastName}</h2>
                                <div/>
                            </div>
                        </div>
				    </div>
                    {show2?
                    <div className="container ">
                        <div className="row justify-content-center">
                            <h1 className="text-primary pt-5 pb-3">Confirm Your details</h1>
                            <div className="row justify-content-center">
                                <div className="form-group  pt-4">
                                    <label className="col-sm-3">First Name</label>
                                    <input className="col-sm-3" name="firstname"  type="text" value={PFirstName}  />
                                </div>
                                <div className="form-group pt-4">
                                    <label className="col-sm-3">Last Name</label>
                                    <input className="col-sm-3"   name="lastname" type="text" value={PLastName} />
                                </div>
                                <div className="form-group pt-4">
                                    <label className="col-sm-3">Email</label>
                                    <input className="col-sm-3" name="email" type="text"  value={PEmail} />
                                </div>
                                <div className="form-group  pt-4">
                                    <label className="col-sm-3">phonenumber</label>
                                    <input className="col-sm-3" name="id"  type="text" value={phonenumber} />
                                </div>
                                <div className="form-group  pt-4">
                                    <label className="col-sm-3">Address</label>
                                    <input className="col-sm-3" name="firstname"  type="text" value={address}/>
                                </div>
                                <div className=" pt-5">
                                    <button onClick={handleConfirm} type="submit"className="btn btn-primary btn-md">Confirm</button>
                                </div>
                            </div>
                            <h3 className="text-success">{updateshow}</h3>
                        </div>
                    </div>
                    :null}
                </>
                :<h5 className="text-center pt-5">No Users Selected</h5>}
                </Tab>
            </Tabs>
        </div>
    )
}

