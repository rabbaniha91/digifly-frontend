import React, { useEffect, useRef } from 'react'
import styles from "./styles.module.css"
import CustomTooltip from '../../../useful/Tooltip'
import { Link } from 'react-router-dom'
import { TbCategory, TbDiscountCheck, TbHome2, TbSearch, TbShoppingBag, TbUser } from 'react-icons/tb'
import TemporaryDrawer from '../Category'

const MobileNav = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const topNav = useRef(null)

  

  useEffect(() => {
    const checkScroll = () => {
      if (document.documentElement.scrollTop > 10) {
        topNav.current.classList.add(`${styles.hidden_top}`)
      } else {
        topNav.current.classList.remove(`${styles.hidden_top}`)

      }
    }

    document.addEventListener("scroll", checkScroll)

    return () => {
      document.removeEventListener("scroll", checkScroll)
    }
  }, [document.documentElement.scrollTop])
  return (
    <div>
      
      <TemporaryDrawer open={openMenu}/>
      <div ref={topNav} className={styles.top}>
        <div className={styles.right}>
          <CustomTooltip title={"خرید اقساطی"}>
            <Link to={"/installments"} className={`${styles.link} `}>
              <TbDiscountCheck size={32} className={`${styles.navbar_itmes_menu_icon} ${styles.hover_icon}`} />
            </Link>
          </CustomTooltip>
          <span style={{ cursor: "pointer" }}>
            <TbSearch size={32} />
          </span>
        </div>
        <div >
          <Link to={"/"} className={`${styles.logo} ${styles.link}`} >DIGIFLY</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <CustomTooltip title={"خانه"} >
          <Link to={"/"} className={`${styles.link} ${styles.navbar_itmes_menu}`}>
            <TbHome2 size={32} className={`${styles.navbar_itmes_menu_icon} ${styles.hover_icon}`} />

          </Link>
        </CustomTooltip>
        <CustomTooltip title={"دسته بندی کالاها"}>
          <div onClick={() => setOpenMenu(prev => !prev)} style={{ cursor: "pointer" }} className={` ${styles.navbar_itmes_menu}`}>
            <TbCategory size={32} className={`${styles.navbar_itmes_menu_icon} ${styles.hover_icon}`} />

          </div>
        </CustomTooltip>
        <CustomTooltip title={"سبد خرید"}>
          <span ><TbShoppingBag size={32} className={`${styles.icon} ${styles.hover_icon}`} /></span>
        </CustomTooltip>
        <CustomTooltip title={"ورود / ثبت نام"}>
          <Link to={"/login"} className={styles.link}><TbUser size={32} className={`${styles.icon} ${styles.hover_icon}`} /></Link>
        </CustomTooltip>
      </div>
    </div>
  )
}

export default MobileNav