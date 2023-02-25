import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useWindowSize } from 'react-use';
import styles from './Contact.module.css';
import Button from '../reusable/Button/Button';

const Contact = () => {

    const { width } = useWindowSize();
    const { user, isAuthenticated } = useAuth0();

    return (
        <div className={styles.contactContainer}>
            <p className={styles.contact}>Feel Free To Contact Us</p>
            <div className={styles.contactSection}>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2072.602867766017!2d74.61661477220864!3d25.33740694280322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c23ed2bf2311%3A0x7950f128f3bb606b!2sPratap%20Nagar%2C%20Bhilwara%2C%20Rajasthan%20311001!5e0!3m2!1sen!2sin!4v1674543570381!5m2!1sen!2sin"
                    width="100%"
                    height={width <= 768 ? '200' : '400'}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <form
                    action="https://formspree.io/f/mgebvjov"
                    method="POST"
                >
                    <input
                        className={styles.input}
                        type="text"
                        name="User Name"
                        placeholder='User Name'
                        value={isAuthenticated ? user.given_name : ""}
                        readOnly
                    />
                    <input
                        className={styles.input}
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={isAuthenticated ? user.email : ""}
                        readOnly
                    />
                    <textarea
                        className={styles.textarea}
                        placeholder='Type your message'
                        name="message">
                    </textarea>
                    <div className={styles.sendBtn}>
                        <Button>SEND</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact