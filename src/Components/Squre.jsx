import React from 'react';
import "./Squre.css"

const Squre = (props) => {
    return (
        <div >
            <button className='squre' onClick={props.onClick}>{props.value}</button>
            
        </div>
    );
};

export default Squre;