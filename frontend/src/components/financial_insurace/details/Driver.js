import React, { useState, useRef, useEffect } from "react"
import styles from "./Form.module.css";
import Plans from "./Plans";
import { useGlobalContext } from "../../store/context";
import { AiOutlineArrowRight } from "react-icons/ai";

const Driver = () => {

    const [showPlans, setShowPlans] = useState(false);
    const [highlight, setHighlight] = useState("2");
    const [highlight1, setHighlight1] = useState("2");
    const [highlight2, setHighlight2] = useState("2");
    const planRef = useRef();

    const toggleButton = (number) => {
        setHighlight(number);
    };

    const toggleButton1 = (number) => {
        setHighlight1(number);
    };

    const toggleButton2 = (number) => {
        setHighlight2(number);
    };

    const state = useGlobalContext();
    const { handleBirthday } = useGlobalContext();

    const validation = () => {
        setShowPlans(true);
    };

    useEffect(() => {
        planRef.current.scrollIntoView({
            behavior: "smooth"
        });
    }, [validation])

    return <div>
        <div>
            <h1 className={`${styles.vehicle_details} ${styles.flex}`}>Driver Details (You)</h1>

            <form className={styles.flex}>
                <label htmlFor="birthday">Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={state.dob}
                    onChange={(e) => handleBirthday(e)}
                    className={styles.form3}
                />
            </form>

            <div className={styles.flex}>
                <p>Gender:</p>
                <div className={styles.plans}>
                    <button onClick={() => toggleButton(1)} className={highlight === 1 ? `${styles.choose} ${styles.backgroundColor}` : `${styles.choose}`}>Male</button>
                    <button onClick={() => toggleButton(2)} className={highlight === 2 ? `${styles.choose}  ${styles.
                        backgroundColor}` : `${styles.choose}`}>Female</button>
                </div>
            </div>

            <div className={styles.flex}>
                <p>Do you have another Policy with Turners?:</p>
                <div className={styles.plans}>
                    <button onClick={() => toggleButton1(1)} className={highlight1 === 1 ? `${styles.choose} ${styles.backgroundColor}` : `${styles.choose}`}>Yes</button>
                    <button onClick={() => toggleButton1(2)} className={highlight1 === 2 ? `${styles.choose} ${styles.backgroundColor}` : `${styles.choose}`}>No</button>
                </div>
            </div>

            <form className={styles.flex}>
                <label className={styles.margin} htmlFor="cars">Choose a License:</label>
                <select className={styles.license} id="cars" name="cars">
                    <option value="learners">NZ Learners License</option>
                    <option value="restricted">NZ Restricted License</option>
                    <option value="full">NZ Full License</option>
                </select>
            </form>

            <div className={styles.flex}>
                <p>Add another Driver?:</p>
                <div className={styles.plans}>
                    <button onClick={() => toggleButton2(1)} className={highlight2 === 1 ? `${styles.choose} ${styles.
                        backgroundColor}` : `${styles.choose}`}>Yes</button>
                    <button onClick={() => toggleButton2(2)} className={highlight2 === 2 ? `${styles.choose}  ${styles.
                        backgroundColor}` : `${styles.choose}`}>No</button>
                </div>
            </div>
        </div>
        <div className={styles.arrow}>
            <AiOutlineArrowRight onClick={validation} />
        </div>
        <div ref={planRef}>
            {showPlans && <Plans />}
        </div>
    </div>
}

export default Driver