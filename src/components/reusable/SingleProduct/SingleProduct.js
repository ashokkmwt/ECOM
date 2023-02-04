import React from 'react'
import { NavLink } from 'react-router-dom';
import { NumberFormat } from '../../../utils/NumberFormat';
import styles from './SingleProduct.module.css'

const SingleProduct = ({ product }) => {
    const { id, image, name, price } = product;
    return (
        <NavLink
            to={`/singleProduct/${id}`}
            className={styles.container}
        >
            <div className={styles.imgSection}>
                <img width='100%' height='100%' src={image} alt={name} />
            </div>
            <div className={styles.priceSection}>
                <p>{name}</p>
                <NumberFormat price={price} />
            </div>
        </NavLink>
    )
}

export default SingleProduct