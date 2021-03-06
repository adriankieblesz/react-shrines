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
        showNextBtn: false
    }
    handleScroll = () => {
        const { refss } = this.state;

        //animate initial part of component (title animation)
        window.scrollY > this.refs.hie.getBoundingClientRect().top + window.scrollY - 300 && this.setState(() => ({
            showHeader: true,
        }))
        //reset scroll position variable to 0 for adjusting backgroundPoistionY of top component's part background
        this.setState(() => ({
            scroll: -((window.scrollY * .3) - (refss * .3)),
            refss: this.refs.hie.getBoundingClientRect().top + window.scrollY - this.refs.hieHead.clientHeight
        }))
        //if background not fisible then backgroundPositionY = 0
        if (window.scrollY > this.refs.hieHead.getBoundingClientRect().bottom + window.scrollY) {
            this.setState(() => ({
                scroll: 0
            }))
        }
        //if scrollY reaches almost end of the component then show button for next shrine
        if (window.scrollY > this.refs.hie.getBoundingClientRect().bottom + window.scrollY - (this.refs.hie.clientHeight * 0.2)) {
            this.setState(() => ({
                showNextBtn: true
            }))
        }
        //if scrollY passes some part of the next shrine then hide button for next shrine
        if (window.scrollY > this.refs.hie.getBoundingClientRect().top + window.scrollY + this.refs.hie.clientHeight - 500 || window.scrollY < this.refs.hie.getBoundingClientRect().bottom + window.scrollY - (this.refs.hie.clientHeight * 0.2)) {
            this.setState(() => ({
                showNextBtn: false
            }))
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        //determine initial position of component after component has been mounted
        this.setState(() => ({
            refss: this.refs.hie.getBoundingClientRect().top + window.scrollY
        }))
    }
    render() {
        const { asyncLoading } = this.props;
        const { showHeader, scroll, showNextBtn } = this.state;

        return (
            <section id="hie" ref="hie" style={{ backgroundColor: "black" }}>
                <div ref="hieHead"><HieHead classname={`${showHeader ? "hie-header show-hie-header" : "hie-header"}`} backgroundposition={scroll} /></div>
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

                    <div className="hie-space"></div>

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
                                src={require(`../images/Hie_Shrine/12c_800.webp`)}
                                alt="hie shrine"
                            />
                        </div>
                    </ScrollShowElement>

                    <div className="hie-space"></div>

                    <ScrollShowElement classnameshow={"hie-show-element"} classnamehide={"hie-hide-element"} ratio={1}>
                        <div className="hie-grid">
                            <P>
                                There is also very interesting entrance through one but definitely bigger Tori Gate than
                                previous ones. And you will not escape from going up long and steep stairs. Anyway, it is worth
                                to try go up and down through both entrances and take buch of pictures there.
                            </P>
                            <img
                                src={require(`../images/Hie_Shrine/8c_800.webp`)}
                                alt="hie shrine"
                            />
                        </div>
                    </ScrollShowElement>

                    <div className="hie-space"></div>

                    <ScrollShowElement classnameshow={"hie-show-element"} classnamehide={"hie-hide-element"} ratio={1}>
                        <div className="hie-grid">
                            <P>
                                Since you pass one of the entrances you will reach to the shrine itself. Another interesting fact
                                about this place is that it's placed on hill and despite it's surrounded by trees you can
                                easly see skyscrapers on the background. I think pictures like that show interesting connection
                                between traditional and modern Japan.
                            </P>
                            <img
                                src={require(`../images/Hie_Shrine/5c_800.webp`)}
                                alt="hie shrine"
                            />
                        </div>
                    </ScrollShowElement>
                </article>
                <HieGallery asyncGalleryLoad={asyncLoading} />
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
                                You can get to <img src={require('../images/PT_icons/M_25.png')} alt="M" /> Marunouchi Line and disembark at <strong>Akasaka-Mitsuke Station</strong> and then walk about 400 meters to get to the shrine.
                            </P>
                        }
                        sstation={
                            <P>
                                Simillary as with Tokyo Station, try to find <img src={require('../images/PT_icons/M_25.png')} alt="M" /> Marunouchi Line to disembark at <strong>Akasaka-Mitsuke Station</strong> and then walk 400 meters to shrine.
                            </P>
                        }
                        source={require('../images/Icons/map_white.png')}
                    />
                </article>
                <NextShrineButton
                    text={"Go to Gotokuji Temple"}
                    source={"#gotokuji"}
                    show={showNextBtn}
                />
            </section >
        );
    }
}

export default Hie;