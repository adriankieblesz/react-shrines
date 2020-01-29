import React from 'react';
import ScrollShowElement from './ScrollShowElement';
import './MeijiItem.scss';
const MeijiItem = (props) => {
    return (
        <ScrollShowElement classnameshow="showElementTop" classnamehide="hideTop">
            <div className="meijiItem">
                {props.children}
            </div>
        </ScrollShowElement>

    );
}

export default MeijiItem;