import React from 'react';
import Button from '../reusable/Button/Button';
import styles from './CartSection.module.css';
import { useCartContex } from '../../context/cartContext';
import { NumberFormat } from '../../utils/NumberFormat';
import { TbMinus } from 'react-icons/tb';
import { BiPlus } from 'react-icons/bi';
import CartItems from '../CartItems/CartItems';
import { NavLink } from 'react-router-dom';

const CartSection = () => {

    const { total_price, shipping_fee, cart, removeCartItem, clearCart, increaseAmount, decreaseAmount } = useCartContex();

    if (cart.length === 0) {
        return <h4 className={styles.error}>Nothing added to cart yet.</h4>
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.itemsChart} ${styles.hideRow}`}>
                <div className={styles.itemCol}>Item</div>
                <div className={styles.itemCol}>Price</div>
                <div className={styles.itemCol}>Quantity</div>
                <div className={styles.itemCol}>Subtotal</div>
                <div className={styles.itemCol}>Remove</div>
            </div>
            <hr />

            {cart.map(item => {
                const { id, name, color, price, amount, image, stock } = item;
                const obj = { id, name, color, price, amount, image, stock, removeCartItem, increaseAmount, decreaseAmount }
                return (
                    <React.Fragment key={id}>

                        <CartItems{...obj} />

                        <div className={styles.resChart}>
                            <div className={`${styles.children} ${styles.image}`}>
                                <img width='100%' height='100%' src={image} alt={name} />
                            </div>
                            <div className={styles.children}>
                                <p>Name: {name}</p>
                            </div>
                            <div className={styles.children}>Price: <NumberFormat price={price} /></div>
                            <div className={styles.children}>
                                <button className={styles.btn} onClick={() => decreaseAmount(id)}><TbMinus size={20} /></button>
                                <p>{amount}</p>
                                <button className={styles.btn} onClick={() => increaseAmount(id)}><BiPlus size={20} /></button>
                            </div>
                            <div className={styles.children}></div>
                            <div className={styles.children}>
                                Subtotal: <NumberFormat price={amount * price} />
                            </div>
                            <div className={styles.children}>
                                <button className={styles.removebtn} onClick={() => removeCartItem(id)}>Remove from cart</button>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
            <hr />

            <div className={styles.buttonBar}>
                <NavLink to={"/products"}>
                    <Button>CONTINUE SHOPPING</Button>
                </NavLink>
                <div onClick={clearCart}>
                    <Button>CLEAR CART</Button>
                </div>
            </div>

            <div className={styles.totalCart}>
                <div className={styles.total}>
                    <p>Subtotal: <span>
                        <NumberFormat price={total_price} />
                    </span></p>
                    <p>Shipping Fee: <span>
                        <NumberFormat price={shipping_fee} />
                    </span></p>
                    <hr />
                    <p>Order Total: <span>
                        <NumberFormat price={total_price + shipping_fee} />
                    </span></p>
                </div>
            </div>
        </div>
    )
}

export default CartSection
