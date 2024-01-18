import React, { useRef, useState } from 'react'
import styles from "./styles.module.css"
import * as Yup from "yup"
import { useFormik } from 'formik';
import useScreenSize from "../../hooks/useScreenSize"
import TextInput from '../useful/TextInput';
import ButtonComponent from '../useful/ButtonComponent';
import { IoIosPhonePortrait } from "react-icons/io";
import Eyes from './Eyes';




const EmailRegisterComponent = ({ setLoginWithPhone, setRegister }) => {
    const { isSM } = useScreenSize()
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordconfirm] = useState(false)

    const passwordRef = useRef(null)
    const passwordRegex = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])/;

    const validateCode = Yup.object({
        email: Yup.string()
            .required("لطفا ایمیل خود را وارد نمایید")
            .email("لطفا آدرس ایمیل معتبر وارد کنید"),
        password: Yup.string()
            .required("لطفا رمزعبور خود را وارد کنید")
            .min(8, "رمز عبور باید حداقل ۸ کاراکتر داشته باشد")
            .matches(passwordRegex, "رمز عبور ضعیف است"),
        passwordConfirm: Yup.string()
            .required("لطفا رمز عبور خود را تائید نمائید")
            .oneOf([Yup.ref("password"), null], "رمزعبور مطابقت ندارد"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: ""
        },
        validationSchema: validateCode,
        onSubmit: (values) => {
            console.log(values)
        },
    });
    return (
        <div className={`${styles.container}  ${isSM && styles.mobile_container}`}>
            <form onSubmit={formik.handleSubmit} className={styles.form}>

                <div className={styles.input_form}>


                    <div>
                        <TextInput
                            dir={"ltr"}
                            type={"email"}
                            fullWidth={true}
                            label={"ایمیل"}
                            name={"email"}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            error={formik.touched.email && formik.errors.email}
                            helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                        />
                    </div>
                    <div style={{ position: "relative" }}>
                        <TextInput
                            ref={passwordRef}
                            type={showPassword ? "text" : "password"}
                            dir={"ltr"}
                            fullWidth={true}
                            label={"رمز عبور"}
                            name={"password"}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            error={formik.touched.password && formik.errors.password}
                            helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                        />
                        <Eyes setShowPassword={setShowPassword} showPassword={showPassword} />
                    </div>
                    <div style={{ position: "relative" }}>
                        <TextInput
                            dir={"ltr"}
                            type={showPasswordConfirm ? "text" : "password"}
                            fullWidth={true}
                            label={"تکرار رمز عبور"}
                            name={"passwordConfirm"}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            error={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                            helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm ? formik.errors.passwordConfirm : ""}
                        />
                        <Eyes setShowPassword={setShowPasswordconfirm} showPassword={showPasswordConfirm} />
                    </div>
                </div>

                <ButtonComponent
                    bgColor={"var(--second-main-bg)"}
                    text={"ورود"}
                    color={"#FFF"}
                    hover={"var(--second-bg-hover)"}
                    disabled={!formik.dirty || formik.errors.email} />

            </form>
            <div onClick={() => {
                setRegister(false)
                setLoginWithPhone(true)
            }}>
                <ButtonComponent
                    bgColor={"transparent"}
                    hover={"var(--title-color)"}
                    text={"ثبت نام با شماره همراه"}
                    icon={<IoIosPhonePortrait size={32} />}

                />
            </div>
            <div>حساب کاربری دارید؟ <span
                onClick={() => setRegister(false)}
                style={{ color: "var(--second-bg)", textDecoration: "underline", cursor: "pointer" }}>
                از اینجا وارد شوید.
            </span>
            </div>
        </div>
    )
}

export default EmailRegisterComponent