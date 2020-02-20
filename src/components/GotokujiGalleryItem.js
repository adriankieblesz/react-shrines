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
        const { classname, source, srcSet, sizes } = this.props;
        const { show } = this.state;
        return (
            <figure ref="figures" className={show ? `${classname} showFigure` : classname} >
                <img
                    src={source}
                    alt="gotokuji-item"
                    srcSet={srcSet}
                    sizes={sizes}
                />
            </figure>
        );
    }
}

export default GotokujiGalleryItem;


