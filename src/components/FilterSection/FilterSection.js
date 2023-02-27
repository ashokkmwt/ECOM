import React, { useState } from 'react';
import { useFilterContext } from '../../context/filterContext';
import { NumberFormat } from '../../utils/NumberFormat';
import Button from '../reusable/Button/Button';
import Category from './Category';
import Colors from './Colors';
import Company from './Company';
import styles from './FilterSection.module.css';

const FilterSection = ({ filterPopup, setFilterPopup }) => {

    const {
        all_products,
        filters: { text, price, minPrice, maxPrice },
        searchFilter,
        categoryFilter,
        clearAllFilters,
        sortProduct
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

    const categoryProps = { productCategories, categoryFilter, setCurrentComp, setFilterPopup };

    const companyProps = { currentComp, popup, setPopup, productCompany, categoryFilter, setCurrentComp, setFilterPopup };

    const colorProps = { productColors, curClr, categoryFilter, setCurClr, setFilterPopup };

    const clearFilters = () => {
        setFilterPopup(false);
        clearAllFilters();
    }

    const setOption = (e) => {
        sortProduct(e.target.innerHTML);
        setFilterPopup(false);
    }

    return (
        <div className={styles.container}>

            <p
                className={styles.closeBtn}
                onClick={() => setFilterPopup(false)}
            >X</p>

            <form className={styles.filterWithSearch} onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    name="text"
                    value={text}
                    placeholder="Search"
                    onChange={searchFilter}
                />
            </form>

            {/* working here */}
            <div className={styles.options}>
                <h3 className={styles.heading}>Price</h3>
                <p onClick={setOption}>lowest</p>
                <p onClick={setOption}>highest</p>
                <p onClick={setOption}>a-z</p>
                <p onClick={setOption}>z-a</p>
            </div>
            <hr />

            <Category {...categoryProps} />
            <hr />

            <Company {...companyProps} />

            <Colors {...colorProps} />

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

            {filterPopup &&
                <>
                    <div onClick={() => setFilterPopup(false)}>
                        <Button>Search with Price</Button>
                    </div>
                </>
            }

            <div className={styles.clearBtn} onClick={clearFilters}>
                <Button>Clear Filters</Button>
            </div>
        </div>
    )
}

export default FilterSection