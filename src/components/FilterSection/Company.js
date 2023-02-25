import React from 'react'
import { BsCaretDown } from 'react-icons/bs'
import styles from './FilterSection.module.css';

const Company = ({ currentComp, popup, setPopup, productCompany, categoryFilter, setCurrentComp }) => {
    return (
        <>
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
        </>
    )
}

export default Company