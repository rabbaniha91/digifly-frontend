import React, { useCallback, useEffect, useRef } from 'react'
import styles from "./styles.module.css"
import { Link } from 'react-router-dom'
import useScreenSize from "../../../hooks/useScreenSize"
const PopularLaptopBrands = () => {
    const {isSM} = useScreenSize()

    return (
        <>
            <p className={styles.caption}>برترین برندها های لپ تاپ</p>

            <div className={styles.container}>
                <Link to={"/product/laptop/asus"}>
                    <div className={`${styles.card} ${isSM && styles.mobile_size} ${styles.iphone}`}>
                        <img src="/images/pictures/joshua-woroniecki-lzh3hPtJz9c-unsplash (1).jpg" alt="" />
                    </div>
                </Link>
                <Link to={"/product/laptop/apple"}>
                    <div className={`${styles.card} ${isSM && styles.mobile_size} ${styles.samsung}`}>
                        <img src="/images/pictures/joshua-woroniecki-lzh3hPtJz9c-unsplash (1).jpg" alt="" />
                    </div>
                </Link>
                <Link to={"/product/laptop/lenovo"}>
                    <div className={`${styles.card} ${isSM && styles.mobile_size} ${styles.xiaomi}`}>
                        <img src="/images/pictures/joshua-woroniecki-lzh3hPtJz9c-unsplash (1).jpg" alt="" />
                    </div>
                </Link>
                <Link to={"/product/laptop/acer"}>
                    <div className={`${styles.card} ${isSM && styles.mobile_size} ${styles.hoawi}`}>
                        <img src="/images/pictures/joshua-woroniecki-lzh3hPtJz9c-unsplash (1).jpg" alt="" />
                    </div>
                </Link>
                <Link to={"/product/laptop/msi"}>
                    <div className={`${styles.card} ${isSM && styles.mobile_size} ${styles.lg}`}>
                        <img src="/images/pictures/joshua-woroniecki-lzh3hPtJz9c-unsplash (1).jpg" alt="" />
                    </div>
                </Link>
            </div>
        </>
    )
}

export default PopularLaptopBrands