import React, { useState } from 'react'
import { BsCaretDown, BsGrid } from 'react-icons/bs'
import { TfiViewList } from 'react-icons/tfi'
import { useWindowSize } from 'react-use'
import { useFilterContext } from '../../context/filterContext'
import styles from './SortSection.module.css'

const SortSection = ({ filterPopup, setFilterPopup }) => {

    const [popup, setPopup] = useState(false);

    const [chosedOption, setChosedOption] = useState("");

    const { filter_products, gridView, setGridView, setListView, sortProduct } = useFilterContext();

    const { width } = useWindowSize();

    const setOption = (e) => {
        setChosedOption(e.target.innerHTML)
        sortProduct(e.target.innerHTML);
    }

    const showPopup = () => {
        if (width >= 768) {
            setPopup(!popup);
        } else {
            setFilterPopup(!filterPopup);
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.category}>

                <BsGrid size={24} onClick={setGridView} style={{ fill: !gridView && "gray" }} />

                <TfiViewList size={21} onClick={setListView} style={{ fill: gridView && "gray" }} />

            </div>

            {width > 770 && <p>{filter_products.length} Products Available</p>}

            <div className={styles.form} onClick={showPopup}>
                {width >= 768 ?
                    <span>Price{chosedOption && <span>-{chosedOption}</span>}</span> :
                    <span>Filter</span>
                }

                <BsCaretDown
                    size={18}
                    style={{ cursor: "pointer", transform: popup && "rotate(180deg)" }}
                />

                {popup &&
                    <div className={styles.options}>
                        <p onClick={setOption}>lowest</p>
                        <p onClick={setOption}>highest</p>
                        <p onClick={setOption}>a-z</p>
                        <p onClick={setOption}>z-a</p>
                    </div>
                }

            </div>
        </div>
    )
}

export default SortSection