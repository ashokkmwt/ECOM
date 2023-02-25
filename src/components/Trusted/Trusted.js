import React from 'react'
import styles from './Trusted.module.css'
import Lux from '../../assets/lux.png'
import Maggie from '../../assets/maggie.png'
import Oreo from '../../assets/oreo.jpeg'
import ParleG from '../../assets/parle-g.jpeg'
import Samsung from '../../assets/samsung.jpeg'

const Trusted = () => {

    const logos = [
        { logo: Lux, alternative: "Lux" },
        { logo: Maggie, alternative: "Maggie" },
        { logo: Oreo, alternative: "Oreo" },
        { logo: ParleG, alternative: "ParleG" },
        { logo: Samsung, alternative: "Samsung" }
    ]

    return (
        <div className={styles.container}>
            <p>Trusted By 1000+ Companies</p>
            <div className={styles.companyLogos}>
                {logos.map((element, index) => {
                    return (
                        <div key={index} className={styles.logo}>
                            <img width="100%" height="100%" src={element.logo} alt={element.alternative} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Trusted