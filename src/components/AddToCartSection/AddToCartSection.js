import React, { useState } from 'react'
import styles from './AddToCartSection.module.css'
import { BsCheck } from 'react-icons/bs'
import { TbMinus } from 'react-icons/tb';
import { BiPlus } from 'react-icons/bi';
import Button from '../reusable/Button/Button';
import { NavLink } from 'react-router-dom';

const AddToCartSection = ({ colors, stock }) => {
    const [color, setColor] = useState(colors?.[0]);
    const [amount, setAmount] = useState(1);
    const decrease = () => {
        amount > 1 && setAmount(amount - 1);
    }
    const increase = () => {
        amount < stock && setAmount(amount + 1);
    }
    return (
        <div className={styles.container}>
            <div className={styles.colorBar}>
                <span>Color :</span>
                {colors?.map((curClr, index) => {
                    return (
                        <button
                            key={index}
                            className={styles.color}
                            style={{ background: curClr, opacity: color === curClr ? 1 : 0.5 }}
                            onClick={() => setColor(curClr)}
                        > {color === curClr ? <BsCheck size={22} /> : null}</button>
                    )
                })}
            </div>
            <div className={styles.cartAmountSection}>
                <button onClick={decrease}><TbMinus size={20} /></button>
                <p>{amount}</p>
                <button onClick={increase}><BiPlus size={20} /></button>
            </div>
            <NavLink to="/cart" onClick={() => alert(amount)}>
                <Button>Add to Cart</Button>
            </NavLink>
        </div >
    )
}

export default AddToCartSection
