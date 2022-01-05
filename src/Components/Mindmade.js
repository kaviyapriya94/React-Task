import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
export default function Header(){
    useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	  }, []);
    return(
        <div>
            <section className="bannerBG">
                <nav className="navbar">
                    <div className="container-fluid p-5 ">
                        <div className="navbar-header">
                            <img src={"mindmade.jpg"} alt="mindmade" width="150" height="50"/>
                        </div>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#About us">About Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" href="#services">Services</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#website">Website Design</a></li>
                                    <li><a className="dropdown-item" href="#ecommerce">E-commerce</a></li>
                                    <li><a className="dropdown-item" href="#branding">Branding & Logo Design</a></li>
                                    <li><a className="dropdown-item" href="#seo">Search Engine Optimization</a></li>
                                    <li><a className="dropdown-item" href="#dighitalMarketing">Digital Marketing</a></li>
                                    <li><a className="dropdown-item" href="#Mobileapp">Mobile App Development</a></li>
                                    <li><a className="dropdown-item" href="#Softwaredev">Software Development</a></li>
                                    <li><a className="dropdown-item" href="#IT">IT Offshore Outsourcing</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#navitem">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#navitem">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#navitem">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#navitem">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <div className="call-to-action">
                        <div className="pull-contact-list">
                            <div className="phone"><a href="#phone"><i class="fa fa-phone" aria-hidden="true"></i> 91-9566566699</a></div>
                            <div className="email"><a href="#email"><i class="fa fa-envelope"></i> info@mindmade.in</a></div>
                        </div>
                    </div>
                    <div className="containerBN">
                        <p>Design is a marathon towards</p>
                        <p>perfection without a finishline</p>
                        <button className="btn btn-lg">Get in Touch</button>
                    </div>
                </div>
                <div class="whatsapp-icon">
                    <a href="#whatsapp"><img src="whatsapp.jpg" alt="whatsapp" height="75" width="75"></img></a>
                </div>
            </section>
        </div>
    );
}