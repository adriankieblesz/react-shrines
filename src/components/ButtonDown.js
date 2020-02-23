import React from 'react';
import './ButtonDown.scss';
import image from '../images/Icons/scrollDown.png';
const ButtonDown = ({ link, classname }) => {
    return (
        //Button stateless component for scrolling down
        <button className={`scrollDownBtn ${classname}`}>
            <a className="scrollDownAnchor" href={link}>
                <figure>
                    <img src={image} alt="" />
                </figure>
            </a>
        </button>
    );
}

export default ButtonDown;