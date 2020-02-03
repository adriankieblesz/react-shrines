import React, { Component } from 'react';
import './ShrinePresentation.scss';
import NavigationBar from './NavigationBar';
class ShrinePresentation extends Component {
    state = {
        displayBackgrounds: false
    }
    handleScroll = () => {
        window.scrollY > this.refs.presentation.getBoundingClientRect().top && this.setState(() => ({
            displayBackgrounds: true
        }))
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <section id="presentation" className="shrine-presentation" ref={"presentation"}>

                <a href="#sensoji" className={this.state.displayBackgrounds ? "presentation-background displayBackgorund" : "presentation-background"}>
                    <div className={this.state.displayBackgrounds ? "blur changeBlurOpacity" : "blur"}></div>
                </a>
                <a href="#hie" className={this.state.displayBackgrounds ? "presentation-background displayBackgorund" : "presentation-background"}>
                    <div className={this.state.displayBackgrounds ? "blur changeBlurOpacity" : "blur"}></div>
                </a>
                <a href="#gotokuji" className={this.state.displayBackgrounds ? "presentation-background displayBackgorund" : "presentation-background"}>
                    <div className={this.state.displayBackgrounds ? "blur changeBlurOpacity" : "blur"}></div>
                </a>
                <a href="#toyokawa" className={this.state.displayBackgrounds ? "presentation-background displayBackgorund" : "presentation-background"}>
                    <div className={this.state.displayBackgrounds ? "blur changeBlurOpacity" : "blur"}></div>
                </a>
                <a href="#meiji" className={this.state.displayBackgrounds ? "presentation-background displayBackgorund" : "presentation-background"}>
                    <div className={this.state.displayBackgrounds ? "blur changeBlurOpacity" : "blur"}></div>
                </a>
                <NavigationBar />
                {/* <div className="presentation-container">
                    
                </div> */}

            </section>
        );
    }
}

export default ShrinePresentation;