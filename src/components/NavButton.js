import React from 'react';
import './NavButton.scss'
const NavButton = (props) => {
    return (
        <div className="nav-btn">
            <div id="nav-btn-spans" className={`${props.iconClicked ? "openSpan" : ""}`} onClick={props.click}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default NavButton; 