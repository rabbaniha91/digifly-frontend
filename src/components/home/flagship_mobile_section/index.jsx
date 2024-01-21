import React from 'react'
import useScreenSize from "../../../hooks/useScreenSize"
import ProductTemplate from "../../useful/ProductTemplate"
import styles from "./styles.module.css"

const FlagShipSection = () => {
    const { isSM, isMaxMD } = useScreenSize()
    return (
        <div className={styles.container}>
            <p className={`${styles.caption} ${isSM && styles.caption_mobile}`}>موبایل های پرطرفدار</p>
            <swiper-container className="mySwiper" navigation="true" slides-per-view={isSM ? "1" : isMaxMD ? "3" : "4"}
                space-between={isSM ? "20" : "40"} >
                <swiper-slide>
                    <ProductTemplate title={`گوشی سامسونگ s23 اولترا 256گیگ حافظه و 12گیگ RAM 108 مگاپیکسل دوربین عقبی 44 مگاپیکسل دوربین سلفی`} price={"100000000"} offer={0} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={0} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={0} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={0} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={0} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={0} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`آیفون 13 Pro max 1 ترا`} price={"100000000"} offer={10} id={`ksdksk`} cover={"anh-nhat-yqcloMb3Abw-unsplash_prev_ui.png"} />
                </swiper-slide>
            </swiper-container>
        </div>
    )
}

export default FlagShipSection