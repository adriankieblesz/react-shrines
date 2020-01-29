import React from 'react';
import './SensojiItem.scss'
import ScrollShowElement from './ScrollShowElement';

const ShrineGrid = (props) => {
    return (
        <React.Fragment>
            <ScrollShowElement classnamehide={"hideLeft"} classnameshow={"showElementLeft"}>
                <div className={props.classname}>
                    <figure>
                        <img src={props.source} alt={props.alt} />
                    </figure>
                    <p>
                        {props.description}
                    </p>
                </div>
            </ScrollShowElement>
            <ScrollShowElement classnamehide={"hideRight"} classnameshow={"showElementRight"}>
                <div className={props.classname}>
                    <p>
                        {props.secondDescription}
                    </p>
                    <figure>
                        <img src={props.secondSource} alt={props.alt} />
                    </figure>
                </div>
            </ScrollShowElement>

        </React.Fragment>
    );
}

export default ShrineGrid;