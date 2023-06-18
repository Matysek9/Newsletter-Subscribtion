import React from 'react';
import styles from "./ImageComponent.module.scss"

const ImageComponent = (props) => {
    return (
        <picture className={styles.picture}>
            <source media={`(max-width: ${props.desktopMax})`} srcSet={props.mobileImg} />
            <source srcSet={props.desktopImg} />
            <img src={props.desktopImg} alt="image" />
        </picture>
    );
};

export default ImageComponent;