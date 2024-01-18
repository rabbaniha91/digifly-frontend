import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css"

import styles from "./styles.module.css"
import { Link } from 'react-router-dom'
import useScreenSize from '../../../hooks/useScreenSize'

const SpecialAccess = () => {
    const {isSM} = useScreenSize()
    return (
        <div className={`${styles.container} ${isSM && styles.mobile_container}`}>
            <div>
                <Link >
                    <LazyLoadImage className={styles.image} src='/images/designed/one.png' />

                </Link>
            </div>
            <div>
                <Link >
                    <LazyLoadImage className={styles.image} src='/images/designed/two.png' />
                </Link>
            </div>
            <div>
                <Link >
                    <LazyLoadImage className={styles.image} src='/images/designed/three.png' />
                </Link>

            </div>

        </div>
    )
}

export default SpecialAccess