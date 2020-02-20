import React from 'react';
import './ShrineTitle.scss';
const ShrineTitle = ({ classname, engclass, engTitle, japclass, japTitle }) => {
    return (
        <React.Fragment>
            <div className={classname}>
                <h1 className={engclass}>{engTitle}</h1>
                <h1 className={japclass}>{japTitle}</h1>
            </div>
        </React.Fragment>
    );
}

export default ShrineTitle;