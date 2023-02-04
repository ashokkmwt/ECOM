import React from 'react'
import { useProductContext } from '../../context/productContext'
import SingleProduct from '../reusable/SingleProduct/SingleProduct'
import styles from './FeatureProducts.module.css'

const FeatureProducts = () => {
    const { featureProducts, isLoading } = useProductContext();
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className={styles.container}>
            <p>CHECK NOW</p>
            <h2>OUR FEATURE SERVICES</h2>
            <div className={styles.product}>
                {featureProducts.map((product) => {
                    return <SingleProduct key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export default FeatureProducts