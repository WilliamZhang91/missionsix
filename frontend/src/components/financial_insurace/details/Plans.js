import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "./Form.module.css";
import { useGlobalContext } from "../../store/context";
import PersonalDetails from "../personal_details/PersonalDetails";

const Plans = () => {

    const state = useGlobalContext();
    const { handlePlan } = useGlobalContext();
    const [selectedPlan, setSelectedPlan] = useState("1")

    //const target = (e) => {
    //    console.log(e.target.attributes.getNamedItem("value").value)
    //}

    return <div>
        <h1 className={`${styles.vehicle_details} ${styles.flex}`}>Our Plans</h1>
        <div className={styles.plans}>

            <div className={styles.plan_options}>
                <div className={styles.card_options}>
                    <h1 value="Comprehensive" onClick={(e) => handlePlan(e)}>$30.50</h1>
                    <Link to="/apply">Comprehensive</Link>
                </div>
            </div>

            <div className={styles.plan_options}>
                <div className={styles.card_options} value="third party, fire and theft" onClick={(e) => handlePlan(e)}>
                    <h1>Third party, fire and Theft: $22.50</h1>
                    <Link to="/apply">Buy Now</Link>
                </div>
            </div>

            <div className={styles.plan_options}>
                <div className={styles.card_options}>
                    <h1 value="Third party" onClick={(e) => handlePlan(e)}>Third Party: $10.00</h1>
                    <Link to="/apply">Buy Now</Link>
                </div>
            </div>

        </div>
    </div>
}

export default Plans