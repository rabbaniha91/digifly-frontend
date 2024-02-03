import React, { useState } from 'react'
import styles from "../filter.module.css"
import FilterByBrand from './FilterByBrands'

const LaptopFilter = () => {
  const [showFilterBrands, setShowFilterBrands] = useState(false)
  return (
    <>
      <div className={styles.filter_Container}>
        <div onClick={() => setShowFilterBrands(prev => !prev)}
          className={`${styles.filter_titles} ${showFilterBrands && styles.active}`}>برند</div>

      </div>
      {showFilterBrands && (

        <FilterByBrand open={showFilterBrands} />
      )}
    </>
  )
}

export default LaptopFilter