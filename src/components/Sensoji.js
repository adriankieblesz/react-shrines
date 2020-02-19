import React, { Component } from 'react';
import ShrineTitle from './ShrineTitle.js';
import SensojiItem from './SensojiItem.js';
import SensojiGallery from './SensojiGallery.js';
import ScrollShowElement from './ScrollShowElement.js';
import Map from './Map';
import P from './P';
import Iframe from './Iframe';
import './Sensoji.scss';
import NextShrineButton from './NextShrineButton.js';

class Sensoji extends Component {
    state = {
        sensojiInfo: [
            { number: [6, 1], classname: "shrine-grid", description: ["Starting from the most popular temple for I guess entire Japan, Senso-ji temple is iconic place in Tokyo. Placed in Asakusa and visited by milions of people every year.", "The temple was finished in 645 AD so it makes it the oldest one in Tokyo. Temple is affiliated to Buddhism"] },
            { number: [2, 4], classname: "shrine-grid", description: ["After reaching the main gate Kaminarimon which you can see on the photo above, you will need to pass through long path of stalls where you can buy souvenirs related to temple and any other sanctuary like items.", "After that you will get to the second gate Hōzōmon which is the most popular spot around entire temple. Perfect time for another portion of pictures."] },
            { number: [5, 8], classname: "shrine-grid", description: ["Be prepared to be welcome by Niō - wrathful muscular guardians of the Buddha. You can meet them in many Buddhist temples so they of course cannot be absent in Senso-ji.", "And finally you will get to the temple itself. What's inside it's your job to check out!"] }
        ],
        isActive: false,
        distance: 0,
        backgroundPosition: null,
        showNextBtn: false,
        btnClassName: ""
    }

    handleScroll = () => {
        let scrollY = window.scrollY || window.pageYOffset
        let position = this.refs.sensojiHead.getBoundingClientRect().top + scrollY;
        if (position - this.state.distance <= scrollY) {
            this.setState(() => ({
                isActive: true
            }))
        }
        this.setState(() => ({ backgroundPosition: window.scrollY * -.2 }))

        if (window.scrollY > this.refs.sensojiRef.getBoundingClientRect().bottom + window.scrollY - (this.refs.sensojiRef.clientHeight * 0.25)) {
            this.setState(() => ({
                showNextBtn: true
            }))
        }
        // if (window.scrollY > this.refs.sensojiRef.getBoundingClientRect().bottom + window.scrollY || window.scrollY < this.refs.sensojiRef.getBoundingClientRect().bottom + window.scrollY - (this.refs.sensojiRef.clientHeight * 0.25)) {
        //     this.setState(() => ({
        //         showNextBtn: false
        //     }))
        // }
        if (window.scrollY > this.refs.sensojiRef.getBoundingClientRect().top + window.scrollY + this.refs.sensojiRef.clientHeight - 500 || window.scrollY < this.refs.sensojiRef.getBoundingClientRect().bottom + window.scrollY - (this.refs.sensojiRef.clientHeight * 0.25)) {
            this.setState(() => ({
                showNextBtn: false
            }))
        }

    }
    handleResize = () => {
        if (window.innerWidth < 1025) this.setState(() => ({ distance: 300 }))
        else this.setState(() => ({ distance: 10 }))
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize);
        this.height = this.refs.sensojiHead.clientHeight;
        if (window.innerWidth < 1025) this.setState(() => ({ distance: 300 }))
        else this.setState(() => ({ distance: 10 }))
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize);
    }
    render() {
        const grids = this.state.sensojiInfo.map(info => <SensojiItem
            key={this.state.sensojiInfo.indexOf(info)}
            classname={info.classname}
            source={require(`../images/Senso_ji_Temple/${info.number[0]}_800.webp`)}
            // srcSet={`${require(`../images/Senso_ji_Temple/${info.number[0]}.jpg`)} 1600w, 
            //          ${require(`../images/Senso_ji_Temple/${info.number[0]}_800.jpg`)} 800w,
            //          ${require(`../images/Senso_ji_Temple/${info.number[0]}_300.jpg`)} 300w
            // `}
            alt={"Senso-Ji"}
            description={info.description[0]}
            secondDescription={info.description[1]}
            secondSource={require(`../images/Senso_ji_Temple/${info.number[1]}_800.webp`)}
        // secondSrcSet={`${require(`../images/Senso_ji_Temple/${info.number[1]}.jpg`)} 1600w, 
        //                ${require(`../images/Senso_ji_Temple/${info.number[1]}_800.jpg`)} 800w,
        //                ${require(`../images/Senso_ji_Temple/${info.number[1]}_300.jpg`)} 300w
        // `}
        />)
        return (
            <section id="sensoji" className="shrine-section sensoji-margin" ref="sensojiRef" style={{ backgroundPositionY: this.state.backgroundPosition }}>
                <div ref={"sensojiHead"} className="sensoji-head">
                    <div className={`sensoji-img ${this.state.isActive ? "imgDown" : ""}`} >
                        <div className={`sensoji-dim ${this.state.isActive ? "dimDown" : ""}`}>
                            <ShrineTitle
                                engTitle={"Sensō-ji"}
                                japTitle={"浅草寺"}
                                classname={"sensoji-title"}
                                engclass={this.state.isActive ? "showEngTitle" : ""}
                                japclass={this.state.isActive ? "showJapTitle" : ""}
                            />
                        </div>
                    </div>
                </div>

                <article className="sensoji-article">
                    {grids}
                    <SensojiGallery allowAsyncGallery={this.state.isActive} />
                    <Map ref={"map"}
                        iframe={
                            <Iframe source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9162.670944887788!2d139.7924593836857!3d35.714082776094294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec1a4463df1%3A0x6c0d289a8292810d!2zU2Vuc8WNLWpp!5e0!3m2!1spl!2spl!4v1577944734907!5m2!1spl!2spl"} />
                        }
                        description={
                            <P>
                                Sensoji Temple is placed in Asakusa district and it is very close to Asakusa Station.
                            </P>
                        }
                        tstation={
                            <P>
                                You can get to <img src={require('../images/PT_icons/JK_25.png')} alt="JK" /> Keihin-Tōhoku Line to <strong>Kanada Station</strong> and then transfer to <img src={require('../images/PT_icons/G_25.png')} alt="G" /> Ginza Line to disembark at <strong>Asakusa Station</strong>
                            </P>
                        }
                        sstation={
                            <P>
                                Find <img src={require('../images/PT_icons/JC_25.png')} alt="JC" /> Chūō Line and reach to <strong>Kanada Station</strong> then transfer to <img src={require('../images/PT_icons/G_25.png')} alt="G" /> Ginza Line and you will get to the <strong>Asakusa Station</strong>
                            </P>
                        }
                    />
                </article>
                {/* {this.state.showNextBtn && <NextShrineButton
                    text={"Go to Hie Shrine"}
                    source={"#hie"}
                    show={this.state.showNextBtn}
                />} */}
                <NextShrineButton
                    text={"Go to Hie Shrine"}
                    source={"#hie"}
                    show={this.state.showNextBtn}
                />
            </section>
        );
    }
}

export default Sensoji;