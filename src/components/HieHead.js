import React from 'react';
import './HieHead.scss';
import ShrineTitle from './ShrineTitle';
const HieHead = ({ classname, backgroundposition }) => {
    return (
        <header className={classname} style={{ backgroundPositionY: backgroundposition }}>
            <ShrineTitle
                classname={"hie-title"}
                engclass={"hie-title-eng"}
                japclass={"hie-title-jap"}
                engTitle={"Hie"}
                japTitle={"日枝神社"} />
        </header>
    );
}

export default HieHead;
