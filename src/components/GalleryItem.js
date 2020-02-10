import React from 'react';
const GalleryItem = (props) => {
    return (
        <figure className="sensoji-gallery-item">
            <img src={props.src} alt="" srcSet={props.srcSet} sizes={props.sizes} />
            <div onClick={props.click} className="expand-gallery-item"></div>
        </figure>
    );
}

export default GalleryItem;