import React, { Component } from 'react';
import P from './P';
import './NextShrineButton.scss';

class NextShrineButton extends Component {
    state = {
        show: false
    }
    handleScroll = () => {
        window.scrollY > this.props.boundingValue ? this.setState(() => ({
            show: true
        })) : this.setState(() => ({
            show: false
        }))
        console.log(this.props.height);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <div className={this.state.show ? `next-shrine-button show-next-shrine-button` : "next-shrine-button"}>
                <P>{this.props.text}</P>
                <button>
                    <a href={this.props.source}>
                        <img src={require('../images/Icons/scrollDown.png')} alt="next shrine btn" />
                    </a>
                </button>
            </div>
        );
    }
}

export default NextShrineButton;
