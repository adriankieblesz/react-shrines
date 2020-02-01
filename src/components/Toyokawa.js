import React, { Component } from 'react';
import "./Toyokawa.scss";
import ToyokawaHead from './ToyokawaHead';
import P from './P';
class Toyokawa extends Component {
    state = {
        showHeader: false,
    }
    handleScroll = () => {
        window.scrollY > this.refs.toyokawa.getBoundingClientRect().top + window.scrollY && this.setState(() => ({
            showHeader: true
        }))
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <section id="toyokawa" ref="toyokawa">
                <ToyokawaHead classname={this.state.showHeader ? "toyokawa-header show-toyokawa-header" : "toyokawa-header"} />
                <article className="toyokawa-article">
                    <P>
                        Toyokawa Inari Shrine is affiliated to Buddhism. According to Buddhist beliefes paying
                        at this place may bring to prayer and their family happines as same as prosperity and
                        well path in business. Praying and paying here will also help to achieve fortune and may
                        contribute to reach wealthness.
                    </P>
                    <br /><br /><br /><br /><br /><br /><br />
                </article>
            </section>
        );
    }
}

export default Toyokawa;