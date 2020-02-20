import React from 'react';
const GalleryButton = (props) => {
    //Universal gallery button
    return (
        <button onClick={props.changeImageClick} className={props.classname}>
            <figure>
                <img src={props.source} alt={props.alt} />
            </figure>
        </button>
    );
}

export default GalleryButton;