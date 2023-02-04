import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../reusable/Button/Button'
import styles from './Footer.module.css'
import { SlSocialLinkedin } from 'react-icons/sl'
import { AiFillGithub } from 'react-icons/ai'
import { FiYoutube } from 'react-icons/fi'
import { useWindowSize } from 'react-use'

const Footer = () => {
    const { width } = useWindowSize();
    return (
        <div className={styles.container}>
            <footer>
                <div className={styles.getStarted}>
                    <div>
                        <p>Ready To Get Started?</p>
                        <p>Talk To Us Today.</p>
                    </div>
                    <Button>
                        <NavLink to="/contact">GET STARTED</NavLink>
                    </Button>
                </div>

                <div className={styles.section}>
                    <p className={styles.logo}>devAK-ECOM</p>
                    {width >= 768 && <p>lorem sdk ksdie dsifoe sdfjskdjfowekjfeai</p>}
                </div>
                <div className={styles.section}>
                    {width >= 768 ? <>
                        <p>Subscribe To Get</p>
                        <p>Important Updates</p>
                    </> : <p>Subscribe To Get Important Updates</p>}
                    <Button>
                        <NavLink>SUBSCRIBE</NavLink>
                    </Button>
                </div>
                <div className={styles.section}>
                    <p>Follow us</p>
                    <div className={styles.iconsBar}>
                        <div className={styles.icon}>
                            <a href="https://www.linkedin.com/in/devashok/" target='_blank' rel="noreferrer">
                                <SlSocialLinkedin size={16} />
                            </a>
                        </div>
                        <div className={styles.icon}>
                            <a href="https://github.com/ashokkmwt" target='_blank' rel="noreferrer">
                                <AiFillGithub size={16} />
                            </a>
                        </div>
                        <div className={styles.icon}>
                            <a href="https://www.youtube.com/channel/UCE7EdV7BqofiPWoS33xW0tQ" target='_blank' rel="noreferrer">
                                <FiYoutube size={16} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <p>Call us</p>
                    <a href="tel: +91 9521719607">+91 9521719607</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer