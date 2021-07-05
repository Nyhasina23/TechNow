import React from 'react';
import './StyleCard.css'
import './SmallStyle.css'
import {BrowserRouter, Link } from 'react-router-dom'

import {FaArrowCircleRight} from 'react-icons/fa'
const Button = ({text}) => {
    return (
        <BrowserRouter>
            <button type="" className="containerItem uppercase mtb-10">
            <Link>{text}</Link>
            <FaArrowCircleRight className="FaArrow" />
            </button>
        </BrowserRouter>
        
    );
};

export default Button;