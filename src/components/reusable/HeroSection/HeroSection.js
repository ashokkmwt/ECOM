import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './HeroSection.module.css';

const HeroSection = ({ text }) => {
    return (
        <div className={styles.container}>
            <section>
                <p>Welcome To</p>
                <h1>{text}</h1><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                </p><br />
                <Button>
                    <NavLink to="/products">SHOP NOW</NavLink>
                </Button>
            </section>
            <section>
                <img width='100%' height='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYmgTt18RgI5Ldniu-h78oiF68lpUMXU8BA&usqp=CAU' alt='shop' />
            </section>
        </div>
    )
}

export default HeroSection