import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa6";

import classes from "../../assets/styles/responsive.module.css"
import styles from "./filter.module.css"
import LaptopFilter from './laptopFilters/LaptopFilter';

const Filter = ({ filtredProducts }) => {
    const [showFilter, setShowFilter] = useState(false)

    return (
        <div className={classes.responsive}>
            <div onClick={() => setShowFilter(prev => !prev)} className={styles.filter_title}>
                <FaFilter size={20} style={{ transition: "all 0.3s ease" }} />
                <span>فیلترها</span>

            </div>
            {showFilter && filtredProducts === "laptop" && (
                <LaptopFilter />
            )}
        </div>
    )
}

export default Filter