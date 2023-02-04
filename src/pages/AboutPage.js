import React from 'react'
import HeroSection from '../components/reusable/HeroSection/HeroSection'
import styles from './Page.module.css'

const AboutPage = () => {
    return (
        <div className={styles.homeContainer}>
            <HeroSection text={"E-SHOP"} />
        </div>
    )
}

export default AboutPage