import React from 'react'
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const Eyes = ({ setShowPassword, showPassword }) => {
    return (
        <div
            onClick={() => setShowPassword((prev) => !prev)}
            style={{ position: "absolute", top: "20%", left: "2%", cursor: "pointer" }}>
            {!showPassword ? (<VscEye size={32} />) : (<VscEyeClosed size={32} />)}
        </div>
    )
}

export default Eyes