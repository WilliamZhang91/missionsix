import styles from "./Summary.module.css";
import { useGlobalContext } from "../store/context";

const Summary = () => {

    const state = useGlobalContext();
    const { submitDetails } = useGlobalContext()
    //console.log(submitDetails)

    return <div>

        <form onSubmit={submitDetails}>

            <div>
                <h1 className={styles.title}>Quote Summary</h1>
            </div>

            <div className={styles.summaryDetails}>
                <p>Driver Name:</p>

                <p name="first_name" className={styles.marginName}>{state.first_name}</p>
                <p name="surname" className={styles.marginName}>{state.surname}</p>

            </div>

            <div className={styles.summaryDetails}>
                <p>Registration:</p>
                <p name="registration" className={styles.marginVehicle}>{state.registration}</p>
            </div>

            <div className={styles.summaryDetails}>
                <p>Email:</p>
                <p name="phone" className={styles.marginEmail}>{state.email}</p>
            </div>

            <div className={styles.summaryDetails}>
                <p>Phone:</p>
                <p name="email" className={styles.marginEmail}>{state.phone}</p>
            </div>

            <div className={styles.summaryDetails}>
                <p>Address:</p>
                <p name="address" className={styles.marginEmail}>{state.address}</p>
            </div>

            <div className={styles.summaryDetails}>
                <p>Plan:</p>
                <p name="plan" className={styles.marginPlan}>{state.plan}</p>
            </div>

            <div className={styles.summaryDetails}>
                <p>Price:</p>
                <p className={styles.marginPrice}>$30.50</p>
            </div>


            <span>
                <button>Modify Details</button>
                <button type="submit">Process Payment</button>
            </span>
        </form>

    </div>
}

export default Summary