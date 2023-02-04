import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/reusable/Button/Button'
import styles from './Page.module.css'

const Error = () => {
    return (
        <div className={styles.errorContainer}>
            <h1>404</h1>
            <p>You are lost.</p>
            <Button>
                <NavLink to="/">Go To Home</NavLink>
            </Button>
        </div>
    )
}

export default Error