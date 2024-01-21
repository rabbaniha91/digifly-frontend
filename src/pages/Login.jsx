import React, { useEffect, useState } from 'react'
import EmailLoginCompenent from '../components/login-register/EmailLoginCompenent'
import PhoneLoginComponent from "../components/login-register/PhoneLoginCompoent"
import RegisterFrom from "../components/login-register/RegisterForm"
import classes from "../assets/styles/responsive.module.css"
import { Link, useLocation } from 'react-router-dom'
import { IoArrowUndoCircleSharp } from "react-icons/io5";

const Login = () => {
    const [loginWithPhone, setLoginWithPhone] = useState(true)
    const [register, setRegister] = useState(false)
    const location = useLocation()



    return (
        <div className={classes.responsive}>
            <Link to={location.state}>
                <IoArrowUndoCircleSharp size={42}/>
            </Link>
            {!register && loginWithPhone
                ? (<PhoneLoginComponent setLoginWithPhone={setLoginWithPhone} setRegister={setRegister} />)
                : !register && !loginWithPhone
                    ? (<EmailLoginCompenent setLoginWithPhone={setLoginWithPhone} setRegister={setRegister} />)
                    : register ? (<RegisterFrom setRegister={setRegister} setLoginWithPhone={setLoginWithPhone} />) : ""}




        </div>
    )
}

export default Login