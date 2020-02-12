import React, { Component } from 'react';
import GotokujiGalleryItem from './GotokujiGalleryItem';
import './GotokujiGallery.scss';

class GotokujiGallery extends Component {
    state = {
        pictureNumbers: []
    }
    componentDidMount() {
        let pictureNumbers = [2, 11, 13, 16, 5, 18, 24, 15, 22, 21, 1, 20, 19, 7, 17, 25, 12, 23];
        this.setState(() => ({
            pictureNumbers: [...pictureNumbers]
        }))
    }
    render() {
        let galleryItems = this.state.pictureNumbers.map(number => (<GotokujiGalleryItem
            key={this.state.pictureNumbers.indexOf(number)}
            classname={`gotokuji-gallery-item-${this.state.pictureNumbers.indexOf(number) + 1}`}
            source={require(`../images/Gotokuji_Temple/${number}c_500.jpg`)}
            srcSet={`
                     ${require(`../images/Gotokuji_Temple/${number}c.jpg`)} 1600w,
                     ${require(`../images/Gotokuji_Temple/${number}c_500.jpg`)} 500w
                     `}
        />));
        return (
            <div className="gotokuji-gallery">
                {galleryItems}
            </div>
        );
    }
}

export default GotokujiGallery;