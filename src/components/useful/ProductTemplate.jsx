import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from "./product_template.module.css"
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from 'react-router-dom';
import useScreenSize from '../../hooks/useScreenSize';
import { toPersianDigits } from '../utilities/utilities';
import Timer from './TImer';

const ProductTemplate = ({ offer, title, cover, price, id, timer }) => {
    const { isSM } = useScreenSize()
    const [intPrice, setIntPrice] = useState("")
    const [discount, setDiscount] = useState("")


    useEffect(() => {
        setIntPrice(price.split(",").join(""))
        setDiscount((100 - offer) / 100)
    }, [])
    return (
        <div className={styles.super}>
            {timer && (
                <div className={styles.timer}>
                    <Timer time={timer} />
                </div>
            )}
            <div
                className={`${styles.container} ${isSM && styles.mobile}`}
            >
                <Link to={`/product/${id}/${title}`} className={styles.link}>

                    <LazyLoadImage
                        src={`/images/removedbg/${cover}`}
                        effect="blur"
                        alt=""
                        className={`${styles.image} ${styles.image_mobile}`}
                    />

                    <p className={styles.title}>{title}</p>

                    <div className={`${styles.price_container} ${isSM && styles.mobile_price_container}`}>
                        {offer !== 0 && (
                            <>
                                <div className={styles.discount}>
                                    <span
                                        className={styles.presentage}
                                    >{`${toPersianDigits(offer.toString())}%`}</span>
                                    <span className={styles.discount_price}>
                                        {toPersianDigits(
                                            (intPrice * discount)
                                                .toString()
                                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                        )}
                                        تومان
                                    </span>

                                </div>
                            </>
                        )}
                        <span
                            style={{ textAlign: "center" }}
                            className={offer !== 0 ? styles.offer_price : styles.discount_price}
                        >
                            {toPersianDigits(price.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ","))} تومان
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProductTemplate