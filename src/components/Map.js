import React, { Component, Fragment } from 'react';
import './Map.scss';
class Map extends Component {
    state = {
        classname: ""
    }
    handleScroll = () => {
        //show map if passes fixed visible point
        window.scrollY > this.refs.map.getBoundingClientRect().top + window.scrollY - 500 && this.setState(() => ({
            classname: "show-map"
        }))
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        const { classname } = this.state;
        const { iframe, description, tstation, sstation } = this.props;
        return (
            <Fragment>
                <div className={classname} ref="map">
                    <h2 className="map-header">How to get there?</h2>
                    <img className="map-img" src={require('../images/Icons/map.png')} alt="" />
                    <div className="map-grid">
                        <div className="map-item map-first">
                            {iframe}
                        </div>
                        <div className="map-item map-second">
                            <span>{description}</span>
                            <span><h4>From Tokyo Station:</h4></span>
                            <span>{tstation}</span>
                            <span><h4>From Shinjuku Station:</h4></span>
                            <span>{sstation}</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Map;