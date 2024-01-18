import React from 'react'
import AccessibleItems from './AccessibleItems'
import styles from "./styles.module.css"
import useScreenSize from '../../../hooks/useScreenSize'

const AccessibleCategory = () => {
    const {isSM} = useScreenSize()
    return (
        <>
            <div className={`${styles.container} `}>
                <swiper-container className="mySwiper" navigation="true" slides-per-view={isSM ? "3" : "5"}
                    space-between="40" free-mode="true" loop="true">
                    <swiper-slide>
                        <AccessibleItems image={"krzysztof-hepner-NPnAEg3N_fY-unsplash.jpg"} title={"دسته های بازی"} />

                    </swiper-slide>
                    <swiper-slide>
                        <AccessibleItems image={"joshua-woroniecki-lzh3hPtJz9c-unsplash.jpg"} title={"لپ تاپ"} />

                    </swiper-slide>
                    <swiper-slide>
                        <AccessibleItems image={"adrien-VD9Hsvg3DVQ-unsplash.jpg"} title={"گوشی موبایل"} />

                    </swiper-slide>
                    <swiper-slide>
                        <AccessibleItems image={"jorge-ramirez-SVpWtjXmLZg-unsplash.jpg"} title={"مانیتور"} />

                    </swiper-slide>
                    <swiper-slide>
                        <AccessibleItems image={"krzysztof-hepner-NPnAEg3N_fY-unsplash.jpg"} title={"دسته های بازی"} />

                    </swiper-slide>
                    <swiper-slide>
                        <AccessibleItems image={"krzysztof-hepner-NPnAEg3N_fY-unsplash.jpg"} title={"دسته های بازی"} />

                    </swiper-slide>
                    <swiper-slide>
                        <AccessibleItems image={"krzysztof-hepner-NPnAEg3N_fY-unsplash.jpg"} title={"دسته های بازی"} />

                    </swiper-slide>
                    <swiper-slide>
                        <AccessibleItems image={"krzysztof-hepner-NPnAEg3N_fY-unsplash.jpg"} title={"دسته های بازی"} />

                    </swiper-slide>
                    <swiper-slide>
                        <AccessibleItems image={"krzysztof-hepner-NPnAEg3N_fY-unsplash.jpg"} title={"دسته های بازی"} />

                    </swiper-slide>
                    <swiper-slide>
                        <AccessibleItems image={"krzysztof-hepner-NPnAEg3N_fY-unsplash.jpg"} title={"دسته های بازی"} />

                    </swiper-slide>
                    <swiper-slide>
                        <AccessibleItems image={"krzysztof-hepner-NPnAEg3N_fY-unsplash.jpg"} title={"دسته های بازی"} />

                    </swiper-slide>
                    <swiper-slide>
                        <AccessibleItems image={"krzysztof-hepner-NPnAEg3N_fY-unsplash.jpg"} title={"دسته های بازی"} />

                    </swiper-slide>

                </swiper-container>
            </div>
        </>
    )
}

export default AccessibleCategory