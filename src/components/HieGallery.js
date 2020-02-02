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
    loadImages = () => {
        let images = [];
        for (let i = 0; i < 13; i++) {
            images.push(<img src={require(`../images/Hie_Shrine/${i + 1}c.jpg`)} alt="hie-item" />)
        }

        return images;
    }
    handleModalOpen = (link, element) => {
        this.setState(() => ({
            openModal: true,
            url: link,
            currentElement: element,
            slideclass: "slideRightModal"
        }))
    }
    handleModalClose = () => {
        this.setState(() => ({ slideclass: "slideLeftModal" }))
        setTimeout(
            function () {
                this.setState(() => ({ openModal: false }))
            }.bind(this)
            , 300);
    }
    handleSlideLeftImage = () => {
        let current = this.state.currentElement - 1;
        if (current < 1) {
            current = this.state.images.length;
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
    handleSlideRightImage = () => {
        let current = this.state.currentElement + 1;
        if (current > this.state.images.length) {
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
        window.scrollY > this.refs.hie.getBoundingClientRect().top + window.scrollY - (this.refs.hie.clientHeight / 2) && this.setState(() => ({
            showGallery: true
        }))
        console.log(this.refs.hie.getBoundingClientRect().top);
    }
    componentDidMount() {
        let imgs = this.loadImages();
        this.setState(() => ({
            images: [...imgs]
        }))
        window.addEventListener('scroll', this.handleScroll);
    }
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }
    render() {
        console.log(window.scrollY);

        const { images, showGallery: show } = this.state;
        const galleryItems = images.map(image => (<div
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
                    {/* {images} */}
                    {galleryItems}
                </div>
                {this.state.openModal && <ModalWindow
                    modalSource={this.state.url}
                    closeclick={this.handleModalClose}
                    open={this.state.openModal}
                    slideLeft={this.handleSlideLeftImage}
                    slideRight={this.handleSlideRightImage}
                    slideclass={this.state.slideclass}
                />}
            </div>
        );
    }
}

export default HieGallery;