import React, { useEffect, useRef, useState } from 'react'
import styles from "./styles.module.css"
import * as Yup from "yup"
import { useFormik } from 'formik';
import useScreenSize from "../../hooks/useScreenSize"
import TextInput from '../useful/TextInput';
import ButtonComponent from '../useful/ButtonComponent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MdOutlineAlternateEmail } from "react-icons/md";



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LoginCompenent = ({ setLoginWithPhone, setRegister }) => {
    const { isSM } = useScreenSize()



    const validateCode = Yup.object({
        phoneNumber: Yup.string()
            .required("لطفا شماره تلفن همراه خود را وارد نمایید"),
        password: Yup.string().required("لطفا رمزعبور خود را وارد کنید"),
    });

    const formik = useFormik({
        initialValues: {
            phoneNumber: "",
            password: "",
            remember: []
        },
        validationSchema: validateCode,
        onSubmit: (values) => {
        },
    });
    return (
        <div className={styles.main}>
            <div className={`${styles.container} ${isSM && styles.mobile_container}`}>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <div className={styles.input_form}>


                        <TextInput
                            dir={"ltr"}
                            type={"phone"}
                            fullWidth={true}
                            label={"شماره تلفن همراه"}
                            name={"phoneNumber"}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            error={formik.touched.phoneNumber && formik.errors.phoneNumber}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber ? formik.errors.phoneNumber : ""}
                        />

                    </div>

                    <ButtonComponent
                        bgColor={"var(--second-main-bg)"}
                        text={"دریافت کد تائید"}
                        color={"#FFF"}
                        hover={"var(--second-bg-hover)"}
                        disabled={!formik.dirty || formik.errors.phoneNumber} />

                </form>
                <div onClick={() => setLoginWithPhone(false)}>
                    <ButtonComponent
                        bgColor={"transparent"}
                        hover={"var(--title-color)"}
                        text={"ورود با ایمیل"}
                        icon={<MdOutlineAlternateEmail size={32} />}

                    />
                </div>

            </div>
        </div>
    )
}

export default LoginCompenent