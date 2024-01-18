import React from 'react'
import classes from "../../assets/styles/responsive.module.css"
import styles from "./styles.module.css"
import { Link } from 'react-router-dom'
import { TbBrandInstagram, TbBrandTelegram, TbBrandYoutube, TbBrandWhatsapp } from "react-icons/tb";
import useScreenSize from "../../hooks/useScreenSize"
const Footer = () => {
  const { isSM } = useScreenSize()

  return (
    <div className={classes.responsive}>
      <div className={styles.container}>


        <Link to={"/"} className={`${styles.logo} `} >DIGIFLY</Link>

        <div className={`${!isSM ? styles.communication : styles.communication_mobile}`}>
          <div className={styles.contact}>
            <p>شماره تماس: {" "} ۰۹۱۹۶۱۶۳۲۳۵</p>
            <p>ایمیل : {" "} hrabbaniha18@gmail.com</p>
          </div>
          <div className={styles.social}>
            <p>شبکه های اجتماعی: </p>
            <Link className={styles.link}>
              <TbBrandInstagram size={32} />
            </Link>
            <Link className={styles.link}>
              <TbBrandTelegram size={32} />

            </Link>
            <Link className={styles.link}>
              <TbBrandYoutube size={32} />

            </Link>

            <Link className={styles.link}>
              <TbBrandWhatsapp size={32} />

            </Link>
          </div>
        </div>

        <div className={`${!isSM ? styles.footer_content : styles.footer_content_mobile}`}>
          <div>
            <h4>دسترسی سریع</h4>
            <Link className={styles.link}>
              <p>صفحه اصلی</p>

            </Link>
            <Link className={styles.link}>
              <p>خرید اقساطی</p>

            </Link>
            <Link className={styles.link}>
              <p>گوشی سامسونگ</p>

            </Link>
            <Link className={styles.link}>
              <p>لپ تاپ ایسوس</p>

            </Link>
            <Link className={styles.link}>
              <p>هنذفری بلوتوثی</p>

            </Link>
            <Link className={styles.link}>
              <p>گوشی شیائومی</p>

            </Link>
            <Link className={styles.link}>
              <p>فروش ویژه</p>
            </Link>

          </div>
          <div>
            <h4>محصولات پرفروش</h4>
            <Link className={styles.link}>
              <p>سامسونگ S21 اولترا</p>

            </Link>
            <Link className={styles.link}>
              <p>آیفون 11 pro</p>

            </Link>
            <Link className={styles.link}>
              <p>شیائومی نوت 11</p>

            </Link>
            <Link className={styles.link}>
              <p>پوکو X4 پرو</p>

            </Link>
            <Link className={styles.link}>
              <p>سامسونگ A23</p>

            </Link>
            <Link className={styles.link}>
              <p>ساسونگ A52</p>

            </Link>
            <Link className={styles.link}>
              <p>سامسونگ j7 prime</p>
            </Link>

          </div>
          <div>
            <h4>قوانین و مقررات</h4>
            <Link className={styles.link}>
              <p>قوانین و مقررات</p>
            </Link>
            <Link className={styles.link}>
              <p>حریم خصوصی کاربران</p>
            </Link>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer