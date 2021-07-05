import React from 'react';
import './SmallStyle.css'

const SmallHeading = ({text}) => {
    return (
        <p className="font-25 capitalize bold-500 ThirdColor ls-1 text-center mtb-10">
          {text}  
        </p>
    );
};

export default SmallHeading;