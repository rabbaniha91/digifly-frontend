import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.css"
import useScreenSize from '../../../hooks/useScreenSize'


const AccessibleItems = ({ image, title, route }) => {
    const { isMaxMD } = useScreenSize()
    return (
        <div>
            <Link className={`${styles.link}`} to={`/product/${route}`}>
                <div className={`${isMaxMD ? `${styles.mobile}` : `${styles.desktop}`} ${styles.image}`}>
                    <img src={`/images/pictures/${image}`} alt="" />
                </div>
                <p className={styles.title}>{title}</p>
            </Link>

        </div>
    )
}

export default AccessibleItems