import React, { Component } from 'react'
import './Head.scss'
import Title from './Title.js';
import ButtonDown from './ButtonDown';
class Head extends Component {
    state = {}

    render() {
        return (
            <header id="head">
                <ButtonDown link={"#introduction"} />
                <div className="background-div"></div>
                <Title />

            </header>
        );
    }
}

export default Head;