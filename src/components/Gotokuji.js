import React, { Component } from 'react';
import P from './P';
import ShrineTitle from './ShrineTitle';
import './Gotokuji.scss';
import GotokujiGallery from './GotokujiGallery';
import Map from './Map';
import Iframe from './Iframe';
import ScrollShowElement from './ScrollShowElement';
import NextShrineButton from './NextShrineButton';
class Gotokuji extends Component {
    state = {
        classname: "",
        backgroundPosition: 1,
        showNextBtn: false
    }
    handleScroll = () => {
        window.scrollY > this.refs.gotokuji.getBoundingClientRect().top + window.scrollY - 100 && this.setState(() => ({
            classname: "gotokuji-article-active"
        }))
        if (window.scrollY > this.refs.gotokuji.getBoundingClientRect().bottom + window.scrollY - (this.refs.gotokuji.clientHeight * 0.1)) {
            this.setState(() => ({
                showNextBtn: true
            }))
        }
        if (window.scrollY > this.refs.gotokuji.getBoundingClientRect().top + window.scrollY + this.refs.gotokuji.clientHeight - 500 || window.scrollY < this.refs.gotokuji.getBoundingClientRect().bottom + window.scrollY - (this.refs.gotokuji.clientHeight * 0.1)) {
            this.setState(() => ({
                showNextBtn: false
            }))
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <section id="gotokuji" ref={"gotokuji"}>
                <article className={`gotokuji-article ${this.state.classname}`} ref={"gotokujiArticle"} >
                    <div className="title-container">
                        <ShrineTitle
                            classname={"gotokuji-title"}
                            engclass={"gotokuji-title-eng"}
                            japclass={"gotokuji-title-jap"}
                            engTitle={"Gotokuji"}
                            japTitle={"護国寺"} />
                    </div>
                    <div className="gotokuji-container">
                        <ScrollShowElement classnameshow={"gotokuji-show-element"}>
                            <P>
                                Now we are at my favourite temple <strong><span className="gotokuji-title">Gotokuji</span></strong>!
                                One of the most interesting facts about this place is that it was created
                                by Tokugawa Tsunayoshi. Tokugawa was fifth shōgun of the Tokugawa dynasty and
                                lived between XVII and XVIII century. He dedicated this shrine to his mother Otama
                                also known as Keishōin.
                            <img
                                    src={require('../images/Gotokuji_Temple/23c_1000.jpg')}
                                    alt=""
                                />
                            </P>
                        </ScrollShowElement>
                        <ScrollShowElement classnameshow={"gotokuji-show-element"} classnamehide={"gotokuji-hide-element"} ratio={2.5}>
                            <P>
                                This place is also known for Maneki-neko. Those cute cat figures are strictly related to
                                Chinese and Japanese tradition. In XXI century Japan they symbolise prosperity and take away unhappiness.
                            <img
                                    src={require('../images/Gotokuji_Temple/13c_1000.jpg')}
                                    alt=""

                                />
                            </P>
                        </ScrollShowElement>
                        <ScrollShowElement classnameshow={"gotokuji-show-element"} classnamehide={"gotokuji-hide-element"} ratio={2.5}>
                            <P>
                                If you reach to the shrine you will have oppurtunity to purchase one with reception that stays around the temple area.
                            <img src={require('../images/Gotokuji_Temple/22c_1000.jpg')} alt="" />
                            </P>
                        </ScrollShowElement>
                        <ScrollShowElement classnameshow={"gotokuji-show-element"} classnamehide={"gotokuji-hide-element"} ratio={2.5}>
                            <P>
                                Except main hall that you've seen on the first photo there is a lot of spots to view. For example,
                                Three-Story Pagoda, which looks amazing and even better in autumn.
                            <img src={require('../images/Gotokuji_Temple/2c_1000.jpg')} alt="" />
                            </P>
                        </ScrollShowElement>
                        <ScrollShowElement classnameshow={"gotokuji-show-element"} classnamehide={"gotokuji-hide-element"} ratio={2.5}>
                            <P>
                                A dog statue sitting on a big black incense burner
                            <img src={require('../images/Gotokuji_Temple/7c_1000.jpg')} alt="" />
                            </P>
                        </ScrollShowElement>
                        <ScrollShowElement classnameshow={"gotokuji-show-element"} classnamehide={"gotokuji-hide-element"} ratio={2.5}>
                            <P>
                                A bell tower next to the one of entrance gates.
                            <img src={require('../images/Gotokuji_Temple/1c_1000.jpg')} alt="" />
                            </P>
                        </ScrollShowElement>
                        <ScrollShowElement classnameshow={"gotokuji-show-element"} classnamehide={"gotokuji-hide-element"} ratio={2.5}>
                            <P>
                                Maneki-neko hall. Usually closed inside but wonderful design.
                            <img src={require('../images/Gotokuji_Temple/15c_1000.jpg')} alt="" />
                            </P>
                        </ScrollShowElement>
                        <ScrollShowElement classnameshow={"gotokuji-show-element"} classnamehide={"gotokuji-hide-element"} ratio={2.5}>
                            <P>
                                Maneki-neko stalls, which is great place for taking pictures.
                            <img src={require('../images/Gotokuji_Temple/12c_1000.jpg')} alt="" />
                            </P>
                        </ScrollShowElement>
                        <ScrollShowElement classnameshow={"gotokuji-show-element"} classnamehide={"gotokuji-hide-element"} ratio={2.5}>
                            <P>
                                You can also get to the Japanese buddish cementary.
                            <img src={require('../images/Gotokuji_Temple/19c_1000.jpg')} alt="" />
                                <img src={require('../images/Gotokuji_Temple/17c_1000.jpg')} alt="" />
                                <img src={require('../images/Gotokuji_Temple/18c_1000.jpg')} alt="" />
                                <img src={require('../images/Gotokuji_Temple/21c_1000.jpg')} alt="" />
                            </P>
                        </ScrollShowElement>

                        <P>
                            Despite this shrine is far away from centre of Tokyo (Setagaya district),
                            it is highly recommended to visit this place due to it's magic vibes.
                            You can also experience here incredible silence as it is far away from main roads
                            of crowded city. Great place to meet part of Japanese culture and spend a bit time
                            for relax.
                        </P>

                    </div>
                </article>
                <article className="gotokuji-gallery-arcticle">
                    <GotokujiGallery />
                </article>
                <article className="gotokuji-article-map" >
                    <Map ref={"map"}
                        iframe={
                            <Iframe source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15422.562447997836!2d139.64475975514102!3d35.6475825399903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f39f99015555%3A0x6b0e9ad51be4cac!2sG%C5%8Dtokuji%20Temple!5e0!3m2!1spl!2spl!4v1579611452188!5m2!1spl!2spl"} />
                        }

                        description={
                            <P>
                                Gotokuji Temple is placed in Setagaya district and it is far away from city center.
                            </P>
                        }
                        tstation={
                            <P>
                                You can walk to <strong>Nijubashimae Station</strong> and get to <img src={require('../images/PT_icons/C.jpg')} alt="C" /> Chiyoda Line to disembark at <strong>Kyodo Station</strong> and walk to destination.
                            </P>
                        }
                        sstation={
                            <P>
                                Find <img src={require('../images/PT_icons/OH.jpg')} alt="OH" /> Odakyu Line which will transport you directly to <strong>Gotokuji Station</strong> then there is about 10 minutes walk to shrine.
                            </P>
                        }
                    />
                </article>
                {/* {this.state.showNextBtn && <NextShrineButton
                    text={"Go to Toyokawa Shrine"}
                    source={"#toyokawa"}
                />} */}
                <NextShrineButton
                    text={"Go to Toyokawa Shrine"}
                    source={"#toyokawa"}
                    show={this.state.showNextBtn}
                />
            </section>
        );
    }
}

export default Gotokuji;