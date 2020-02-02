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
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
        ],
        currentElement: null,
        show: false,
        slideclass: "slideLeftModal"
    }
    handleMouseDown = (e) => {
        e.preventDefault();
        this.setState({
            isDown: true,
            startX: e.pageX - this.refs.senGalCol.offsetLeft,
            scrollLeft: this.refs.senGalCol.scrollLeft,
        })
    }
    handleMouseLeave = () => {
        this.setState(() => ({
            isDown: false
        }))
    }
    handleMouseUp = () => {
        this.setState(() => ({
            isDown: false,
            snapValue: ""
        }))
    }
    handleMouseMove = (e) => {
        if (!this.state.isDown) return;
        e.preventDefault();
        const x = e.pageX - this.refs.senGalCol.offsetLeft
        const movePath = x - this.state.startX;
        this.refs.senGalCol.scrollLeft = this.state.scrollLeft - movePath;
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
            // current = 1
            current = this.state.photos.length;
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
    handleSlideRightImage = () => {
        let current = this.state.currentElement + 1;
        if (current > this.state.photos.length) {
            // current = this.state.photos.length;
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
        window.scrollY > this.refs.senGalCol.getBoundingClientRect().top + window.scrollY - (window.innerHeight * .4) && this.setState(() => ({
            show: true
        }))
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        const isHidden = this.state.show ? 'showGallery' : '';
        const elements = this.state.photos.map(element => <GalleryItem
            key={element}
            src={require(`../images/Senso_ji_Temple/${element}.jpg`)}
            click={() => this.handleModalOpen(require(`../images/Senso_ji_Temple/${element}.jpg`), element)}
        />)
        return (
            <div className={`sensoji-gallery ${isHidden}`}>
                <h3>Gallery</h3>
                <div ref="senGalCol" className={`sensoji-gallery-container ${this.state.isDown ? "" : "man"}`}
                    onMouseDown={this.handleMouseDown}
                    onMouseLeave={this.handleMouseLeave}
                    onMouseUp={this.handleMouseUp}
                    onMouseMove={this.handleMouseMove}
                    //onScroll={this.handleScroll}
                    style={{
                        //scrollSnapType: this.state.snapValue
                    }}>
                    {elements}
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

export default SensojiGallery;