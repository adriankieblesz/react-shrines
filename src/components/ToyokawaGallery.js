import React, { Component } from 'react';
import './ToyokawaGallery.scss';
import ModalWindow from './ModalWindow';
class ToyokawaGallery extends Component {
    state = {
        images: [],
        openModal: false,
        url: "",
        currentElement: null
    }
    loadImages = () => {
        let images = [];
        for (let i = 0; i < 10; i++) {
            images.push(<img
                src={require(`../images/Toyokawa_Inari_Temple/${i + 1}c.jpg`)} alt="toyokawa"
                onClick={this.handleModalClick(require(`../images/Toyokawa_Inari_Temple/${i + 1}c.jpg`), (i + 1))}
            />);
        }

        return images;
    }
    handleModalClose = () => {
        this.setState(() => ({
            openModal: false
        }))
    }
    handleModalClick = (link, element) => {
        this.setState(() => ({
            openModal: true,
            url: link,
            currentElement: element
        }))
    }
    componentDidMount() {
        let images = this.loadImages();
        this.setState({ images });
    }
    render() {
        let images = this.state.images.map(element => element);
        return (
            <div className="toyokawa-gallery">
                <div className="toyokawa-gallery-wrapper">
                    {images}
                </div>
                {this.state.openModal && <ModalWindow
                    modalSource={this.state.url}
                    closeclick={this.handleModalClose}
                    open={this.state.openModal}
                    slideLeft={this.handleSlideLeftImage}
                    slideRight={this.handleSlideRightImage}
                />}
            </div>
        );
    }
}

export default ToyokawaGallery;