import React from 'react'
import { NavLink } from 'react-router-dom'
import { NumberFormat } from '../../../utils/NumberFormat';
import styles from './SingleProduct.module.css'
import Button from '../Button/Button'
import { useWindowSize } from 'react-use';

const ListViewProduct = ({ product }) => {
    const { id, image, name, price, description } = product;
    const { width } = useWindowSize();
    return (
        <div className={styles.listContainer}>
            <div className={styles.listImgSection}>
                <img width='100%' height='100%' src={image} alt={name} />
            </div>
            <div className={styles.listPriceSection}>
                <p>{name}</p>
                <NumberFormat price={price} />

                {width >= 768 ?
                    <p className={styles.price}>{description.slice(0, 120)}...</p> :
                    <p className={styles.price}>{description.slice(0, 25)}...</p>
                }
                <NavLink to={`/singleProduct/${id}`}>
                    <Button>Read More</Button>
                </NavLink>
            </div>
        </div>
    )
}

export default ListViewProduct