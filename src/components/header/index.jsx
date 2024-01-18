import React from 'react'
import useScreenSize from "../../hooks/useScreenSize"
import DesktopNav from "./navbar/desktop"
import MobileNav from './navbar/mobile'

const Header = () => {
    const { isSM } = useScreenSize()
    return (
        <div style={{ margin: "24px 0" }}>
            {!isSM ? (
                <DesktopNav />
            ) : (<MobileNav />)}
            
        </div>
    )
}

export default Header