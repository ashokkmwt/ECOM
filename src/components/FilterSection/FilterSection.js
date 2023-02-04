import React, { useState } from 'react';
import { BsCaretDown } from 'react-icons/bs';
import { useFilterContext } from '../../context/filterContext';
import styles from './FilterSection.module.css';

const FilterSection = () => {

    const { all_products, filters: { text }, searchFilter, categoryFilter } = useFilterContext();

    const [popup, setPopup] = useState(false);

    const [currentComp, setCurrentComp] = useState("All");

    const getCategories = (array, category) => {
        let catArray = array.map(el => {
            return el[category];
        })

        return (catArray = ["All", ...new Set(catArray)]);
    }

    const productCategories = getCategories(all_products, "category");

    const productCompany = getCategories(all_products, "company");

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
            {productCategories.map((p, i) => {
                const data = { product: p, category: "category" }
                return (
                    <p key={i} onClick={() => {
                        categoryFilter(data);
                        setCurrentComp("All");
                    }}>{p}</p>
                )
            })}
            <br />


            <h3>Company</h3>
            <div className={styles.form} >
                <span>{currentComp}</span>
                <BsCaretDown
                    size={18}
                    style={{
                        cursor: "pointer",
                        transform: popup && "rotate(180deg)"
                    }}
                    onClick={() => setPopup(!popup)}
                />
                {popup &&
                    <div className={styles.options}>
                        {productCompany.map((p, i) => {
                            const data = { product: p, category: "company" }
                            return (
                                <p key={i} onClick={() => {
                                    categoryFilter(data);
                                    setPopup(false);
                                    setCurrentComp(p);
                                }}>{p}</p>
                            )
                        })}
                    </div>
                }
            </div>

            <br />
            <h3>Colors</h3>
            <p>All <span>...</span></p>
            <br />
            <h3>Price</h3>
            <p>34984</p>
            {/* price bar */}
        </div>
    )
}

export default FilterSection