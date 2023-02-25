import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { TbMinus } from 'react-icons/tb';
import { NumberFormat } from '../../utils/NumberFormat';
import styles from './CartItems.module.css';

const CartItems = ({ id, name, color, price, amount, image, stock, removeCartItem, increaseAmount, decreaseAmount }) => {
    return (
        <div key={id} className={styles.itemsChart}>
            <div className={`${styles.itemCol} ${styles.item1}`}>
                <div className={styles.itemImg}>
                    <img width='100%' height='100%' src={image} alt={name} />
                </div>
                <div className={styles.detail}>
                    <p>Name: {name}</p>
                    <span className={styles.colorBox}>Color:
                        <span style={{ background: color }} className={styles.itemClr}></span>
                    </span>
                </div>
            </div>
            <div className={styles.itemCol}>
                <NumberFormat price={price} />
            </div>

            <div className={`${styles.itemCol} ${styles.item2}`}>
                <button className={styles.btn} onClick={() => decreaseAmount(id)}><TbMinus size={20} /></button>
                <p>{amount}</p>
                <button className={styles.btn} onClick={() => increaseAmount(id)}><BiPlus size={20} /></button>
            </div>

            <div className={styles.itemCol}>
                <NumberFormat price={amount * price} />
            </div>
            <div className={styles.itemCol}>
                <div className={styles.remove}>
                    <MdDelete size={24} style={{ fill: 'red' }} onClick={() => removeCartItem(id)} />
                </div>
            </div>


        </div>
    )
}

export default CartItems;