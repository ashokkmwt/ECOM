import React from 'react'
import FilterSection from '../components/FilterSection/FilterSection'
import Products from '../components/Products/Products'
import SortSection from '../components/SortSection/SortSection'
import styles from './Page.module.css'

const ProductsPage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <FilterSection />
            <section className={styles.productsContainer}>
                <SortSection />
                <Products />
            </section>
        </div>
    )
}

export default ProductsPage