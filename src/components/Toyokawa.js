import React, { Component } from 'react';
import "./Toyokawa.scss";
import ToyokawaHead from './ToyokawaHead';
import P from './P';
import ToyokawaGallery from './ToyokawaGallery';
class Toyokawa extends Component {
    state = {
        showHeader: false,
    }
    handleScroll = () => {
        window.scrollY > this.refs.toyokawa.getBoundingClientRect().top + window.scrollY - 10 && this.setState(() => ({
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
                        Toyokawa Inari Shrine is affiliated to Buddhism. According to Buddhist believes paying
                        at this place may bring to prayer and their family happines as same as prosperity and
                        well path in business. Praying and paying here will also help to achieve fortune and may
                        contribute to reach wealthness. Interesting story is connected with this place saying that
                        back to the past to XIII century the descendant of Emperor Juntoku had opportunity to feel
                        spiritual experience where the deity of Dakini-Shinten revealed itself on the top of a fox
                        with a rice plant slung around his back. Then the third son of the emperor which met this
                        experience embodied it into the statue of Daiki-Shinten.
                    </P>
                    <div className="toyokawa-grid">
                        <img src={require(`../images/Toyokawa_Inari_Temple/3c.jpg`)} alt="" />
                        <img src={require(`../images/Toyokawa_Inari_Temple/2c.jpg`)} alt="" />
                    </div>
                    <P>
                        That's why you can see here a lot of statues of fox assuming postures as if they
                        cared about bowl of rice underneath, which they actually do. They are symbols of prosperity
                        and happiness and they have special place in Japanese believes. Because shrine is of course
                        very popular I would highly recommend to visit this place in the morning hours. As you can
                        see on the pictures there are pretty tight paths and there is no much space for crowds of people.
                    </P>
                    <div className="toyokawa-grid">
                        <img src={require(`../images/Toyokawa_Inari_Temple/1c.jpg`)} alt="" />
                        <img src={require(`../images/Toyokawa_Inari_Temple/4c.jpg`)} alt="" />
                    </div>
                    <P>
                        Nonetheless, Toyokawa Inari Shrine is one of those places that are worth being visited. Amazing
                        vibe of this place and unique style will contribute to bring wonderful memories and pictures from here.
                    </P>
                    <ToyokawaGallery />
                </article>
            </section>
        );
    }
}

export default Toyokawa;