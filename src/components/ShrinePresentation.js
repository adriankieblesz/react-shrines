import React, { Component } from 'react';
import './ShrinePresentation.scss';
import NavigationBar from './NavigationBar';
class ShrinePresentation extends Component {
    state = {
        displayBackgrounds: false
    }
    handleScroll = () => {
        //execute animations (show elements) after scrollY reaches specific point
        window.scrollY > this.refs.presentation.getBoundingClientRect().top && this.setState(() => ({
            displayBackgrounds: true
        }))
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        const { displayBackgrounds } = this.state;
        return (
            <section id="presentation" className="shrine-presentation" ref={"presentation"}>
                <a href="#sensoji" className={displayBackgrounds ? "presentation-background displayBackgorund" : "presentation-background"}>
                    <div className={displayBackgrounds ? "blur changeBlurOpacity" : "blur"}></div>
                </a>
                <a href="#hie" className={displayBackgrounds ? "presentation-background displayBackgorund" : "presentation-background"}>
                    <div className={displayBackgrounds ? "blur changeBlurOpacity" : "blur"}></div>
                </a>
                <a href="#gotokuji" className={displayBackgrounds ? "presentation-background displayBackgorund" : "presentation-background"}>
                    <div className={displayBackgrounds ? "blur changeBlurOpacity" : "blur"}></div>
                </a>
                <a href="#toyokawa" className={displayBackgrounds ? "presentation-background displayBackgorund" : "presentation-background"}>
                    <div className={displayBackgrounds ? "blur changeBlurOpacity" : "blur"}></div>
                </a>
                <a href="#meiji" className={displayBackgrounds ? "presentation-background displayBackgorund" : "presentation-background"}>
                    <div className={displayBackgrounds ? "blur changeBlurOpacity" : "blur"}></div>
                </a>
                <NavigationBar />
            </section>
        );
    }
}

export default ShrinePresentation;