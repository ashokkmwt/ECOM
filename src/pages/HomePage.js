import React from 'react'
import FeatureProducts from '../components/FeatureProducts/FeatureProducts'
import HeroSection from '../components/reusable/HeroSection/HeroSection'
import Services from '../components/Services/Services'
import Trusted from '../components/Trusted/Trusted'
import ContactPage from './ContactPage'
import styles from './Page.module.css'

// make contact component render it inside contactPage

const HomePage = () => {
    return (
        <div className={styles.homeContainer}>
            <HeroSection text={"devAK-ECOM"} />
            <FeatureProducts />
            <Services />
            <Trusted />
            <ContactPage />
        </div>
    )
}

export default HomePage