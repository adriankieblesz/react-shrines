import React from 'react';
const GalleryItem = ({ src, srcSet, sizes, click }) => {
    return (
        <figure className="sensoji-gallery-item">
            <img src={src} alt="" srcSet={srcSet} sizes={sizes} />
            <div onClick={click} className="expand-gallery-item"></div>
        </figure>
    );
}

export default GalleryItem;