import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./NavBar.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
    return (
        <nav>
            <ul className={styles.navBar}>
                <li>
                    <NavLink to="/" className={styles.navlink}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={styles.navlink}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={styles.navlink}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={styles.navlink}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={`${styles.navlink} ${styles.cart}`}>
                        <FiShoppingCart className={styles.navlink} />
                        <p className={styles.cartItems}>10</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.navlink}>LogIn</NavLink>
                </li>
            </ul>
            <ul className={styles.menuIcon}>
                <GiHamburgerMenu size={25} />
            </ul>
        </nav>
    )
}

export default NavBar