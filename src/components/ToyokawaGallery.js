import React, { Component } from 'react';
import './ToyokawaGallery.scss';
class ToyokawaGallery extends Component {
    state = {
        images: []
    }
    loadImages = () => {
        let images = [];
        for (let i = 0; i < 10; i++) {
            images.push(<img src={require(`../images/Toyokawa_Inari_Temple/${i + 1}c.jpg`)} alt="toyokawa" />);
        }

        return images;
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
            </div>
        );
    }
}

export default ToyokawaGallery;