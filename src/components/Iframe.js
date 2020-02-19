
import React, { Component } from 'react';
class Iframe extends Component {
    state = {
        source: "",
        load: false
    }
    loadIframe = (source) => {
        return new Promise((resolve, reject) => {
            if (source === "" || source === null)
                reject(new Error('Incorrect string source'));
            else
                resolve(source);
        })
    }
    handleScroll = () => {
        if (!this.state.load) {
            setTimeout(() => {
                this.loadIframe(this.props.source)
                    .then(respond => this.setState(() => ({ source: respond })));
                this.setState(() => ({ load: true }))
            }, 1000);
        }
    }
    componentDidMount() {

        // this.loadIframe(this.props.source)
        //     .then(respond => this.setState(() => ({ source: respond })));
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <iframe className="map" title="map" src={this.state.source} frameBorder="0" style={{ "border": 0 }} allowFullScreen=""></iframe>
        );
    }
}

export default Iframe;
// const Iframe = (props) => {
//     return (
//         <iframe className="map" title="map" src={props.source} frameBorder="0" style={{ "border": 0 }} allowFullScreen=""></iframe>
//     );
// }

// export default Iframe;