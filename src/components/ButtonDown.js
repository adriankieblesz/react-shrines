import React from 'react';
import './ButtonDown.scss';
import image from '../images/Icons/scrollDown.png';
const ButtonDown = (props) => {
    return (
        //Button stateless component for scrolling down
        <button className="scrollDownBtn">
            <a className="scrollDownAnchor" href={props.link}>
                <figure>
                    <img src={image} alt="" />
                </figure>
            </a>
        </button>

    );
}

export default ButtonDown;