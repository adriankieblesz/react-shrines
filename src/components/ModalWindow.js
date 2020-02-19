import React, { Component } from 'react';
import GalleryButton from './GalleryButton';
import './ModalWindow.scss';
class ModalWindow extends Component {
    state = {
        image: null
    }
    // handleLoadImage = () => {
    //     return new Promise((resolve, reject) => {
    //         // let image = new Image();
    //         let image = <img className={this.props.open ? "modalImg showModalImage" : "modalImg"} src={this.props.modalSource} alt="shrine" />;
    //         resolve(image);

    //     })
    // }
    // componentDidMount() {
    //     let img = null;
    //     this.handleLoadImage()
    //         .then(respond => img = respond);
    //     this.setState(() => ({
    //         image: img
    //     }))
    // }
    render() {
        // this.handleLoadImage()
        //     .then(respond => this.image = respond);
        return (

            // <div className={props.open ? `modalWindow slideRightModal` : `modalWindow ${props.slideleftclass}`} >
            <div className={`modalWindow ${this.props.slideclass}`} >
                {/* {this.state.image} */}
                <img className={this.props.open ? "modalImg showModalImage" : "modalImg"} src={this.props.modalSource} alt="shrine" />
                <div onClick={this.props.closeclick} className="closeBtn" >
                    <span className="closeSpan"></span>
                    <span className="closeSpan"></span>
                </div>
                <div onClick={this.props.slideLeft} className="slideBtn slideLeftBtn">
                    <img src={require('../images/Icons/scrollDown.png')} alt="" />
                </div>
                <div onClick={this.props.slideRight} className="slideBtn slideRightBtn">
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
}

export default ModalWindow;