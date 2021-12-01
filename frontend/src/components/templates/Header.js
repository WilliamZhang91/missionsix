import styles from "./Header.module.css";
import { BsSearch } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Header = () => {
    return <div>
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="logo.png" />
            </div>
            <div className={styles.account}>
                <p className={styles.login}>Log In</p>
                <p className={styles.join}>Join</p>
                <p><BsSearch /></p>
            </div>
        </div>
        <div className={styles.nav}>
            <p className={styles.links}>Buy a Car</p>
            <p className={styles.links}>Sell your Car</p>
            <Link to="/quote"><p className={styles.links}>Finance</p></Link>
            <p className={styles.links}>Insurance</p>
            <p className={styles.links}>FAQ</p>
        </div>
    </div>
}

export default Header