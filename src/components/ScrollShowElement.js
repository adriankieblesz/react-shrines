import React, { Component } from 'react';
import './ScrollShowElement.scss';
class ScrollShowElement extends Component {
    state = {
        position: null,
        classname: this.props.classnamehide,
        distance: 0,
    }
    static defaultProps = {
        ratio: 1
    }
    handleScroll = () => {
        this.scrollY = window.scrollY || window.pageYOffset;
        this.setState(() => ({
            position: this.refs.element.getBoundingClientRect().top + this.scrollY
        }))
        if (this.state.position - this.state.distance <= this.scrollY) {
            this.setState(() => ({
                classname: this.props.classnameshow
            }))
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => (this.handleScroll()));
        this.setState(() => ({
            distance: (this.refs.element.clientHeight * this.props.ratio)
        }))
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {

        return (
            <div id={this.props.id} className={this.state.classname} ref={"element"}>
                {this.props.children}
            </div>
        );
    }
}

export default ScrollShowElement;
