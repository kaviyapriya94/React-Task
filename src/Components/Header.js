import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Notification from './Notification';
export default function Home(){
    useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	  }, []);
    return(
        <div>
            <section className="pb-3">
                <nav className="navbar bg-primary text-white fixed-top">
                    <div className="container-fluid ">
                        <div className="navbar-header">
                            <img src={"mindmade.jpg"} alt="mindmade" width="150" height="50"/>
                        </div>
                        <ul className="nav">
                            <li className="nav-item">
                               <NavLink to='/' style={{paddingRight:'30px',textDecoration:'none',color:'white'}} >Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink style={{textDecoration:'none',color:'white'}}  data-bs-toggle="dropdown" to="/">Tasks</NavLink>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <NavLink style={{textDecoration:'none'}}to='/Mindmade' >Mindmade</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink to='/buttonClick'  style={{textDecoration:'none'}}>buttonClick</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink to='/ApiFetch'  style={{textDecoration:'none'}}>ApiFetch</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink to='/Products'  style={{textDecoration:'none'}}>Products</NavLink>
                                    </li>
                                    <li className="dropdown-item">
                                        <NavLink to='/List'  style={{textDecoration:'none'}}>List</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item"><Notification/></li>
                        </ul>

                    </div>
                </nav>
            </section>
        </div>
    );
}