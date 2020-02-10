import React, { Component } from 'react';
import ButtonDown from "./ButtonDown";
import Title from './Title';
import './SecondHead.scss';
class SecondHead extends Component {
    state = {}
    render() {
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
}

export default SecondHead;