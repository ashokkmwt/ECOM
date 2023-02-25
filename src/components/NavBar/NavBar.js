import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./NavBar.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCartContex } from '../../context/cartContext';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
    const { total_items } = useCartContex();
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
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
                        <p className={styles.cartItems}>{total_items}</p>
                    </NavLink>
                </li>

                {isAuthenticated && <li><p>{user.name}</p></li>}

                {isAuthenticated ?
                    <li>
                        <button className={styles.loginBtn} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>
                    </li>
                    :
                    <li>
                        <button className={styles.loginBtn} onClick={() => loginWithRedirect()}>Log In</button>
                    </li>
                }

            </ul>
            <ul className={styles.menuIcon}>
                <GiHamburgerMenu size={25} />
            </ul>
        </nav>
    )
}

export default NavBar