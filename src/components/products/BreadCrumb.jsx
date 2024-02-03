import React, { useEffect } from 'react'
import classes from "../../assets/styles/responsive.module.css"
import { Link, useParams } from 'react-router-dom'
import styles from "./breadCramb.module.css"

const BreadCrumb = () => {
    const { main_category, sub_category } = useParams()

    const persianCategory = { laptop: "لپ تاپ", pc: "کامپیوتر", mobile: "موبایل", gaming: "کنسول گیمینگ" }


    return (
        <div className={`${classes.responsive} ${styles.container}`}>
            <Link style={{opacity: "0.8"}} className={styles.link} to={"/"}>فروشگاه اینترنتی دیجی فلای</Link>
            <span > / </span>
            <Link className={styles.link} to={`/products/${main_category}`}> {persianCategory[main_category]}</Link>
            {sub_category && (
                <>
                    <span> / </span>
                    <Link className={styles.link} >{sub_category}</Link>
                </>
            )}

        </div>
    )
}

export default BreadCrumb