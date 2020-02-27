import React, { Component } from 'react';
import GalleryButton from './GalleryButton';

import './MeijiGallery.scss';
class MeijiGallery extends Component {
    state = {
        current: 13,
        currentUrl: "",
        bottomImageClassName: "",
        topImageClassName: "",
        images: []
    }
    //Promise for asynchronous loading of images
    returnImages = () => {
        return new Promise((resolve, reject) => {
            let images = [];
            for (let i = 0; i < 16; i++) {
                images.push(<img key={i + 1} className={`meiji-bottom-image`} onClick={() => { this.handleImageClick(i + 1) }} alt="meiji-gallery" src={require(`../images/Meiji_Shrine/${i + 1}c_200.webp`)} />)
            }

            resolve(images);
        })
    }
    //Load previous picture
    handleSlideLeft = () => {
        const { images, current: curr } = this.state;
        this.transparent = "trans"
        let current = curr - 1;
        if (current < 1) {
            current = images.length
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
    //Load next picture
    handleSlideRight = () => {
        const { images, current: curr } = this.state;
        this.transparent = "trans"
        let current = curr + 1;
        if (current > images.length) {
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
    //Set currentUrl according to clicked image from gallery image list
    handleImageClick = (imgIndex) => {
        let current = imgIndex
        this.setState(() => ({
            current: current,
            currentUrl: require(`../images/Meiji_Shrine/${current}c_800.webp`)
        }))
    }
    handleScroll = () => {
        //When scrollY reaches visible point then execute animation for gallery image list items
        window.scrollY > this.refs.topPicture.getBoundingClientRect().top + window.scrollY - 200 && this.setState(() => ({
            bottomImageClassName: "trans"
        }))
        //load images asynchronously if allowed 
        if (this.props.allowGallery) {
            this.returnImages()
                .then(respond => this.setState(() => ({
                    images: [...respond]
                })));
        }
    }
    componentDidMount() {
        const { current } = this.state;
        //set initial url
        this.setState(() => ({
            currentUrl: require(`../images/Meiji_Shrine/${current}c_800.webp`),
        }))
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        const { topImageClassName, currentUrl, bottomImageClassName, images } = this.state;
        const image = <img className={`top-img ${topImageClassName}`} src={currentUrl} alt="" />

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
                    <div className={`meiji-bottom-grid ${bottomImageClassName}`}>
                        {images}
                    </div>
                </div>
            </div>
        );
    }
}

export default MeijiGallery;