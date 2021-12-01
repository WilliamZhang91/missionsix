import React, { useState } from "react"
import Vehicle from "./details/Vehicle";
import Help from "../modal/Help";
import styles from "./Quote.module.css"

const Quote = () => {


    return (
        <div>
            <h1 className={`${styles.quote} ${styles.title}`}>Instant Auto Quote</h1>
            <div className={styles.quote}>
                <Vehicle />
            </div>
        </div>
    )
}

export default Quote