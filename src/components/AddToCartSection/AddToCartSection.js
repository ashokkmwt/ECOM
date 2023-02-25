import React, { useState } from 'react'
import styles from './AddToCartSection.module.css'
import { BsCheck } from 'react-icons/bs'
import Button from '../reusable/Button/Button';
import { NavLink } from 'react-router-dom';
import { useCartContex } from '../../context/cartContext';
import CartAmount from '../reusable/CartAmount/CartAmount';

const AddToCartSection = ({ singleProduct, id, colors, stock }) => {

    const { goToCart } = useCartContex();
    const [color, setColor] = useState(colors?.[0]);
    const [amount, setAmount] = useState(1);

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

            <CartAmount amount={amount} setAmount={setAmount} stock={stock} />

            <NavLink to="/cart" onClick={() => goToCart(singleProduct, amount, id, color)}>
                <Button>Add to Cart</Button>
            </NavLink>
        </div >
    )
}

export default AddToCartSection
