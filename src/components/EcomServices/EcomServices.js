import React from 'react'
import styles from './EcomServices.module.css'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { RiSecurePaymentLine } from 'react-icons/ri'

const EcomServices = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item1}>
                <div className={styles.icons}>
                    <TbTruckDelivery size={30} />
                </div>
                <p>Superfast and Free Delivery</p>
            </div>
            <div className={`${styles.item1} ${styles.item2}`}>
                <div className={styles.item3}>
                    <div className={styles.icons}>
                        <MdSecurity size={30} />
                    </div>
                    <p>Non-contact Shipping</p>
                </div>
                <div className={styles.item3}>
                    <div className={styles.icons}>
                        <GiReceiveMoney size={30} />
                    </div>
                    <p>Money-back Gurantee</p>
                </div>
            </div>
            <div className={styles.item1}>
                <div className={styles.icons}>
                    <RiSecurePaymentLine size={30} />
                </div>
                <p>Super Secure Payment System</p>
            </div>
        </div>
    )
}

export default EcomServices