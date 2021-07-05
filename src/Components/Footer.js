import React from 'react';
import {BrowserRouter , Link} from 'react-router-dom'
import './Footer.css'
import './style.css'
import './SmallStyle.css'
import SocialIcon from './SocialIcon';
const Footer = () => {
    return (
        <div className="container footer">
            <div className="footerItem uppercase">
                <h5>Les tendances du moment</h5>
            </div>
                <BrowserRouter >
                <div className="LinkBlock">
                    <div className="LinkItemFooter">
                            <Link><strong>PC fixe</strong></Link>
                            <Link>iMac et Mac Mini</Link>
                            <Link>Pc bureautique et Multimédia</Link>
                            <Link>Mini PC</Link>
                            <Link>Pc fixe ASUS</Link>
                            <Link>Pc fixe MSI</Link>
                            <Link>Pc gamer pas cher</Link>
                        </div>
                        <div className="LinkItemFooter">
                            <Link><strong>PC Portable</strong></Link>
                            <Link>PC portable tactile</Link>
                            <Link>ASUS ROG</Link>
                            <Link>ASUS Zenbook</Link>
                            <Link>ACER Predator</Link>
                            <Link>PC Portable ACER</Link>
                            <Link>PC Portable MSI</Link>
                        </div>
                        <div className="LinkItemFooter">
                            <Link><strong>Composants PC</strong></Link>
                            <Link>RTX 3060 Ti</Link>
                            <Link>RTX 3060</Link>
                            <Link>RTX 3070</Link>
                            <Link>RX 5600 XT</Link>
                            <Link>SSD 500 Go</Link>
                            <Link>Intel Core i7</Link>
                        </div>
                        <div className="LinkItemFooter">
                            <Link><strong>Péripheriques PC</strong></Link>
                            <Link>Clavier Gamer</Link>
                            <Link>Souris Gamer</Link>
                            <Link>Ecran 4K UHD</Link>
                            <Link>Webcam Logitech</Link>
                            <Link>Casque Gamer</Link>
                            <Link>Fauteuil Gamer</Link>
                        </div>
                </div>
                    <SocialIcon />
                </BrowserRouter>
        </div>
    );
};

export default Footer;