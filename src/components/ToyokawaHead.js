import React from 'react';
import ShrineTitle from './ShrineTitle';
const ToyokawaHead = (props) => {
    return (
        <header className={props.classname} style={{ backgroundPositionY: props.backgroundposition }}>
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