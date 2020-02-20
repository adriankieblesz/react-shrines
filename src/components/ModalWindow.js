import React, { Component } from 'react';
import './ModalWindow.scss';
class ModalWindow extends Component {
    state = {
        image: null
    }
    render() {
        const { slideclass, open, modalSource, closeclick, slideLeft, slideRight } = this.props;
        return (
            // <div className={props.open ? `modalWindow slideRightModal` : `modalWindow ${props.slideleftclass}`} >
            <div className={`modalWindow ${slideclass}`} >
                {/* {this.state.image} */}
                <img className={open ? "modalImg showModalImage" : "modalImg"} src={modalSource} alt="shrine" />
                <div onClick={closeclick} className="closeBtn" >
                    <span className="closeSpan"></span>
                    <span className="closeSpan"></span>
                </div>
                <div onClick={slideLeft} className="slideBtn slideLeftBtn">
                    <img src={require('../images/Icons/scrollDown.png')} alt="" />
                </div>
                <div onClick={slideRight} className="slideBtn slideRightBtn">
                    <img src={require('../images/Icons/scrollDown.png')} alt="" />
                </div>
            </div>
        );
    }
}

export default ModalWindow;