import React from 'react';
import Products from './Products';
import './StyleCard.css'
import './SmallStyle.css'
import PcGamer1 from '../assets/pcGamer1.png'
import PcGamer2 from '../assets/pcGamer2.png'
import PcPortable from '../assets/PcPortable.png'
import Peripherique from '../assets/Peripheriques.png'

const Card = ({to ,texts}) => {
    return (
        <div className="container">
            <div className="flexBox ">
            
                    <div className="card cardItems">
                        <Products to="pc-gamer-reddevil" text="PC GAMER RED DEVIL " image={PcGamer1}  />        
                    </div>
                    <div className="card cardItems">
                        <Products to="pc-gamer-white" text="PC GAMER WHITE " image={PcGamer2}  />
                    </div> 
                    <div className="card cardItems">
                        <Products to="pc-portable" text="PC PORTABLE" image={PcPortable}/>
                    </div>
                    <div className="card cardItems uppercase">
                        <Products to="peripheriques" text="Peripheriques" image={Peripherique}/>
                    </div>
                     
              
            </div>
            
        </div>
    );
};

export default Card;