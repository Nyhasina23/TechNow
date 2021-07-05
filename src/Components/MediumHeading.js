import React from 'react';
import './SmallStyle.css'
const MediumHeading = ({text}) => {
    return (
        <p className="uppercase font-25 bold-700 primaryColor ls-1 text-center mtp-50">
          {text}  
        </p>
    );
};

export default MediumHeading;