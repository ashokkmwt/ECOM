import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import FeatureProducts from '../components/FeatureProducts/FeatureProducts'
import HeroSection from '../components/reusable/HeroSection/HeroSection'
import EcomServices from '../components/EcomServices/EcomServices'
import Trusted from '../components/Trusted/Trusted'
import styles from './Page.module.css'
import Contact from '../components/Contact/Contact'

const HomePage = () => {
    const { isLoading } = useAuth0();
    return (
        <div className={styles.homeContainer}>
            {isLoading && <h2>Loading</h2>}
            <HeroSection text={"devAK-ECOM"} />
            <FeatureProducts />
            <EcomServices />
            <Trusted />
            <Contact />
        </div>
    )
}

export default HomePage