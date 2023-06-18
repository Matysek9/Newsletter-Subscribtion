import React from 'react';
import styles from "./InformationComponent.module.scss";

const InformationComponent = () => {
    return (
        <div className={styles.textStyle}>
           <h1>Stay updated!</h1>
           <span>Join 60,000+ product managers receiving monthly updates on:</span>
           <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
           </ul>
        </div>
    );
};

export default InformationComponent;