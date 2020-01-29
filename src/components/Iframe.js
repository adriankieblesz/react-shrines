import React from 'react';
const Iframe = (props) => {
    return (
        <iframe className="map" title="map" src={props.source} frameBorder="0" style={{ "border": 0 }} allowFullScreen=""></iframe>
    );
}

export default Iframe;