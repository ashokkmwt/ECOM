import React from 'react'
import { useFilterContext } from '../../context/filterContext';
import ListViewProduct from '../reusable/SingleProduct/ListViewProduct';
import SingleProduct from '../reusable/SingleProduct/SingleProduct';
import styles from './Products.module.css'

const Products = () => {
    const { gridView, filter_products } = useFilterContext();
    // console.log("1-1-1-1", filter_products);
    return (
        <div
            className={styles.gridContainer}
            style={{ display: gridView ? 'grid' : 'unset' }}
        >
            {filter_products.map((product, index) => {
                if (gridView) {
                    return (
                        <SingleProduct key={index} product={product} />
                    )
                }
                return (
                    <ListViewProduct key={index} product={product} />
                )
            })}
        </div>
    )
}

export default Products