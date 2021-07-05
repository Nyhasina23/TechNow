import React,{Component} from 'react';
import {BrowserRouter , Link} from 'react-router-dom';
import './StyleCard.css'
import './SmallStyle.css'
import {FaCartPlus} from 'react-icons/fa'
class ProductItem extends Component{

    state ={
        AddtoCard : "Ajouter au Panier",
        btnClass : "actionBtn btn btn-success",
        color: "white",
        display: "block"

    }
    handleClick = () =>{
        this.setState({
            AddtoCard : " Produit ajouté avec succès",
            btnClass : "actionBtn btn btn-transparent",
            color: "#218838",
            display: "none"

        })
    }
    render(){
        return (
            <BrowserRouter>
                <div className="container">
              <div className="flexBoxItem">
                  <div className="cardItem">
                     <div className="imageProduct"> 
                         <img className="imgItem" src={this.props.image} alt="" />
                        <h5>{this.props.text1}</h5>
                         <p className="textItem">
                             {this.props.text2}
                         </p>
        <button className={this.state.btnClass}><Link style={{color: `${this.state.color}`}} onClick={this.handleClick}>{this.state.AddtoCard}</Link>
        <FaCartPlus style={{display:`${this.state.display}`}} className="FaArrow" /></button>
                     </div>
                  </div>
              </div>
             </div>
            </BrowserRouter>
            
        );
    };
    }
    

export default ProductItem;