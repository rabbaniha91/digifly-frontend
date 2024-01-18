import React from 'react'
import AccessibleCategory from './accessibleCategoty'
import styles from "../../assets/styles/responsive.module.css"
import SpecialSale from './specialsale'
import SpecialAccess from './special_access'
import FlagShipSection from './flagship_mobile_section'
import PopularMobileBrands from './popualr_mobile_brands/PopularMobileBrands'
import useScreenSize from '../../hooks/useScreenSize'
import { Link } from 'react-router-dom'
import FlagShipSectionLaptop from './flagship_laptop_section'
import PopularLaptopBrands from './populat_laptop_brands'
import SwiperSlider from "./slider"

const MainContent = () => {
  const { isSM, isLG } = useScreenSize()
  return (
    <div>
      <SwiperSlider />
      <div className={styles.responsive}>
        <AccessibleCategory />
        <SpecialSale />
        <SpecialAccess />
        <FlagShipSection />
        <PopularMobileBrands />
        <div className={styles.image}>
          <Link >
            {isSM ? (<img src="/images/designed/laptop_mobile.png" alt="" />)
              : isLG ? (<img src="/images/designed/laptop_tablet.png" alt="" />)
                : (<img src="/images/designed/laptop.png" alt="" />)}
          </Link>
        </div>
        <FlagShipSectionLaptop />
        <PopularLaptopBrands />
      </div>

    </div>
  )
}

export default MainContent