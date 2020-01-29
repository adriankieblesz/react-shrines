import React, { Component, Fragment } from 'react';
import './Map.scss';
class Map extends Component {
    state = {
        classname: ""
    }
    handleScroll = () => {
        window.scrollY > this.refs.map.getBoundingClientRect().top + window.scrollY - 500 && this.setState(() => ({
            classname: "show-map"
        }))
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <Fragment>
                <div className={this.state.classname} ref="map">
                    <h2 className="map-header">How to get there?</h2>
                    <img className="map-img" src={require('../images/Icons/map.png')} alt="" />
                    <div className="map-grid">
                        <div className="map-item map-first">
                            {this.props.iframe}
                        </div>
                        <div className="map-item map-second">
                            <span>{this.props.description}</span>
                            <span><h4>From Tokyo Station:</h4></span>
                            <span>{this.props.tstation}</span>
                            <span><h4>From Shinjuku Station:</h4></span>
                            <span>{this.props.sstation}</span>
                        </div>
                    </div>
                </div>

            </Fragment>

        );
    }
}

export default Map;