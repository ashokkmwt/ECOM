import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header>
            <NavLink to="/" className={styles.logo}>devAK-ECOM</NavLink>
            <NavBar />
        </header>
    )
}

export default Header