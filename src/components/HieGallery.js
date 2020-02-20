import React, { Component } from 'react';
import './HieGallery.scss';
import ModalWindow from './ModalWindow';
class HieGallery extends Component {
    state = {
        images: [],
        openModal: false,
        url: "",
        currentElement: null,
        showGallery: false,
        slideclass: "slideLeftModal"
    }
    //function for asynchronous loading of images for gallery
    loadImages = () => {
        return new Promise(resolve => {
            let images = [];
            for (let i = 0; i < 13; i++) {
                images.push(<img
                    src={require(`../images/Hie_Shrine/${i + 1}c_400.webp`)}
                    alt="hie-item"
                />)
            }

            resolve(images);
        })
    }
    //Open modal window
    handleModalOpen = (link, element) => {
        this.setState(() => ({
            openModal: true,
            url: link,
            currentElement: element,
            slideclass: "slideRightModal"
        }))
    }
    //Close modal window (wait 300ms before erasing component)
    handleModalClose = () => {
        this.setState(() => ({ slideclass: "slideLeftModal" }))
        setTimeout(
            function () {
                this.setState(() => ({ openModal: false }))
            }.bind(this)
            , 300);
    }
    //Load previous image
    handleSlideLeftImage = () => {
        const { currentElement, images } = this.state;
        let current = currentElement - 1;
        if (current < 1) {
            current = images.length;
            this.setState(() => ({
                currentElement: current,
                url: require(`../images/Hie_Shrine/${current}c.jpg`)
            }))
        }
        else {
            this.setState(() => ({
                currentElement: current,
                url: require(`../images/Hie_Shrine/${current}c.jpg`)
            }))
        }
    }
    //Load next image
    handleSlideRightImage = () => {
        const { currentElement, images } = this.state;
        let current = currentElement + 1;
        if (current > images.length) {
            current = 1;
            this.setState(() => ({
                currentElement: current,
                url: require(`../images/Hie_Shrine/${current}c.jpg`)
            }))
        }
        else {
            this.setState(() => ({
                currentElement: current,
                url: require(`../images/Hie_Shrine/${current}c.jpg`)
            }))
        }
    }

    handleScroll = () => {
        const { asyncGalleryLoad } = this.props;
        //load asynchronously after first scroll
        if (asyncGalleryLoad) {
            this.loadImages()
                .then(respond => this.setState(() => ({
                    images: [...respond]
                })))
        }
        window.scrollY > this.refs.hie.getBoundingClientRect().top + window.scrollY - (this.refs.hie.clientHeight / 2) && this.setState(() => ({
            showGallery: true,
        }))
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        const { images, showGallery: show, openModal, url, slideclass } = this.state;

        const galleryItems = images.map(image => (<div
            key={images.indexOf(image)}
            className="hie-gallery-item"
            onClick={() => this.handleModalOpen(require(`../images/Hie_Shrine/${(images.indexOf(image) + 1)}c.jpg`), (images.indexOf(image) + 1))}>
            {image}
            <div className="hie-gallery-item-span">
                <img src={require('../images/Icons/expand2.png')} alt="expand" />
            </div>
        </div>))

        return (
            <div className={`${show ? "hie-gallery show-hie-gallery" : "hie-gallery"}`} ref={"hie"}>
                <div className="hie-gallery-container">
                    {galleryItems}
                </div>
                {openModal && <ModalWindow
                    modalSource={url}
                    closeclick={this.handleModalClose}
                    open={openModal}
                    slideLeft={this.handleSlideLeftImage}
                    slideRight={this.handleSlideRightImage}
                    slideclass={slideclass}
                />}
            </div>
        );
    }
}

export default HieGallery;