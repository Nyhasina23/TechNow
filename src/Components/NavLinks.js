import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import './style.css'
import './SmallStyle.css'
export default class NavLinks extends Component {
    render() {
        return (
            <div className="flexBox">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="technow">
                        <Link className="navbar-brand" to ="/home">TECH<span className="technow_1">NOW</span></Link>                                   
                        </div>
                        <ul  className="navbar-nav ml-auto">
                            <Link className="nav-item nav-link" to ="/home">Home</Link>
                            <Link className="nav-item nav-link" to ="/boutique">Boutique</Link>             
                            <Link className="nav-item nav-link" to ="/about">About</Link>
                            <Link className="nav-item nav-link" to ="/contact">Contact</Link>             
                            <Link className="nav-item nav-link" to ="/register">Register</Link>             
                        </ul>
                        <FaSearch className="search" />
                    </nav>
                </div>
                        
            </div>
            
        )
    }
}
