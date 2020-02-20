import React from 'react';
import './NavButton.scss'
const NavButton = ({ iconClicked, click }) => {
    return (
        <div className="nav-btn">
            <div id="nav-btn-spans" className={`${iconClicked ? "openSpan" : ""}`} onClick={click}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default NavButton; 