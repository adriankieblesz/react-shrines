import React, { Component } from 'react';
import "./Toyokawa.scss";
import ToyokawaHead from './ToyokawaHead';
import P from './P';
import ToyokawaGallery from './ToyokawaGallery';
import Map from './Map';
import Iframe from './Iframe';
import ScrollShowElement from './ScrollShowElement';
import NextShrineButton from './NextShrineButton';

class Toyokawa extends Component {
    state = {
        showHeader: false,
        showNextBtn: false
    }
    handleScroll = () => {
        window.scrollY > this.refs.toyokawa.getBoundingClientRect().top + window.scrollY - 10 && this.setState(() => ({
            showHeader: true
        }))
        if (window.scrollY > this.refs.toyokawa.getBoundingClientRect().bottom + window.scrollY - (this.refs.toyokawa.clientHeight * 0.25)) {
            this.setState(() => ({
                showNextBtn: true
            }))
        }
        if (window.scrollY > this.refs.toyokawa.getBoundingClientRect().bottom + window.scrollY || window.scrollY < this.refs.toyokawa.getBoundingClientRect().bottom + window.scrollY - (this.refs.toyokawa.clientHeight * 0.25)) {
            this.setState(() => ({
                showNextBtn: false
            }))
        }
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
                    <ScrollShowElement classnameshow={"toyokawa-show-element"} classnamehide={"toyokawa-hide-element"}>
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
                    </ScrollShowElement>
                    <ScrollShowElement classnameshow={"toyokawa-show-element"} classnamehide={"toyokawa-hide-element"}>
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
                    </ScrollShowElement>

                    <ToyokawaGallery />
                    <Map ref={"map"}
                        iframe={
                            <Iframe source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.024221616309!2d139.73066131525857!3d35.67640558019544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7e121ee92b%3A0x5761574668b96c9!2sToyokawa%20Inari%20Tokyo%20Betsuin!5e0!3m2!1spl!2spl!4v1580643642437!5m2!1spl!2spl"} />
                        }
                        description={
                            <P>
                                Toyokawa Inari Temple is placed in cosy and pretty silent area in Minato district.
                            </P>
                        }
                        tstation={
                            <P>
                                You can get to <img src={require('../images/PT_icons/M.jpg')} alt="M" /> Marunouchi Line which will directly take you to <strong>Akasaka-Mitsuke Station</strong> and then you will have to walk about 500 meters to shrine. The road is very easy.
                            </P>
                        }
                        sstation={
                            <P>
                                The same story as with Tokyo Station, find <img src={require('../images/PT_icons/M.jpg')} alt="M" /> Marunouchi Line to disembark at <strong>Akasaka-Mitsuke Station</strong> and then walk 500 meters to destination.
                            </P>
                        }
                    />
                </article>
                {this.state.showNextBtn && <NextShrineButton
                    text={"Go to Meiji Shrine"}
                    source={"#meiji"}
                />}
            </section>
        );
    }
}

export default Toyokawa;