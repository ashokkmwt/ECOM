import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useProductContext } from '../../context/productContext';
import { NumberFormat } from '../../utils/NumberFormat';
import AddToCartSection from '../AddToCartSection/AddToCartSection';
import StarRating from '../StarRating/StarRating';
import ProductDelivery from './ProductDelivery';
import styles from './ProductWithId.module.css'

const ProductWithId = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const { singleProduct, isSingleLoading } = useProductContext();

    const { id, name, company, description, image, price, reviews, stars, stock, colors } = singleProduct;

    if (isSingleLoading) {
        return <h1 className={styles.loading}>Loading...</h1>
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>
                <NavLink to='/' className={styles.home}>Home/</NavLink>{name}</p>
            <div className={styles.productSection}>
                <section className={styles.leftSection}>
                    <div className={styles.imageBox}>
                        {image?.map((image, index) => {
                            return (
                                <div
                                    key={image.id}
                                    className={styles.image}
                                    onClick={() => setCurrentImage(index)}
                                >
                                    <img width='100%' height='100%' src={image.url} alt={image.filename} />
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.currentImage}>
                        <img width="100%" height="100%" src={image?.[currentImage].url} alt={image?.[currentImage].filename} />

                    </div>
                </section>


                <section className={styles.rightSection} >
                    <p className={styles.name}>{name}</p>
                    <p className={styles.stars}><StarRating stars={stars} />({stars} ratings) & {reviews} reviews</p>
                    <p>MRP: <span className={styles.delete}><NumberFormat price={price} /></span></p>
                    <p className={styles.deal}>Deal of the Day: <NumberFormat price={price * 9 / 10} /></p>
                    <p className={styles.description}>{description}</p>

                    <ProductDelivery />

                    <p>Available:
                        <span>{stock > 0 ? " In Stock" : "Not Available"}</span>
                    </p>
                    <p>ID: <span>{id}</span></p>
                    <p>Brand: <span>{company}</span></p>
                    <hr />
                    <AddToCartSection singleProduct={singleProduct} id={id} colors={colors} stock={stock} />
                </section >
            </div >
        </div >
    )
}

export default ProductWithId