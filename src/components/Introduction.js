import React, { Component } from 'react';
import ButtonDown from './ButtonDown';
import './Introduction.scss';
class Introduction extends Component {
    state = {
        backgroundPositionY: null
    }

    handleScroll = () => {
        let scrollY = window.scrollY || window.pageYOffset;
        //change backgroundPositionY according to scrollY
        this.setState(() => ({
            backgroundPositionY: (scrollY * (-0.2))
        }))
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        const { backgroundPositionY } = this.state;
        return (
            <section id="introduction" style={{
                backgroundPositionY: backgroundPositionY
            }}>

                <article className="intro-article">

                    <p className="intro-p">
                        When it comes to visit Tokyo Japan there is a plety of places to see.
                        Absolutely must see are temples/shrines placed all around entire Tokyo
                        and also entire Japan. But sometimes we ask "where should we go first?" or
                        "we don't have enought time to visit each temple, which one should we
                        choose?". Below are presented five incredibely georgous and well known
                        temples in Tokyo with exact location and tips how to get there.
                    </p>

                </article>
                <ButtonDown link={"#presentation"} />
            </section >
        );
    }
}

export default Introduction;