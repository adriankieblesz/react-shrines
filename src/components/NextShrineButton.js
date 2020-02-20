import React from 'react';
import P from './P';
import './NextShrineButton.scss';

const NextShrineButton = ({ show, source, text }) => {
    return (
        <div className={show ? `next-shrine-button show-next-shrine-button` : "next-shrine-button"}>
            <a href={source}>
                <P>{text}</P>
                <img src={require('../images/Icons/scrollDown.png')} alt="next shrine btn" />
            </a>
        </div>
    );
}

export default NextShrineButton;

