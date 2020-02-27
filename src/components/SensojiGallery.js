import React, { Component } from 'react';
import './SensojiGallery.scss'
import ModalWindow from './ModalWindow';
import GalleryItem from './GalleryItem';
class SensojiGallery extends Component {
    state = {
        isDown: false,
        startX: null,
        scrollLeft: null,
        openModal: false,
        url: "",
        photos: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ],
        modalImages: [],
        currentElement: null,
        show: false,
        slideclass: "slideLeftModal",
    }
    //calculate for mouse button clicked and held
    handleMouseDown = (e) => {
        e.preventDefault();
        this.setState({
            isDown: true,
            startX: e.pageX - this.refs.senGalCol.offsetLeft,
            scrollLeft: this.refs.senGalCol.scrollLeft,
        })
    }
    //touched in mobile device
    handleTouchStart = (e) => {
        this.setState({
            isDown: true,
            startX: e.touches[0].pageX - this.refs.senGalCol.offsetLeft,
            scrollLeft: this.refs.senGalCol.scrollLeft
        })
    }
    //mouse leaves area of gallery images list
    handleMouseLeave = () => {
        this.setState(() => ({
            isDown: false
        }))
    }
    //mouse button is not pushed anymore
    handleMouseUp = () => {
        this.setState(() => ({
            isDown: false,
            snapValue: ""
        }))
    }
    //mouse moves after mouse button had been held
    handleMouseMove = (e) => {
        const { isDown, startX, scrollLeft } = this.state;
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - this.refs.senGalCol.offsetLeft
        const movePath = x - startX;
        this.refs.senGalCol.scrollLeft = scrollLeft - movePath;
    }
    //moved in mobile device
    handleTouchMove = (e) => {
        const { isDown, startX, scrollLeft } = this.state;
        if (!isDown) return;
        const x = e.touches[0].pageX - this.refs.senGalCol.offsetLeft
        const movePath = x - startX;
        this.refs.senGalCol.scrollLeft = scrollLeft - movePath;
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
    //close modal window (wait 300ms before erasing component)
    handleModalClose = () => {
        this.setState(() => ({ slideclass: "slideLeftModal" }))
        setTimeout(
            function () {
                this.setState(() => ({ openModal: false }))
            }.bind(this)
            , 300);
    }
    //load previous photo
    handleSlideLeftImage = () => {
        const { currentElement, photos } = this.state;
        let current = currentElement - 1;
        if (current < 1) {
            current = photos.length;
            this.setState(() => ({
                currentElement: current,
                url: require(`../images/Senso_ji_Temple/${current}.jpg`)
            }))
        }
        else {
            this.setState(() => ({
                currentElement: current,
                url: require(`../images/Senso_ji_Temple/${current}.jpg`)
            }))
        }
    }
    //load next photo
    handleSlideRightImage = () => {
        const { currentElement, photos } = this.state;
        let current = currentElement + 1;
        if (current > photos.length) {
            current = 1
            this.setState(() => ({
                currentElement: current,
                url: require(`../images/Senso_ji_Temple/${current}.jpg`)
            }))
        }
        else {
            this.setState(() => ({
                currentElement: current,
                url: require(`../images/Senso_ji_Temple/${current}.jpg`)
            }))
        }
    }
    handleScroll = () => {
        const { allowAsyncGallery } = this.props;
        //show gallery if scrollY gets to the specific point
        window.scrollY > this.refs.senGalCol.getBoundingClientRect().top + window.scrollY - (window.innerHeight * .4) && this.setState(() => ({
            show: true
        }))
        //load images asynchronously after first scroll
        if (allowAsyncGallery) {
            this.returnElements()
                .then(response => this.setState(() => ({
                    elements: [...response]
                })))
        }
    }
    //Promise for asnychronous loading of pictures
    returnElements = () => {
        const { photos } = this.state;
        return new Promise(resolve => {
            const elements = photos.map(element => <GalleryItem
                key={element}
                src={require(`../images/Senso_ji_Temple/${element}_300.webp`)}
                click={() => this.handleModalOpen(require(`../images/Senso_ji_Temple/${element}.jpg`), element)}
            />)

            resolve(elements);
        })
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        //fetch urls from json file
        fetch('data/img-data.json')
            .then(respond => respond.json())
            .then(result => this.setState(() => ({
                modalImages: [...result.sensoji]
            })))
    }
    render() {
        const { show, isDown, elements, openModal, url, slideclass } = this.state;
        const isHidden = show ? 'showGallery' : '';

        return (
            <div className={`sensoji-gallery ${isHidden}`}>
                <h3>Gallery</h3>
                <div ref="senGalCol" className={`sensoji-gallery-container ${isDown ? "" : "man"}`}
                    onMouseDown={this.handleMouseDown}
                    onTouchStart={this.handleTouchStart}
                    onMouseLeave={this.handleMouseLeave}
                    onTouchCancel={this.handleMouseLeave}
                    onMouseUp={this.handleMouseUp}
                    onTouchEnd={this.handlemouseUp}
                    onMouseMove={this.handleMouseMove}
                    onTouchMove={this.handleTouchMove}
                >
                    {elements}
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

export default SensojiGallery;