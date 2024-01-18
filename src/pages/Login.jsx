import React, { useEffect, useState } from 'react'
import EmailLoginCompenent from '../components/login-register/EmailLoginCompenent'
import PhoneLoginComponent from "../components/login-register/PhoneLoginCompoent"
import RegisterFrom from "../components/login-register/RegisterForm"
import classes from "../assets/styles/responsive.module.css"

const Login = () => {
    const [loginWithPhone, setLoginWithPhone] = useState(true)
    const [register, setRegister] = useState(false)

    return (
        <div className={classes.responsive}>

            {!register && loginWithPhone
                ? (<PhoneLoginComponent setLoginWithPhone={setLoginWithPhone} setRegister={setRegister} />)
                : !register && !loginWithPhone
                    ? (<EmailLoginCompenent setLoginWithPhone={setLoginWithPhone} setRegister={setRegister} />)
                    : register ? (<RegisterFrom setRegister={setRegister} setLoginWithPhone={setLoginWithPhone} />) : ""}




        </div>
    )
}

export default Login