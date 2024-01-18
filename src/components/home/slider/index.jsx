import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.css"
import useScreenSize from "../../../hooks/useScreenSize"
const SwiperSlider = () => {
  const {isSM} = useScreenSize()

  return (
    <div className={styles.slider}>


      <swiper-container className="mySwiper" pagination="true" pagination-clickable="true" navigation="true" space-between="0"
        centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
        <swiper-slide>
          <Link to={"/mobilephone/samsung"}>
            <img src={`/images/slider/${!isSM ? "one_305.png" : "one_mobile.png"}`} alt="samsung phone" />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to={"/mobilephone/apple"}>
            <img src={`/images/slider/${!isSM ? "two_305.png" : "two_mobile.png"}`} alt="apple phone" />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to={"/console-games/ps5"}>
            <img src={`/images/slider/${!isSM ? "three_305.png" : "three_mobile.png"}`} alt="ps5" />
          </Link>
        </swiper-slide>
        <swiper-slide>
          <Link to={"/laptop/dell"}>
            <img src={`/images/slider/${!isSM ? "four_305.png" : "four_mobile.png"}`} alt="laptop dell" />
          </Link>
        </swiper-slide>


      </swiper-container>

    </div>
  )
}

export default SwiperSlider