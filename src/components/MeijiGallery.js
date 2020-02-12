import React, { Component } from 'react';
import GalleryButton from './GalleryButton';

import './MeijiGallery.scss';
class MeijiGallery extends Component {
    state = {
        current: 13,
        currentUrl: "",
        bottomImageClassName: "",
        topImageClassName: "",
    }

    returnImages = () => {
        this.images = [];
        for (let i = 0; i < 18; i++) {
            this.images.push(<img key={i + 1} className={`meiji-bottom-image ${this.state.bottomImageClassName}`} onClick={() => { this.handleImageClick(i + 1) }} alt="meiji-gallery" src={require(`../images/Meiji_Shrine/${i + 1}c_200.jpg`)} />)
        }


        return this.images;
    }

    handleSlideLeft = () => {
        this.transparent = "trans"
        let current = this.state.current - 1;
        if (current < 1) {
            current = 18
            this.setState(() => ({
                current: current,
                currentUrl: require(`../images/Meiji_Shrine/${current}c.jpg`),
                topImageClassName: "trans"
            }))
        }
        else {
            this.setState(() => ({
                current: current,
                currentUrl: require(`../images/Meiji_Shrine/${current}c.jpg`),
                topImageClassName: "trans"
            }))
        }
    }
    handleSlideRight = () => {
        this.transparent = "trans"
        let current = this.state.current + 1;
        if (current > 18) {
            current = 1;
            this.setState(() => ({
                current: current,
                currentUrl: require(`../images/Meiji_Shrine/${current}c.jpg`),
                topImageClassName: "trans"
            }))
        }
        else {
            this.setState(() => ({
                current: current,
                currentUrl: require(`../images/Meiji_Shrine/${current}c.jpg`),
                topImageClassName: "trans"
            }))
        }
    }
    handleImageClick = (imgIndex) => {
        let current = imgIndex
        this.setState(() => ({
            current: current,
            currentUrl: require(`../images/Meiji_Shrine/${current}c.jpg`)
        }))
    }
    handleScroll = () => {
        window.scrollY > this.refs.topPicture.getBoundingClientRect().top + window.scrollY - 200 && this.setState(() => ({
            bottomImageClassName: "trans"
        }))
    }
    componentDidMount() {
        this.setState(() => ({
            currentUrl: require(`../images/Meiji_Shrine/${this.state.current}c.jpg`),
        }))
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        const image = <img className={`top-img ${this.state.topImageClassName}`} src={this.state.currentUrl} alt="" />
        const images = this.returnImages();

        return (
            <div className="meiji-gallery">
                <div className="meiji-gallery-top">
                    <div ref="topPicture" className="meiji-top-picture">
                        {image}
                        <GalleryButton
                            changeImageClick={this.handleSlideLeft}
                            classname={"meiji-btnLeft"}
                            source={require('../images/Icons/scrollDown.png')}
                            alt={"left icon"}
                        />
                        <GalleryButton
                            changeImageClick={this.handleSlideRight}
                            classname={"meiji-btnRight"}
                            source={require('../images/Icons/scrollDown.png')}
                            alt={"right icon"}
                        />
                    </div>
                </div>
                <div className="meiji-gallery-bottom">
                    <div className="meiji-bottom-grid">
                        {images}
                    </div>
                </div>
            </div>
        );
    }
}

export default MeijiGallery;