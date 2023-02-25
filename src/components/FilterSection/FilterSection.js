import React, { useState } from 'react';
import { useFilterContext } from '../../context/filterContext';
import { NumberFormat } from '../../utils/NumberFormat';
import Button from '../reusable/Button/Button';
import Category from './Category';
import Colors from './Colors';
import Company from './Company';
import styles from './FilterSection.module.css';

const FilterSection = () => {

    const {
        all_products,
        filters: { text, price, minPrice, maxPrice },
        searchFilter,
        categoryFilter,
        clearAllFilters
    } = useFilterContext();

    const [popup, setPopup] = useState(false);

    const [currentComp, setCurrentComp] = useState("All");

    const getCategories = (array, category) => {
        let catArray = array.map(el => {
            return el[category];
        })

        if (category === "colors") {
            catArray = catArray.flat();
        }

        return (catArray = ["All", ...new Set(catArray)]);

    }

    const productCategories = getCategories(all_products, "category");

    const productCompany = getCategories(all_products, "company");

    const productColors = getCategories(all_products, "colors");

    const [curClr, setCurClr] = useState(productColors[0]);

    const categoryProps = { productCategories, categoryFilter, setCurrentComp };

    const companyProps = { currentComp, popup, setPopup, productCompany, categoryFilter, setCurrentComp };

    const colorProps = { productColors, curClr, categoryFilter, setCurClr };

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

            <Category {...categoryProps} />

            <br />

            <Company {...companyProps} />

            <br />

            <Colors {...colorProps} />

            <br />

            <h3>Price</h3>
            <p><NumberFormat price={price} /></p>
            <input
                type="range"
                name="price"
                value={price}
                min={minPrice}
                max={maxPrice}
                onChange={searchFilter}
            />

            <div className={styles.clearBtn} onClick={clearAllFilters}>
                <Button>Clear Filters</Button>
            </div>
        </div>
    )
}

export default FilterSection