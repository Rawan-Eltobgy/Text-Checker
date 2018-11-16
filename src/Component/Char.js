import React from 'react';
import './Char.css';

const char = (props) => {
    return (
        <div className="Char" onClick ={props.clicked}>
          { props.currentChar }
        </div>
    )
};

export default char;