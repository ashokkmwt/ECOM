import React from 'react'
import styles from './Trusted.module.css'
import Lux from '../../assets/lux.png'
import Maggie from '../../assets/maggie.png'
import Oreo from '../../assets/oreo.jpeg'
import ParleG from '../../assets/parle-g.jpeg'
import Samsung from '../../assets/samsung.jpeg'

const Trusted = () => {
    return (
        <div className={styles.container}>
            <p>Trusted By 1000+ Companies</p>
            <div className={styles.companyLogos}>
                <div className={styles.logo}>
                    <img width="100%" height="100%" src={Lux} alt="Lux" />
                </div>
                <div className={styles.logo}>
                    <img width="100%" height="100%" src={Maggie} alt="Maggie" />
                </div>
                <div className={styles.logo}>
                    <img width="100%" height="100%" src={Oreo} alt="Oreo" />
                </div>
                <div className={styles.logo}>
                    <img width="100%" height="100%" src={ParleG} alt="ParleG" />
                </div>
                <div className={styles.logo}>
                    <img width="100%" height="100%" src={Samsung} alt="Samsung" />
                </div>
            </div>
        </div>
    )
}

export default Trusted