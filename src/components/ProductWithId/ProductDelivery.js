import React from 'react';
import { MdSecurity } from 'react-icons/md';
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import styles from './ProductWithId.module.css';

const ProductDelivery = () => {

    const icons = [
        { icon: TbTruckDelivery, desc: "Free Delivery" },
        { icon: TbReplace, desc: "30 Days Replacement" },
        { icon: TbTruckDelivery, desc: "Ak Delivered" },
        { icon: MdSecurity, desc: "Warranty" },
    ]

    return (
        <div className={styles.productDelivery}>

            {icons.map((element, index) => {
                return (
                    <div key={index} className={styles.iconsBox}>
                        <div className={styles.icons}>
                            <element.icon size={25} />
                        </div>
                        <p>{element.desc}</p>
                    </div>
                )
            })}




        </div>
    )
}

export default ProductDelivery