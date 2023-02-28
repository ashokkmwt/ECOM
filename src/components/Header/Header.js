import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import styles from './Header.module.css';

const Header = () => {
    const [popup, setPopup] = useState(false);
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
        <header>
            <NavLink to="/" className={styles.logo}>devAK-ECOM</NavLink>
            <NavBar setPopup={setPopup} />

            {popup &&
                <div className={styles.popupContainer}>
                    <p className={styles.closeBtn} onClick={() => setPopup(false)}>X</p>
                    <NavLink to="/">
                        <p onClick={() => setPopup(false)}>Home</p>
                    </NavLink>
                    <NavLink to="/about">
                        <p onClick={() => setPopup(false)}>About</p>
                    </NavLink>
                    <NavLink to="/products">
                        <p onClick={() => setPopup(false)}>Products</p>
                    </NavLink>
                    <NavLink to="/contact">
                        <p onClick={() => setPopup(false)}>Contact</p>
                    </NavLink>
                    <NavLink to={"/cart"}>
                        <p onClick={() => setPopup(false)}>Cart</p>
                    </NavLink>
                    {isAuthenticated ?
                        <>
                            <p onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</p>
                            <p className={styles.userName}>{user.name}</p>
                        </>
                        :
                        <p onClick={() => loginWithRedirect()}>Log In</p>
                    }

                </div>
            }
        </header>
    )
}

export default Header