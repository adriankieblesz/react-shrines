import React from 'react';
const GalleryButton = ({ changeImageClick, classname, source, alt }) => {
    //Universal gallery button
    return (
        <button onClick={changeImageClick} className={classname}>
            <figure>
                <img src={source} alt={alt} />
            </figure>
        </button>
    );
}

export default GalleryButton;