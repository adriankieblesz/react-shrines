
import React, { Component } from 'react';
class Iframe extends Component {
    state = {
        source: "",
        load: false
    }
    //Promise for asynchronous passing string source for iframe component
    loadIframe = (source) => {
        return new Promise((resolve, reject) => {
            if (source === "" || source === null)
                reject(new Error('Incorrect string source'));
            else
                resolve(source);
        })
    }
    handleScroll = () => {
        const { load } = this.state;
        const { source } = this.props;
        //Asynchronous maps loading during first scroll
        if (!load) {
            setTimeout(() => {
                this.loadIframe(source)
                    .then(respond => this.setState(() => ({ source: respond })));
                this.setState(() => ({ load: true }))
            }, 500);
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        const { source } = this.state;
        return (
            <iframe className="map" title="map" src={source} frameBorder="0" style={{ "border": 0 }} allowFullScreen=""></iframe>
        );
    }
}

export default Iframe;
