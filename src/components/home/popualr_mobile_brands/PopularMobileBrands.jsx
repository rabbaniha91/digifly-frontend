import React, { useCallback, useEffect, useRef } from 'react'
import styles from "./styles.module.css"
import { Link } from 'react-router-dom'
import useScreenSize from "../../../hooks/useScreenSize"
const PopularMobileBrands = () => {
const {isSM} = useScreenSize()
    return (
        <>
            <p className={styles.caption}>برترین برندها های موبایل</p>

            <div className={styles.container}>
                <Link to={"/product/mobile/iphone"}>
                    <div className={`${styles.card} ${isSM && styles.mobile_size} ${styles.iphone}`}>
                        <img src="/images/pictures/paolo-giubilato-ThK29bv1h24-unsplash.jpg" alt="" />
                    </div>
                </Link>
                <Link to={"/product/mobile/iphone"}>
                    <div className={`${styles.card} ${isSM && styles.mobile_size} ${styles.samsung}`}>
                        <img src="/images/pictures/thai-nguyen-tT6Wk-ROzSw-unsplash.jpg" alt="" />
                    </div>
                </Link>
                <Link to={"/product/mobile/iphone"}>
                    <div className={`${styles.card} ${isSM && styles.mobile_size} ${styles.xiaomi}`}>
                        <img src="/images/pictures/paolo-giubilato-ThK29bv1h24-unsplash.jpg" alt="" />
                    </div>
                </Link>
                <Link to={"/product/mobile/iphone"}>
                    <div className={`${styles.card} ${isSM && styles.mobile_size} ${styles.hoawi}`}>
                        <img src="/images/pictures/paolo-giubilato-ThK29bv1h24-unsplash.jpg" alt="" />
                    </div>
                </Link>
                <Link to={"/product/mobile/iphone"}>
                    <div className={`${styles.card} ${isSM && styles.mobile_size} ${styles.lg}`}>
                        <img src="/images/pictures/paolo-giubilato-ThK29bv1h24-unsplash.jpg" alt="" />
                    </div>
                </Link>
            </div>
        </>
    )
}

export default PopularMobileBrands