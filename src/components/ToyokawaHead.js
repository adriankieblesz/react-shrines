import React from 'react';
import ShrineTitle from './ShrineTitle';
const ToyokawaHead = ({ classname, backgroundposition }) => {
    return (
        <header className={classname} style={{ backgroundPositionY: backgroundposition }}>
            <ShrineTitle
                classname={"toyokawa-title"}
                engclass={"toyokawa-title-eng"}
                japclass={"toyokawa-title-jap"}
                engTitle={"Toyokawa Inari"}
                japTitle={"日枝神社"} />
        </header>
    );
}

export default ToyokawaHead;