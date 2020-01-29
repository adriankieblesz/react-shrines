import React from 'react';
import './ShrineTitle.scss';
const ShrineTitle = (props) => {
    return (
        <React.Fragment>
            <div className={props.classname}>
                <h1 className={props.engclass}>{props.engTitle}</h1>
                <h1 className={props.japclass}>{props.japTitle}</h1>
            </div>

        </React.Fragment>
    );
}

export default ShrineTitle;