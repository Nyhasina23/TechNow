import React from 'react';
import './SmallStyle.css'
import { BrowserRouter , Link } from 'react-router-dom'
import './ProductStyle.css'
import {FaArrowRight} from 'react-icons/fa'
const Products = ({text , image, to}) => {
    return (
        <BrowserRouter>
            <div className="product text-center">
            <div>
                        <img className="imgContainer" src={image} alt="PcGamer1" />
            
                <Link className="LinkItem" to={to}>{text} <FaArrowRight className="FaArrowRight" /></Link>
            </div> 
           
        </div>
        </BrowserRouter>
        
    );
};

export default Products;