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
    loadImages = () => {
        // let images = [];
        // for (let i = 0; i < 10; i++) {
        //     images.push(<img
        //         key={i + 1}
        //         src={require(`../images/Toyokawa_Inari_Temple/${i + 1}c_400.jpg`)} alt="toyokawa"
        //         onClick={() => this.handleModalOpen(require(`../images/Toyokawa_Inari_Temple/${i + 1}c.jpg`), (i + 1))
        //         }
        //     />);
        // }

        // return images;

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
    handleModalClose = () => {
        this.setState(() => ({ slideclass: "slideLeftModal" }))
        setTimeout(
            function () {
                this.setState(() => ({ openModal: false }))
            }.bind(this)
            , 300);
    }
    handleModalOpen = (link, element) => {
        this.setState(() => ({
            openModal: true,
            url: link,
            currentElement: element,
            slideclass: "slideRightModal"
        }))
    }
    handleSlideLeftImage = () => {
        let current = this.state.currentElement - 1;
        if (current < 1) {
            // current = 1
            current = this.state.images.length;
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
    handleSlideRightImage = () => {
        let current = this.state.currentElement + 1;
        if (current > this.state.images.length) {
            // current = this.state.photos.length;
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
        window.scrollY > this.refs.toyokawaGallery.getBoundingClientRect().top + window.scrollY - (this.refs.toyokawaGallery.clientHeight * .5) && this.setState(() => ({
            show: true
        }))
    }
    componentDidMount() {
        // let images = this.loadImages();
        // this.setState({ images });
        this.loadImages()
            .then(respond => this.setState(() => ({
                images: [...respond]
            })))
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        let images = this.state.images.map(element => element);
        return (
            <div className={this.state.show ? "toyokawa-gallery show-toyokawa-gallery" : "toyokawa-gallery"} ref={"toyokawaGallery"}>
                <div className="toyokawa-gallery-wrapper">
                    {images}
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

export default ToyokawaGallery;