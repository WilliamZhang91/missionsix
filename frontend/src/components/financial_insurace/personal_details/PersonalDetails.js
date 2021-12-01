import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../../store/context";
import PaymentPlan from "./PaymentPlan";
import styles from "./PersonalDetails.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const PersonalDetails = () => {

    const state = useGlobalContext();
    const { handleSurname } = useGlobalContext();
    const { handleFirstName } = useGlobalContext();
    const { handleAddress } = useGlobalContext();
    const { handlePhone } = useGlobalContext();
    const { handleEmail } = useGlobalContext();
    const [showPaymentPlan, setShowPaymentPlan] = useState(false);
    const paymentPlanRef = useRef();

    const confirmation = () => {
        setShowPaymentPlan(true)
    }

    useEffect(() => {
        paymentPlanRef.current.scrollIntoView({
            behavior: "smooth"
        });
    }, [confirmation])

    return <div className={styles.layout}>

        <div className={styles.layout1}>

            <h1 className={styles.title}>
                Personal Details
            </h1>

            <form>
                <div className={styles.form}>
                    <label htmlFor="name">Name:</label>
                    <div>
                        <input
                            className={`${styles.input} ${styles.margin_input}`}
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={state.first_name}
                            onChange={(e) => handleFirstName(e)}
                        />
                        <input
                            className={styles.input}
                            type="text"
                            name="surname"
                            placeholder="Family Name"
                            value={state.surname}
                            onChange={(e) => handleSurname(e)}
                        />
                    </div>
                </div>

                <div className={styles.form}>
                    <label className={styles.label} htmlFor="address">Address:</label>
                    <input
                        className={styles.input1}
                        type="text"
                        name="address"
                        value={state.address}
                        onChange={(e) => handleAddress(e)}
                    />
                </div>

                <div className={styles.form}>
                    <label className={styles.label} htmlFor="phone">Phone:</label>
                    <input
                        className={styles.input1}
                        type="number"
                        name="phone"
                        value={state.phone}
                        onChange={(e) => handlePhone(e)}
                    />
                </div>

                <div className={styles.form}>
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input
                        className={styles.input1}
                        type="email"
                        name="email"
                        value={state.email}
                        onChange={(e) => handleEmail(e)}
                    />
                </div>
            </form>
            <AiOutlineArrowRight className={styles.arrow} onClick={confirmation} />
            <div ref={paymentPlanRef}>
                {showPaymentPlan && <PaymentPlan />}
            </div>
        </div>
    </div>
}

export default PersonalDetails