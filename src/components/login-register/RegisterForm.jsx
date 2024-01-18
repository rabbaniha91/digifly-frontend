import React, { useState } from 'react'
import styles from "./styles.module.css"
import * as Yup from "yup"
import { useFormik } from 'formik';
import useScreenSize from "../../hooks/useScreenSize"
import TextInput from '../useful/TextInput';
import ButtonComponent from '../useful/ButtonComponent';
import { IoIosPhonePortrait } from "react-icons/io";
import EmailRegisterComponent from './EmailRegisterComponent';



const LoginCompenent = ({ setLoginWithPhone, setRegister }) => {


    return (
        <div className={styles.main}>

            <EmailRegisterComponent setLoginWithPhone={setLoginWithPhone} setRegister={setRegister} />

        </div>
    )
}

export default LoginCompenent