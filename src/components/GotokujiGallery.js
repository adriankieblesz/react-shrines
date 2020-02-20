import React, { Component } from 'react';
import GotokujiGalleryItem from './GotokujiGalleryItem';
import './GotokujiGallery.scss';

class GotokujiGallery extends Component {
    state = {
        pictureNumbers: [],
        galleryItems: []
    }
    //function for asynchronous loading components with pictures
    loadItems = () => {
        const { pictureNumbers } = this.state;

        return new Promise((resolve, reject) => {
            let galleryItems = pictureNumbers.map(number => (<GotokujiGalleryItem
                key={pictureNumbers.indexOf(number)}
                classname={`gotokuji-gallery-item-${pictureNumbers.indexOf(number) + 1}`}
                source={require(`../images/Gotokuji_Temple/${number}c_500.webp`)}
            />));

            resolve(galleryItems);
        })
    }
    componentDidMount() {
        //determine numbers of pictures to load for gallery
        let pictureNumbers = [2, 11, 13, 16, 5, 18, 24, 15, 22, 21, 1, 20, 19, 7, 17, 25, 12, 23];
        this.setState(() => ({
            pictureNumbers: [...pictureNumbers],
        }))
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        const { allowGallery } = this.props;
        if (allowGallery) {
            this.loadItems()
                .then(respond => this.setState(() => ({
                    galleryItems: [...respond]
                })))
        }
    }

    render() {
        const { galleryItems } = this.state;
        return (
            <div className="gotokuji-gallery">
                {galleryItems}
            </div>
        );
    }
}

export default GotokujiGallery;