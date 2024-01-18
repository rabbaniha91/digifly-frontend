import React, { useState } from 'react'
import styles from "./button.module.css"

const ButtonComponent = ({ bgColor, text, color, hover, icon, disabled }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <>
      <button
        className={`${styles.button} `}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{ backgroundColor: isHover ? hover : bgColor, color: color }}
        disabled={disabled}>

        {text}
        {icon}
      </button>

    </>
  )
}

export default ButtonComponent