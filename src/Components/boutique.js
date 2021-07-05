import React from 'react';
import Footer from './Footer';
import NavLinks from './NavLinks';
import ProductItemList from './ProductItemList';

const boutique = () => {
    return (
        <div className="flexBox">
            <NavLinks />
            <ProductItemList />
            <Footer />
        </div>
    );
};

export default boutique;