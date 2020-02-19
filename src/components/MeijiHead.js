import React from 'react';
import './MeijiHead.scss';
import ShrineTitle from './ShrineTitle';
const MeijiHead = (props) => {
    return (
        <div className={`meiji-head ${props.classnameshow}`}>
            <div className="meiji-head-grid">
                <div className="meiji-grid-item">
                    <img src={require('../images/Meiji_Shrine/17c2_1000.webp')} alt="" />
                </div>
                <div className="meiji-grid-item">
                    <ShrineTitle
                        classname={"meiji-title"}
                        engclass={"meiji-eng-title"}
                        japclass={"meiji-jap-title"}
                        engTitle={"Meiji-jingu"}
                        japTitle={"明治神宮"} />
                </div>
            </div>
        </div>
    );
}

export default MeijiHead;
