import React, { useRef, useState } from 'react'
import styles from "../filter.module.css"
import FilterByBrand from './FilterByBrands'
import useClickOutSide from "../../../hooks/useClickOutSide"

const LaptopFilter = () => {
  const filterRef = useRef(null)
  const [showFilterBrands, setShowFilterBrands] = useState(false)

  useClickOutSide(filterRef, () => {
    setShowFilterBrands(false)
  })

  return (
    <>
      <div className={styles.filter_Container}>
        <div onClick={() => setShowFilterBrands(prev => !prev)}
          className={`${styles.filter_titles} ${showFilterBrands && styles.active}`}>برند</div>

      </div>
      {showFilterBrands && (
        <div ref={filterRef}>
          <FilterByBrand open={showFilterBrands} />

        </div>
      )}
    </>
  )
}

export default LaptopFilter