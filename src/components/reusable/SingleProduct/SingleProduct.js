import React from 'react'
import { NavLink } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import { useProductContext } from '../../../context/productContext';
import { NumberFormat } from '../../../utils/NumberFormat';
import styles from './SingleProduct.module.css'

const SingleProduct = ({ product }) => {

    const { getSingleProduct } = useProductContext();

    const { id, image, name, price } = product;

    const { width } = useWindowSize();

    return (
        <NavLink
            to={`/singleProduct/${id}`}
            className={styles.container}
            onClick={() => getSingleProduct(id)}
            style={{ maxWidth: width >= 768 && "250px" }}
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