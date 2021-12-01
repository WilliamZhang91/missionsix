import styles from "./PersonalDetails.module.css";
import React, { useState, useEffect, useRef } from "react";
import PaymentDetails from "./PaymentDetails";
import { AiOutlineArrowRight } from "react-icons/ai";


const PaymentPlan = () => {

    const [showPaymentDetails, setShowPaymentDetails] = useState(false);

    const displayPaymentDetails = () => {
        setShowPaymentDetails(true)
    };

    const paymentDetailsRef = useRef();

    useEffect(() => {
        paymentDetailsRef.current.scrollIntoView({
            behavior: "smooth"
        });
    }, [displayPaymentDetails])


    return <div>
        <h1 className={styles.title}>Choose your payment plan</h1>
        <div>
            <form className={styles.form}>
                <input
                    type="radio"
                    id="fortnightly"
                    name="fortnightly"
                    value="fortnightly"
                />
                <label htmlFor="huey">$30.50<div>per fortnight</div></label>
                <input
                    type="radio"
                    id="monthly"
                    name="monthly"
                    value="monthly"
                />
                <label htmlFor="huey">$60<div>per month</div></label>
                <input
                    type="radio"
                    id="yearly"
                    name="yearly"
                    value="yearly"
                />
                <label htmlFor="huey">$743<div>per year</div></label>
            </form>

            <AiOutlineArrowRight className={styles.arrow} onClick={displayPaymentDetails} />
        </div>

        <div ref={paymentDetailsRef}>
            {showPaymentDetails && <PaymentDetails />}
        </div>



    </div>
}

export default PaymentPlan