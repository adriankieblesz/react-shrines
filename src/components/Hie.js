import React, { Component } from 'react';
import "./Hie.scss";
import HieHead from './HieHead';
import P from './P';
import HieGallery from './HieGallery';
import Map from './Map';
import Iframe from './Iframe';
import ScrollShowElement from './ScrollShowElement';
import NextShrineButton from './NextShrineButton';
class Hie extends Component {
    state = {
        showHeader: false,
        scroll: 0,
        refss: 0,
        showNextBtn: false,
        asyncGalleryLoad: false
    }
    handleScroll = () => {
        window.scrollY > this.refs.hie.getBoundingClientRect().top + window.scrollY - 300 && this.setState(() => ({
            showHeader: true,
            asyncGalleryLoad: true
        }))

        this.setState(() => ({
            scroll: -((window.scrollY * .3) - (this.state.refss * .3)),
            refss: this.refs.hie.getBoundingClientRect().top + window.scrollY
        }))
        if (window.scrollY > this.refs.hieHead.getBoundingClientRect().bottom + window.scrollY) {
            this.setState(() => ({
                scroll: 0
            }))
        }
        if (window.scrollY > this.refs.hie.getBoundingClientRect().bottom + window.scrollY - (this.refs.hie.clientHeight * 0.2)) {
            this.setState(() => ({
                showNextBtn: true
            }))
        }
        if (window.scrollY > this.refs.hie.getBoundingClientRect().top + window.scrollY + this.refs.hie.clientHeight - 500 || window.scrollY < this.refs.hie.getBoundingClientRect().bottom + window.scrollY - (this.refs.hie.clientHeight * 0.2)) {
            this.setState(() => ({
                showNextBtn: false
            }))
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState(() => ({
            refss: this.refs.hie.getBoundingClientRect().top + window.scrollY
        }))
    }
    render() {
        return (
            <section id="hie" ref="hie" style={{ backgroundColor: "black" }}>
                <div ref="hieHead"><HieHead classname={`${this.state.showHeader ? "hie-header show-hie-header" : "hie-header"}`} backgroundposition={this.state.scroll} /></div>
                <article className="hie-article" >

                    <ScrollShowElement classnameshow={"hie-show-first"} classnamehide={"hie-hide-first"} ratio={1}>
                        <P>
                            Hie shrine is placed in Chiyoda district and it's affiliated to Shinto.
                            Establishment of this place is estimated between XIII and XIV century.
                            Shrine is very popular amongs Japanese families to visit during the growth
                            celebration of their children named Shichi-Go-San (directly translating from
                            Japanese Seven-Five-Three). In other words, it is a Japanese traditional festival
                            day dedicated for five years old boys and three or seven years old girls.
                    </P>
                    </ScrollShowElement>

                    <div className="hie-space">

                    </div>
                    <ScrollShowElement classnameshow={"hie-show-element"} classnamehide={"hie-hide-element"} ratio={1}>
                        <div className="hie-grid">
                            <P>
                                This place is also very popular for having amazing entrance stairs surrounded
                                by red-orange Tori Gates. Those gates symbolise passage from physical earth world
                                to endless world of gods (kami). Actually, those gates are placed as passages in areas
                                where god or gods can be present. Not only shrines but also places like mountais, water
                                and any other related to Shinto beliefs can have Tori Gates. Nonetheless, Hie shrine is
                                one of those places where Tori Gates create wonderful and magic vibes.
                        </P>
                            <img
                                src={require(`../images/Hie_Shrine/12c_800.jpg`)}
                                alt=""
                                srcSet={`${require(`../images/Hie_Shrine/12c.jpg`)} x3, 
                                         ${require(`../images/Hie_Shrine/12c_800.jpg`)} x2,
                                         ${require(`../images/Hie_Shrine/12c_400.jpg`)} x1
                                         `}
                            />
                        </div>
                    </ScrollShowElement>

                    <div className="hie-space">

                    </div>

                    <ScrollShowElement classnameshow={"hie-show-element"} classnamehide={"hie-hide-element"} ratio={1}>
                        <div className="hie-grid">
                            <P>
                                There is also very interesting entrance through one but definitely bigger Tori Gate than
                                previous ones. And you will not escape from going up long and steep stairs. Anyway, it is worth
                                to try go up and down through both entrances and take buch of pictures there.
                        </P>
                            <img
                                src={require(`../images/Hie_Shrine/8c_800.jpg`)}
                                alt=""
                                srcSet={`${require(`../images/Hie_Shrine/8c.jpg`)} 1600w, 
                                         ${require(`../images/Hie_Shrine/8c_800.jpg`)} 800w,
                                         ${require(`../images/Hie_Shrine/8c_400.jpg`)} 400w
                                         `}
                            />
                        </div>
                    </ScrollShowElement>
                    <div className="hie-space">

                    </div>
                    <ScrollShowElement classnameshow={"hie-show-element"} classnamehide={"hie-hide-element"} ratio={1}>
                        <div className="hie-grid">
                            <P>
                                Since you pass one of the entrances you will reach to the shrine itself. Another interesting fact
                                about this place is that it's placed on hill and despite it's surrounded by trees you can
                                easly see skyscrapers on the background. I think pictures like that show interesting connection
                                between traditional and modern Japan.
                        </P>
                            <img
                                src={require(`../images/Hie_Shrine/5c_800.jpg`)}
                                alt=""
                                srcSet={`${require(`../images/Hie_Shrine/5c.jpg`)} 1600w, 
                                         ${require(`../images/Hie_Shrine/5c_800.jpg`)} 800w,
                                         ${require(`../images/Hie_Shrine/5c_400.jpg`)} 400w
                                         `}
                            />
                        </div>
                    </ScrollShowElement>

                </article>
                <HieGallery asyncGalleryLoad={this.state.asyncGalleryLoad} />
                <article className="gotokuji-article-map">
                    <Map ref={"map"}
                        iframe={
                            <Iframe source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0948401107325!2d139.73775461481006!3d35.67466668019575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601fa6c4e4114317%3A0xef431afda2747c8f!2sHie%20Shrine!5e0!3m2!1spl!2spl!4v1579893453666!5m2!1spl!2spl"} />
                        }
                        description={
                            <P>
                                Hie Temple is placed in centre of the Tokyo in Chiyoda district
                            </P>
                        }
                        tstation={
                            <P>
                                You can get to <img src={require('../images/PT_icons/M.jpg')} alt="M" /> Marunouchi Line and disembark at <strong>Akasaka-Mitsuke Station</strong> and then walk about 400 meters to get to the shrine.
                            </P>
                        }
                        sstation={
                            <P>
                                Simillary as with Tokyo Station, try to find <img src={require('../images/PT_icons/M.jpg')} alt="M" /> Marunouchi Line to disembark at <strong>Akasaka-Mitsuke Station</strong> and then walk 400 meters to shrine.
                            </P>
                        }
                    />
                </article>
                {/* {this.state.showNextBtn && <NextShrineButton
                    text={"Go to Gotokuji Shrine"}
                    source={"#gotokuji"}
                />} */}
                <NextShrineButton
                    text={"Go to Gotokuji Shrine"}
                    source={"#gotokuji"}
                    show={this.state.showNextBtn}
                />
            </section >
        );
    }
}

export default Hie;