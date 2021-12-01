import PersonalDetails from "./personal_details/PersonalDetails"
import styles from "./Apply.module.css"

const Apply = () => {
    return <div>
        <div className={styles.apply}>
            <PersonalDetails />
        </div>
    </div>
}

export default Apply