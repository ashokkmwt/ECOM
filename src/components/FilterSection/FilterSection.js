import React from 'react';
import { useFilterContext } from '../../context/filterContext';
import styles from './FilterSection.module.css';

const FilterSection = () => {
    const { filters: { text }, searchFilter } = useFilterContext();
    return (
        <div className={styles.container}>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    name="text"
                    value={text}
                    placeholder="Search"
                    onChange={searchFilter}
                />
            </form>
            <h3>Category</h3>
            <p>All</p>
            <p>Mobile</p>
            <p>Laptop</p>
            <p>Computer</p>
            <p>Accessories</p>
            <p>Watch</p>
            <h3>Company</h3>
            <button>All \/</button>
            <h3>Colors</h3>
            <p>All <span>...</span></p>
            <h3>Price</h3>
            <p>34984</p>
            {/* price bar */}
        </div>
    )
}

export default FilterSection