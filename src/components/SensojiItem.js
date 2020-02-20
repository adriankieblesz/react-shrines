import React from 'react';
import './SensojiItem.scss'
import ScrollShowElement from './ScrollShowElement';

const ShrineGrid = ({ classname, source, alt, srcSet, sizes, description, secondDescription, secondSource, secondSrcSet, seconsSizes }) => {
    return (
        <React.Fragment>
            <ScrollShowElement classnamehide={"hideLeft"} classnameshow={"showElementLeft"}>
                <div className={classname}>
                    <figure>
                        <img
                            src={source}
                            alt={alt}
                            srcSet={srcSet}
                            sizes={sizes}
                        />
                    </figure>
                    <p>
                        {description}
                    </p>
                </div>
            </ScrollShowElement>
            <ScrollShowElement classnamehide={"hideRight"} classnameshow={"showElementRight"}>
                <div className={classname}>
                    <p>
                        {secondDescription}
                    </p>
                    <figure>
                        <img
                            src={secondSource}
                            alt={alt}
                            srcSet={secondSrcSet}
                            sizes={seconsSizes}
                        />
                    </figure>
                </div>
            </ScrollShowElement>
        </React.Fragment>
    );
}

export default ShrineGrid;