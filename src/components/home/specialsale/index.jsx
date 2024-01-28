import React from 'react'
import ProductTemplate from '../../useful/ProductTemplate'
import useScreenSize from "../../../hooks/useScreenSize"
import styles from "./styles.module.css"

const SpecialSale = () => {
    const { isSM, isMaxMD, isLG } = useScreenSize()
    return (
        <div className={styles.container}>
            <p className={`${styles.caption} ${isSM && styles.caption_mobile}`}>فروش ویژه</p>
            <swiper-container className="mySwiper" navigation="true" slides-per-view={isSM ? "1" : isLG ? "3" : "4"}
                space-between={isSM ? "20" : "40"} autoplay-delay="2500" autoplay-disable-on-interaction="false">
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} timer={"1/23/2024"}/>
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} timer={"1/24/2024"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"}  timer={"1/22/2024"}/>
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} timer={"1/25/2024"}/>
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} timer={"1/25/2024"}/>
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} timer={"1/25/2024"}/>
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} timer={"1/25/2024"}/>
                </swiper-slide>
            </swiper-container>

        </div>
    )
}

export default SpecialSale