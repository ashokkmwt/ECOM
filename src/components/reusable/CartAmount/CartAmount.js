import React from 'react'
import { BiPlus } from 'react-icons/bi';
import { TbMinus } from 'react-icons/tb';
import styles from './CartAmount.module.css'

const CartAmount = ({ amount, setAmount, stock }) => {

    const decrease = () => {
        amount > 1 && setAmount(amount - 1);
    }

    const increase = () => {
        amount < stock && setAmount(amount + 1);
    }

    return (
        <div className={styles.cartAmountSection}>
            <button onClick={decrease}><TbMinus size={20} /></button>
            <p>{amount}</p>
            <button onClick={increase}><BiPlus size={20} /></button>
        </div>
    )
}

export default CartAmount