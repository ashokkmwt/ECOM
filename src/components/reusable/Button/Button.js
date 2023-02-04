import React from 'react'
import styles from './Button.module.css'

const Button = ({ children }) => {
    return (
        <button type="submit" className={styles.container}>
            {children}
        </button>
    )
}

export default Button