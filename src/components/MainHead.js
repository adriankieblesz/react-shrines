import React from 'react';
import ButtonDown from "./ButtonDown";
import Title from './Title';
import './MainHead.scss';
const MainHead = () => {
    return (
        <header id="head">
            <ul className="cb-slideshow">
                <li>
                    <span></span>
                </li>
                <li>
                    <span></span>
                </li>
                <li>
                    <span></span>
                </li>
                <li>
                    <span></span>
                </li>
                <li>
                    <span></span>
                </li>
            </ul>
            <ButtonDown link={"#introduction"} />
            <div className="background-div"></div>
            <Title />
        </header>
    );
}

export default MainHead;
