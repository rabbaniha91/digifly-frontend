import React, { useEffect, useRef, useState } from 'react'
import styles from "./styles.module.css"
import * as Yup from "yup"
import { useFormik } from 'formik';
import useScreenSize from "../../hooks/useScreenSize"
import TextInput from '../useful/TextInput';
import ButtonComponent from '../useful/ButtonComponent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IoIosPhonePortrait } from "react-icons/io";
import Eyes from './Eyes';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LoginCompenent = ({ setLoginWithPhone, setRegister }) => {
  const { isSM } = useScreenSize()
  const [showPassword, setShowPassword] = useState(false)



  const validateCode = Yup.object({
    email: Yup.string()
      .required("لطفا ایمیل خود را وارد نمایید")
      .email("لطفا آدرس ایمیل معتبر وارد کنید"),
    password: Yup.string().required("لطفا رمزعبور خود را وارد کنید"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
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


            <div style={{position: "relative"}}>
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
            <div style={{position: "relative"}}>
              <TextInput
                dir={"ltr"}
                type={showPassword ? "text" : "password"}
                fullWidth={true}
                label={"رمز عبور"}
                name={"password"}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.password && formik.errors.password}
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ""}
              />
              <Eyes setShowPassword={setShowPassword} showPassword={showPassword}/>
            </div>
          </div>
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontFamily: "vazir_regular" }}>مرا به یاد داشته باش</span>} />
          <ButtonComponent
            bgColor={"var(--second-main-bg)"}
            text={"ورود"}
            color={"#FFF"}
            hover={"var(--second-bg-hover)"}
            disabled={!formik.dirty || formik.errors.email} />

        </form>
        <div onClick={() => setLoginWithPhone(true)}>
          <ButtonComponent
            bgColor={"transparent"}
            hover={"var(--title-color)"}
            text={"ورود با شماره همراه"}
            icon={<IoIosPhonePortrait size={32} />}

          />
        </div>
        <div>حساب کاربری ندارید؟ <span
          onClick={() => setRegister(true)}
          style={{ color: "var(--second-bg)", textDecoration: "underline", cursor: "pointer" }}>
          ایجاد حساب کاربری با ایمیل
        </span>
        </div>
      </div>
    </div>
  )
}

export default LoginCompenent