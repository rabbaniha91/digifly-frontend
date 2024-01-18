import React from 'react'
import useScreenSize from "../../../hooks/useScreenSize"
import ProductTemplate from "../../useful/ProductTemplate"
import styles from "./styles.module.css"

const FlagShipSectionLaptop = () => {
    const { isSM, isMaxMD } = useScreenSize()
    return (
        <div className={styles.container}>
            <p className={`${styles.caption} ${isSM && styles.caption_mobile}`}>لپ تاپ های پرطرفدار</p>
            <swiper-container className="mySwiper" navigation="true" slides-per-view={isSM ? "1" : isMaxMD ? "3" : "4"}
                space-between={isSM ? "20" : "30"} >
                <swiper-slide>
                    <ProductTemplate title={`لپ اتپ لنوو 15.6 اینچی مدل ipeapad 3 i3 12GB 512GB SSD`} price={"23000000"} offer={0} id={`ksdksk`} cover={"erick-cerritos-i5UV2HpITYA-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`لپ اتپ لنوو 15.6 اینچی مدل ipeapad 3 i3 12GB 512GB SSD`} price={"23000000"} offer={0} id={`ksdksk`} cover={"erick-cerritos-i5UV2HpITYA-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`لپ اتپ لنوو 15.6 اینچی مدل ipeapad 3 i3 12GB 512GB SSD`} price={"23000000"} offer={0} id={`ksdksk`} cover={"erick-cerritos-i5UV2HpITYA-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`لپ اتپ لنوو 15.6 اینچی مدل ipeapad 3 i3 12GB 512GB SSD`} price={"23000000"} offer={0} id={`ksdksk`} cover={"erick-cerritos-i5UV2HpITYA-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`لپ اتپ لنوو 15.6 اینچی مدل ipeapad 3 i3 12GB 512GB SSD`} price={"23000000"} offer={0} id={`ksdksk`} cover={"erick-cerritos-i5UV2HpITYA-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`لپ اتپ لنوو 15.6 اینچی مدل ipeapad 3 i3 12GB 512GB SSD`} price={"23000000"} offer={0} id={`ksdksk`} cover={"erick-cerritos-i5UV2HpITYA-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`لپ اتپ لنوو 15.6 اینچی مدل ipeapad 3 i3 12GB 512GB SSD`} price={"23000000"} offer={0} id={`ksdksk`} cover={"erick-cerritos-i5UV2HpITYA-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`لپ اتپ لنوو 15.6 اینچی مدل ipeapad 3 i3 12GB 512GB SSD`} price={"23000000"} offer={0} id={`ksdksk`} cover={"erick-cerritos-i5UV2HpITYA-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`لپ اتپ لنوو 15.6 اینچی مدل ipeapad 3 i3 12GB 512GB SSD`} price={"23000000"} offer={0} id={`ksdksk`} cover={"erick-cerritos-i5UV2HpITYA-unsplash_prev_ui.png"} />
                </swiper-slide>
                <swiper-slide>
                    <ProductTemplate title={`لپ اتپ لنوو 15.6 اینچی مدل ipeapad 3 i3 12GB 512GB SSD`} price={"23000000"} offer={0} id={`ksdksk`} cover={"erick-cerritos-i5UV2HpITYA-unsplash_prev_ui.png"} />
                </swiper-slide>
               
            </swiper-container>
        </div>
    )
}

export default FlagShipSectionLaptop