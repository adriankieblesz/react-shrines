import React from 'react';
import './ScrollStart.scss';
import image from '../images/Icons/scrollUp.png';
const ScrollStart = ({ classname }) => {
    return (
        <button className={` ${classname}`}>
            <a href={"#head"}>
                <img src={image} alt="scrollUp" />
            </a>
        </button>
    );
}

export default ScrollStart;