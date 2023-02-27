import React from 'react'
import { BsCheck } from 'react-icons/bs';
import styles from './FilterSection.module.css';

const Colors = ({ productColors, curClr, categoryFilter, setCurClr, setFilterPopup }) => {
    return (
        <div className={styles.colors}>
            <h3>Colors</h3>
            <div className={styles.colorBar}>

                {productColors.map((color, index) => {
                    const data = { product: color, category: "colors" };
                    return (
                        <div
                            key={index}
                            style={{ background: color, opacity: color === curClr ? 1 : 0.5 }}
                            className={styles.singleColor}
                            onClick={() => {
                                categoryFilter(data);
                                setCurClr(color);
                                setFilterPopup(false);
                            }}
                        >
                            {color === "All" && color}
                            {(color === curClr && color !== "All") ? <BsCheck size={22} /> : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Colors