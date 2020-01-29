import React, { Component } from 'react';
import MeijiHead from './MeijiHead';
import P from './P';
import MeijiItem from './MeijiItem';
import MeijiGallery from './MeijiGallery';
import Map from './Map';
import Iframe from './Iframe'
import './Meiji.scss';
class Meiji extends Component {
    state = {
        showHead: false
    }
    handleScroll = () => {
        window.scrollY > this.refs.meiji.getBoundingClientRect().top + window.scrollY - 100 && this.setState(() => ({
            showHead: true
        }))
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <section id="meiji" ref={"meiji"}>
                <MeijiHead classnameshow={this.state.showHead ? "meiji-show" : ""} />
                <article className="meiji-article">

                    <MeijiItem>
                        <P>
                            Meiji-jingu Shrine is placed deep inside of the forest in Shibuya district.
                            To get there you will need to pass one of the great gates at the beginning
                            of the forest. They are honestly big!
                            <img src={require('../images/Meiji_Shrine/17c2.jpg')} alt="" />
                        </P>
                    </MeijiItem>
                    <MeijiItem>
                        <P>
                            Then depending which side you passed in you will need to go through
                            long path of wonderful trees around you. To be hones when I was there
                            for the first time I felt like in some magic place.
                            <img className="rotate" src={require('../images/Meiji_Shrine/1c.jpg')} alt="" />
                        </P>
                    </MeijiItem>
                    <MeijiItem>
                        <P>
                            From time to time you will meet at your way those wonderful lanters
                            which probably are meant to elucidate path at nights.
                            <img className="rotate" src={require('../images/Meiji_Shrine/2c.jpg')} alt="" />
                        </P>
                    </MeijiItem>
                    <MeijiItem>
                        <P>
                            And then you will finally reach to destination where entrance gate
                            of the shrine will meet you. If you are there around 1-4PM don't be
                            surprise by amount of people there. This shrine is very popular.
                            <img className="rotate" src={require('../images/Meiji_Shrine/9c.jpg')} alt="" />
                        </P>
                    </MeijiItem>
                    <MeijiItem>
                        <P>
                            Meiji is concerned as the most important shinto shrine in Tokyo.
                            Ashes of one of the most important character in Japanese history rest here.
                            Emperor Mutsuhito (known as Meiji after death) contributed to significant
                            changes in Japanese system in XIX century creating fundamentals for modern Japan.
                            Shrine is also very popular amongs newlyweds for weeding ceremonies pictures.
                            <img className="rotate" src={require('../images/Meiji_Shrine/4c.jpg')} alt="" />
                        </P>
                    </MeijiItem>

                </article>
                <MeijiGallery />
                <article className="meiji-article meiji-article-map" >
                    <Map ref={"map"}
                        iframe={
                            <Iframe source={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6482.063958660946!2d139.69675097670705!3d35.67621455891326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cb79a4c26e5%3A0x8fca893849103f73!2sMeiji%20Shrine!5e0!3m2!1spl!2spl!4v1579191224896!5m2!1spl!2spl"} />
                        }

                        description={
                            <P>
                                Meiji-jingu Temple is placed in Shibuya district and it is very close to Yoyogi Station.
                            </P>
                        }
                        tstation={
                            <P>
                                You can get to <img src={require('../images/PT_icons/JC.jpg')} alt="JK" /> Chūō Line Line to directly disembark at <strong>Yoyogi Station</strong>
                            </P>
                        }
                        sstation={
                            <P>
                                Temple is relatively close to <strong>Shinjuku Station</strong> and there is about 10 to 15 minutes walk from there.
                            </P>
                        }
                    />
                </article>

            </section >
        );
    }
}

export default Meiji;