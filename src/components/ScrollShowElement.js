import React, { Component } from 'react';
import './ScrollShowElement.scss';
class ScrollShowElement extends Component {
    state = {
        position: null,
        classname: this.props.classnamehide,
        distance: 0,
    }
    static defaultProps = {
        //value of multiplier for distance
        ratio: 1
    }
    handleScroll = () => {
        const { classnameshow } = this.props;
        //get current value of scrollY
        this.scrollY = window.scrollY || window.pageYOffset;
        //update position of component
        this.setState(() => ({
            position: this.refs.element.getBoundingClientRect().top + this.scrollY
        }))
        //change class name (class responsible for animation) once component gets to the specific point
        if (this.state.position - this.state.distance <= this.scrollY) {
            this.setState(() => ({
                classname: classnameshow
            }))
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => (this.handleScroll()));
        //calculating initial distance when state should be changed (if ratio not determined then default point is when scrollY meets top of the component)
        this.setState(() => ({
            distance: (this.refs.element.clientHeight * this.props.ratio)
        }))
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        const { classname } = this.state;
        const { id, children } = this.props;
        return (
            <div id={id} className={classname} ref={"element"}>
                {children}
            </div>
        );
    }
}

export default ScrollShowElement;
