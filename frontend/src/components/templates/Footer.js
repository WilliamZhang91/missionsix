import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { BiNews } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <div className={styles.layout}>
                <div className={styles.section}>
                    <div>
                        <h1>Cars</h1>
                        <div>
                            <p>How to Buy</p>
                            <p>Sell Your Car</p>
                            <p>Auctions and Events</p>
                        </div>
                    </div>
                    <div>
                        <h1>Insurance</h1>
                        <div>
                            <p>Car Insurance</p>
                            <p>Mechanical Breakdown Insurance</p>
                            <p>Get a quote</p>
                        </div>
                    </div>
                    <div>
                        <h1>Finance</h1>
                        <div>
                            <p>Cars</p>
                            <p>Other Vehicles</p>
                        </div>
                    </div>
                    <div>
                        <h1>About Us</h1>
                        <div>
                            <p>Overview</p>
                            <p>Turners Careers</p>
                            <p>Terms and Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Turners Live</p>
                            <p>The Good Oil Blog</p>
                            <Link to="/contact" className={styles.link}><p>Contact Us</p></Link>
                        </div>
                    </div>
                    <div className={styles.segment}>
                        <div className={styles.icons}>
                            <ImHome className={styles.icon} />
                            <div>Branch Details</div>
                        </div>
                        <div className={styles.icons}>
                            <ImFacebook2 className={styles.icon} />
                            <div>Facebook</div>
                        </div>
                        <div className={styles.icons}>
                            <BiNews className={styles.icon} />
                            <div>Newsletter</div>
                        </div>
                        <div className={styles.icons}>
                            <MdEmail className={styles.icon} />
                            <div>Branch Details</div>
                        </div>
                        <div className={styles.icons}>
                            <AiFillInstagram className={styles.icon} />
                            <div>Instagram</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom_line}></div>
        </div>
    )
}

export default Footer