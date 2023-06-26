import React from 'react';
import styles from "./SuccessComponent.module.scss";

const SuccessComponent = (props) => {
    return (
        <div className={styles.card}>
           <div>
             <img src="images/icon-success.svg" alt="success" />
             <h1>Thanks for subscribing!</h1>
             <p>A confirmation email has been sent to <b>{props.email}</b>. Please open it and click the button inside to confirm your subscription</p>
           </div>
            <button>Dismiss message</button>
        </div>
    );
};

export default SuccessComponent;