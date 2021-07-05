import React from 'react';
import {BrowserRouter , Link} from 'react-router-dom'
import './style.css'
import './SmallStyle.css'
import './sociaiIcons.css'
import SocialConnect from './SocialConnect';
import Button from './Button';
const SocialIcon = () => {
    return (
        <div>
            <BrowserRouter>
            
            <div className="socialIcons">
                <div className="greyColor">
                    <p className="socialText">Retrouvez-nous sur : </p>
                </div>
                    <Link to="facebook.com">
                        <img  className="iconItem" src={SocialConnect.facebook} alt="" />
                    </Link>
                    <Link to="instagram.com">
                        <img className="iconItem" src={SocialConnect.Instagram} alt="" />
                    </Link>
                    <Link to="gmail.com">
                        <img className="iconItem" src={SocialConnect.Gmail} alt="" />
                    </Link>
                    <Link to="twitter.com">
                        <img className="iconItem" src={SocialConnect.Twitter} alt="" />
                    </Link>
                    
            </div>
                <Button  text="CONTACTEZ-NOUS" />
            </BrowserRouter>
        </div>
    );
};

export default SocialIcon;