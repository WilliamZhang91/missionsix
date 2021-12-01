import styles from "./Contact.module.css";
import React, { useState } from "react";
import Axios from "axios";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const getName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }

    const getEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const getMessage = (e) => {
        setMessage(e.target.value)
        console.log(e.target.value)
    }

    const submitContact = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:4000/contacts", {
            name: name,
            email: email,
            message: message
        });
        console.log("submitted")
    }

    return <div className={styles.layout}>
        <div className={styles.inner_layout}>

            <div>
                <h1>Contact Us</h1>
            </div>

            <form onSubmit={submitContact}>

                <div>
                    <input
                        className={styles.details}
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={getName}
                        required
                    />
                </div>

                <div>
                    <input
                        className={styles.details}
                        type="text"
                        placeholder="Email"
                        name="email" 
                        onChange={getEmail}
                        required
                        />
                </div>

                <div>
                    <textarea
                        className={styles.message}
                        type="text"
                        name="message"
                        width="200"
                        placeholder="Your Message..."
                        onChange={getMessage}
                        required
                    />
                </div>

                <div>
                    <button className={styles.button} type="submit">SUBMIT</button>
                </div>

            </form>



        </div>


    </div>
}

export default Contact