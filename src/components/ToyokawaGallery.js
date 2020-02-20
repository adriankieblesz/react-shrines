import React, { Component } from 'react';
import './ToyokawaGallery.scss';
import ModalWindow from './ModalWindow';
class ToyokawaGallery extends Component {
    state = {
        images: [],
        openModal: false,
        url: "",
        currentElement: null,
        slideclass: "slideLeftModal",
        show: false,
    }
    //Promise for asynchronous picture loading
    loadImages = () => {
        return new Promise((resolve, reject) => {
            let images = [];
            for (let i = 0; i < 10; i++) {
                images.push(<img
                    key={i + 1}
                    src={require(`../images/Toyokawa_Inari_Temple/${i + 1}c_400.webp`)} alt="toyokawa"
                    onClick={() => this.handleModalOpen(require(`../images/Toyokawa_Inari_Temple/${i + 1}c.jpg`), (i + 1))
                    }
                />);
            }

            resolve(images);
        })
    }
    //open modal window
    handleModalOpen = (link, element) => {
        this.setState(() => ({
            openModal: true,
            url: link,
            currentElement: element,
            slideclass: "slideRightModal"
        }))
    }
    //close modal window (wait 300ms before erase of component)
    handleModalClose = () => {
        this.setState(() => ({ slideclass: "slideLeftModal" }))
        setTimeout(
            function () {
                this.setState(() => ({ openModal: false }))
            }.bind(this)
            , 300);
    }
    //load previous image
    handleSlideLeftImage = () => {
        const { currentElement, images } = this.state;
        let current = currentElement - 1;
        if (current < 1) {
            current = images.length;
            this.setState(() => ({
                currentElement: current,
                url: require(`../images/Toyokawa_Inari_Temple/${current}c.jpg`)
            }))
        }
        else {
            this.setState(() => ({
                currentElement: current,
                url: require(`../images/Toyokawa_Inari_Temple/${current}c.jpg`)
            }))
        }
    }
    //load next image
    handleSlideRightImage = () => {
        const { currentElement, images } = this.state;
        let current = currentElement + 1;
        if (current > images.length) {
            current = 1
            this.setState(() => ({
                currentElement: current,
                url: require(`../images/Toyokawa_Inari_Temple/${current}c.jpg`)
            }))
        }
        else {
            this.setState(() => ({
                currentElement: current,
                url: require(`../images/Toyokawa_Inari_Temple/${current}c.jpg`)
            }))
        }
    }
    handleScroll = () => {
        const { allowGallery } = this.props;
        //show gallery when scrollY reaches specific point
        window.scrollY > this.refs.toyokawaGallery.getBoundingClientRect().top + window.scrollY - (this.refs.toyokawaGallery.clientHeight * .5) && this.setState(() => ({
            show: true,
        }))
        //load gallery images list asynchronously
        if (allowGallery) {
            this.loadImages()
                .then(respond => this.setState(() => ({
                    images: [...respond]
                })))
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        const { images: imgs, show, openModal, url, slideclass } = this.state;
        let images = imgs.map(element => element);
        return (
            <div className={show ? "toyokawa-gallery show-toyokawa-gallery" : "toyokawa-gallery"} ref={"toyokawaGallery"}>
                <div className="toyokawa-gallery-wrapper">
                    {images}
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

export default ToyokawaGallery;