import React from 'react';
import {BrowserRouter , Link} from 'react-router-dom'
const CategorieLink = ({to , texts }) => {
    return (
        <BrowserRouter>
            <Link to={to} ><h2>{texts}</h2> </Link>
        </BrowserRouter>
    );
};

export default CategorieLink;