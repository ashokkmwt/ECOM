import React, { useState } from 'react'
import { useWindowSize } from 'react-use'
import FilterSection from '../components/FilterSection/FilterSection'
import Products from '../components/Products/Products'
import SortSection from '../components/SortSection/SortSection'
import styles from './Page.module.css'

const ProductsPage = () => {
    const { width } = useWindowSize();
    const [filterPopup, setFilterPopup] = useState(false);
    return (
        <div style={{ display: 'flex' }}>
            {(width >= 768 || filterPopup) &&
                <FilterSection filterPopup={filterPopup} setFilterPopup={setFilterPopup} />
            }
            <section className={styles.productsContainer}>
                <SortSection filterPopup={filterPopup} setFilterPopup={setFilterPopup} />
                <Products />
            </section>
        </div>
    )
}

export default ProductsPage