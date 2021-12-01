import { useGlobalContext } from "../../store/context";
import React, { useState, useRef, useEffect } from "react";
import Summary from "../Summary";
import styles from "./PersonalDetails.module.css"
import { AiOutlineArrowRight } from "react-icons/ai";


const PaymentDetails = () => {

    const [showSummary, setShowSummary] = useState(false);
    const summaryRef = useRef();

    const displaySummary = () => {
        setShowSummary(true)
    }

    useEffect(() => {
        summaryRef.current.scrollIntoView({
            behavior: "smooth"
        });
    }, [displaySummary])

    return <div className={styles.layout}>

        <div className={styles.layout1}>

            <h1 className={styles.title}>
                Payment Details
            </h1>

            <form>
                <div className={styles.form}>
                    <label htmlFor="name">Pay By:</label>
                    <div>
                        <button className={styles.button}>Credit Card</button>
                        <button className={styles.button}>Bank Transfer</button>
                    </div>
                </div>

                <div className={styles.form}>
                    <label className={styles.label} htmlFor="address">Name:</label>
                    <input
                        className={styles.input1}
                        type="text"
                        name="name"


                    />
                </div>

                <div className={styles.form}>
                    <label className={styles.label} htmlFor="phone">Billing Address:</label>
                    <input
                        className={styles.input1}
                        type="text"
                        name="billing"


                    />
                </div>

                <div className={styles.form}>
                    <label className={styles.label} htmlFor="email">Card Number:</label>
                    <input
                        className={styles.input1}
                        type="number"
                        name="card"


                    />
                </div>
                <div className={styles.form}>
                    <label htmlFor="name">Expiry:</label>
                    <div>
                        <input
                            className={`${styles.input} ${styles.margin_input}`}
                            type="date"
                            name="date"
                        />
                        <input
                            className={styles.input}
                            type="number"
                            name="cvc"
                            placeholder="CVC"
                        />
                    </div>
                </div>
            </form>



            <AiOutlineArrowRight className={styles.arrow} onClick={displaySummary} />

            <div ref={summaryRef}>
                {showSummary && <Summary />}
            </div>
        </div>
    </div>

}

export default PaymentDetails