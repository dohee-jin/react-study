import React from 'react';
import './Card.css';

const Card = ({children, className = ''}) => {
    // console.log(`props:`, props);

    return (
        // class = "card 커스텀클래스"
        <div className = {`card ${className}`}>
            {children}
        </div>
    );
};

export default Card;