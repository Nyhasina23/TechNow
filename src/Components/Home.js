import React, { Component } from 'react'
import MediumHeading from './MediumHeading';
import SmallHeading from './SmallHeading';
import Card from './Card';
import ProductItemList from './ProductItemList';
import Button from './Button';
import Footer from './Footer';
import NavLinks from './NavLinks'
import Carousel from './Carousel';
import './SmallStyle.css'
import '../index'
export default class Home extends Component {
    render() {
        return (
            <div className="flexBox">
               <div className="container">
                <NavLinks />
                <Carousel />
               <MediumHeading text="CATEGORIES" />
               <Card />
               <div>
               <MediumHeading text="LISTE DES PRODUITS" />
               <SmallHeading text="Produits exclusifs" />
               </div>
               <ProductItemList />
               <Button text="Voir Tout"/>
               <Footer />
               </div>
            
            </div>
        )
    }
}
