import React, { useEffect, useRef } from 'react'
import {
  TbCategory, TbListDetails, TbHome2,
  TbDiscountCheck, TbUser, TbShoppingBag, TbSearch,
  TbPhoneCall
} from "react-icons/tb";
import { IoMdClose } from "react-icons/io";


import styles from "./styles.module.css"
import classes from "../../../../assets/styles/responsive.module.css"
import { Link, useLocation } from 'react-router-dom';
import CustomTooltip from '../../../useful/Tooltip';
import useScreenSize from '../../../../hooks/useScreenSize';
import TemporaryDrawer from '../Category';

const Navbar = () => {
  const { isXL } = useScreenSize()
  const [openMenu, setOpenMenu] = React.useState(false);
  const [showCloseIcon, setShowCloseIcon] = React.useState(false)

  const homeRef = useRef(null)
  const categoryRef = useRef(null)
  const discountRef = useRef(null)
  const aboutusRef = useRef(null)
  const cartRef = useRef(null)
  const userRef = useRef(null)
  const contactRef = useRef(null)
  const searchBoxRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    if (openMenu) {
      setTimeout(() => {
        setShowCloseIcon(true)
      }, 200)
    } else {
      setShowCloseIcon(false)
    }
  }, [openMenu])


  useEffect(() => {
    const checkScroll = () => {
      if (document.documentElement.scrollTop > 310) {
        contactRef.current.classList.add(`${styles.hidden}`)
        discountRef.current.classList.add(`${styles.hidden}`)
        aboutusRef.current.classList.add(`${styles.hidden}`)
        searchBoxRef.current.classList.add(`${styles.hidden}`)
        homeRef.current.classList.add(`${styles.side_nav1}`)
        categoryRef.current.classList.add(`${styles.side_nav2}`)
        cartRef.current.classList.add(`${styles.side_nav3}`)
        userRef.current.classList.add(`${styles.side_nav4}`)
        logoRef.current.classList.add(`${styles.hidden}`)
      } else {
        contactRef.current.classList.remove(`${styles.hidden}`)
        discountRef.current.classList.remove(`${styles.hidden}`)
        aboutusRef.current.classList.remove(`${styles.hidden}`)
        searchBoxRef.current.classList.remove(`${styles.hidden}`)
        homeRef.current.classList.remove(`${styles.side_nav1}`)
        categoryRef.current.classList.remove(`${styles.side_nav2}`)
        cartRef.current.classList.remove(`${styles.side_nav3}`)
        userRef.current.classList.remove(`${styles.side_nav4}`)
        logoRef.current.classList.remove(`${styles.hidden}`)

      }
    }
    if (isXL) {
      document.addEventListener("scroll", checkScroll)
    }

    return () => {
      document.removeEventListener("scroll", checkScroll)
    }
  }, [document.documentElement.scrollTop])
  return (
    <>
      {showCloseIcon && (
        <IoMdClose size={38} className={styles.close_icon} onClick={() => setOpenMenu(false)} />
      )}
      <TemporaryDrawer open={openMenu} />
      <nav className={`${styles.container} ${classes.responsive}`}>

        <div className={styles.top}>
          <div className={styles.user_access}>
            <div ref={cartRef}>
              <CustomTooltip title={"سبد خرید"}>
                <span ><TbShoppingBag size={38} className={`${styles.icon} ${styles.hover_icon}`} /></span>
              </CustomTooltip>
            </div>
            <div ref={userRef}>
              <CustomTooltip title={"ورود / ثبت نام"}>
                <Link to={"/login"} state={useLocation().pathname} className={styles.link}><TbUser size={38} className={`${styles.icon} ${styles.hover_icon}`} /></Link>
              </CustomTooltip>
            </div>
          </div>
          <div ref={searchBoxRef} className={styles.search_box}>
            <input type="text" placeholder='جستجو' />
            <span>
              <TbSearch size={38} />
            </span>
          </div>
          <div >
            <Link to={"/"} className={`${styles.logo} ${styles.link}`} ref={logoRef}>DIGIFLY</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>
            <div ref={homeRef}>
              <CustomTooltip title={"خانه"} >
                <Link to={"/"} className={`${styles.link} ${styles.navbar_itmes_menu}`}>
                  <TbHome2 size={38} className={`${styles.navbar_itmes_menu_icon} ${styles.hover_icon}`} />

                </Link>
              </CustomTooltip>
            </div>
            <div ref={categoryRef}>
              <CustomTooltip title={"دسته بندی کالاها"}>
                <div
                  onMouseEnter={() => setOpenMenu(true)}
                  style={{ cursor: "pointer" }} className={` ${styles.navbar_itmes_menu}`}>
                  <TbCategory size={32} className={`${styles.navbar_itmes_menu_icon} ${styles.hover_icon}`} />
                </div>
              </CustomTooltip>

            </div>
            <div ref={discountRef}>
              <CustomTooltip title={"خرید اقساطی"}>
                <Link to={"/installments"} className={`${styles.link} ${styles.navbar_itmes_menu}`}>
                  <TbDiscountCheck size={38} className={`${styles.navbar_itmes_menu_icon} ${styles.hover_icon}`} />

                </Link>
              </CustomTooltip>
            </div>
            <div ref={aboutusRef}>
              <CustomTooltip title={"درباره ما"}>
                <Link to={"/aboueus"} className={`${styles.link} ${styles.navbar_itmes_menu}`}>
                  <TbListDetails size={38} className={`${styles.navbar_itmes_menu_icon} ${styles.hover_icon}`} />

                </Link>
              </CustomTooltip>
            </div>
          </div>
          <div ref={contactRef}>
            <CustomTooltip title={"تماس با ما"}>
              <Link to={"/contactus"} className={`${styles.link} ${styles.navbar_itmes_menu}`}>
                <TbPhoneCall size={38} className={`${styles.navbar_itmes_menu_icon} ${styles.hover_icon}`} />
              </Link>
            </CustomTooltip>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar