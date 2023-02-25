import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import FeatureProducts from '../components/FeatureProducts/FeatureProducts'
import HeroSection from '../components/reusable/HeroSection/HeroSection'
import Services from '../components/Services/Services'
import Trusted from '../components/Trusted/Trusted'
import ContactPage from './ContactPage'
import styles from './Page.module.css'

const HomePage = () => {
    const { isLoading } = useAuth0();
    return (
        <div className={styles.homeContainer}>
            {isLoading && <h2>Loading</h2>}
            <HeroSection text={"devAK-ECOM"} />
            <FeatureProducts />
            <Services />
            <Trusted />
            <ContactPage />
        </div>
    )
}

export default HomePage