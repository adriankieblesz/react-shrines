import React, { Component } from 'react';
import GotokujiGalleryItem from './GotokujiGalleryItem';
import './GotokujiGallery.scss';

class GotokujiGallery extends Component {
    state = {
        pictureNumbers: [],
        galleryItems: []
    }
    loadItems = () => {
        return new Promise((resolve, reject) => {
            let galleryItems = this.state.pictureNumbers.map(number => (<GotokujiGalleryItem
                key={this.state.pictureNumbers.indexOf(number)}
                classname={`gotokuji-gallery-item-${this.state.pictureNumbers.indexOf(number) + 1}`}
                source={require(`../images/Gotokuji_Temple/${number}c_500.webp`)}
            // srcSet={`
            //          ${require(`../images/Gotokuji_Temple/${number}c.jpg`)} 1600w,
            //          ${require(`../images/Gotokuji_Temple/${number}c_500.jpg`)} 500w
            //          `}
            />));

            resolve(galleryItems);
        })
    }
    componentDidMount() {
        let pictureNumbers = [2, 11, 13, 16, 5, 18, 24, 15, 22, 21, 1, 20, 19, 7, 17, 25, 12, 23];
        this.setState(() => ({
            pictureNumbers: [...pictureNumbers],
        }))
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if (this.props.allowGallery) {
            this.loadItems()
                .then(respond => this.setState(() => ({
                    galleryItems: [...respond]
                })))
        }
    }
    // componentDidUpdate() {
    //     if (this.state.galleryItems.length === 0) {
    //         this.loadItems()
    //             .then(respond => this.setState(() => ({
    //                 galleryItems: [...respond]
    //             })))
    //     }
    // }
    render() {
        // let galleryItems = this.state.pictureNumbers.map(number => (<GotokujiGalleryItem
        //     key={this.state.pictureNumbers.indexOf(number)}
        //     classname={`gotokuji-gallery-item-${this.state.pictureNumbers.indexOf(number) + 1}`}
        //     source={require(`../images/Gotokuji_Temple/${number}c_500.jpg`)}
        //     srcSet={`
        //              ${require(`../images/Gotokuji_Temple/${number}c.jpg`)} 1600w,
        //              ${require(`../images/Gotokuji_Temple/${number}c_500.jpg`)} 500w
        //              `}
        // />));
        return (
            <div className="gotokuji-gallery">
                {this.state.galleryItems}
            </div>
        );
    }
}

export default GotokujiGallery;