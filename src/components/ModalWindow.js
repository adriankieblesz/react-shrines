import React from 'react';
import GalleryButton from './GalleryButton';
import './ModalWindow.scss';
const ModalWindow = (props) => {
    return (
        <div className={props.open ? "modalWindow slideRightModal" : "modalWindow"} >
            <img className={props.open ? "modalImg showModalImage" : "modalImg"} src={props.modalSource} alt="shrine" />
            <div onClick={props.closeclick} className="closeBtn" >
                <span className="closeSpan"></span>
                <span className="closeSpan"></span>
            </div>
            <div onClick={props.slideLeft} className="slideBtn slideLeftBtn">
                <img src={require('../images/Icons/scrollDown.png')} alt="" />
            </div>
            <div onClick={props.slideRight} className="slideBtn slideRightBtn">
                <img src={require('../images/Icons/scrollDown.png')} alt="" />
            </div>
            {/* <GalleryButton
                changeImageClick={props.slideLeft}
                classname={"slideBtn slideLeftBtn"}
                source={require('../images/Icons/scrollDown.png')}
                alt={"right icon"}
            />
            <GalleryButton
                changeImageClick={props.slideRight}
                classname={"slideBtn slideRightBtn"}
                source={require('../images/Icons/scrollDown.png')}
                alt={"right icon"}
            /> */}
        </div>

    );
}

export default ModalWindow;