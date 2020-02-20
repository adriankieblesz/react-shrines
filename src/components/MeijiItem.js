import React from 'react';
import ScrollShowElement from './ScrollShowElement';
import './MeijiItem.scss';
const MeijiItem = ({ children }) => {
    return (
        <ScrollShowElement classnameshow="showElementTop" classnamehide="hideTop">
            <div className="meijiItem">
                {children}
            </div>
        </ScrollShowElement>
    );
}

export default MeijiItem;