import React, { Component } from 'react';
class GotokujiGalleryItem extends Component {
    state = {
        show: false
    }
    handleScroll = () => {
        window.scrollY > this.refs.figures.getBoundingClientRect().top + window.scrollY - (this.refs.figures.clientHeight * 1.2) && this.setState(() => ({
            show: true
        }))
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <figure ref="figures" className={this.state.show ? `${this.props.classname} showFigure` : this.props.classname} >
                <img
                    src={this.props.source}
                    alt="gotokuji-item"
                    srcSet={this.props.srcSet}
                    sizes={this.props.sizes}
                />
            </figure>
        );
    }
}

export default GotokujiGalleryItem;


