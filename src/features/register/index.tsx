import { OauthButton, PrimaryButton, SecondaryButton } from "@/core/components/buttons";
import { Alert, Avatar, Box, Snackbar, TextField, Typography } from "@mui/material";
import { Form } from "formik";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as yup from 'yup' 
import { SizedHorizontalBox, SizedVerticalBox } from "@/core/components/box";
import { CustomTypography, LogoNText, Or } from "@/core/components/minor";
import { useRouter } from "next/router";
import { SignUpAPI } from "@/api/authorization";
import { ISignUp } from "@/api/authorization/interface";
import { alertSeverity, userRole } from "@/core/utils/enum";
import styles from "./style.module.css"
import { useState } from "react"
import { snackBarMessageAtom, snackBarOpenAtom, snackBarSeverityAtom } from "@/core/components/popups/state";
import { useAtom } from "jotai";

export default function Register() {
     const [snackBarOpenState , setSnackBarOpenState] : any= useAtom(snackBarOpenAtom)
     const [snackBarMessageState , setSnackBarMessageState] : any = useAtom(snackBarMessageAtom)
     const [snackBarSeverityState , setSnackBarSeverityState] : any = useAtom(snackBarSeverityAtom)

     
     const router = useRouter()

     const registerFormConfig =[
          {
               placeholder: 'Mark',
               icon: '/name_icon.svg',
          }, {
               placeholder: 'Davies',
               icon: '/name_icon.svg',
          }, {
               placeholder: 'abc_test@gmail.com',
               icon: '/email.svg',
          }, {
               placeholder: '*********',
               icon: '/lock_icon.svg',
          }
     ]
   
     const registerForm : any = useFormik({
          initialValues : {
               firstname: '',
               lastname: '',
               email : '',
               password: ''
          },
          validationSchema : yup.object({
               firstname: yup.string().required("Firstname is required"),
               lastname: yup.string().required("Lastname is required"),
               email : yup.string().required("Email is required").email("Invalid Email"),
               password: yup.string().required("Password is required").min(8, "Password must be more than 8 characters")
          }),
          onSubmit : async (values)=>{
               const signupDTO : ISignUp = {
                    Firstname: values.firstname,
                    Lastname: values.lastname,
                    Role: userRole.USER,
                    Email: values.email,
                    Password: values.password
               }
               
               const signup = await SignUpAPI(signupDTO);
               if(signup.Status != 200){
                    setSnackBarSeverityState(alertSeverity.ERROR)
               }else{
                    setSnackBarSeverityState(alertSeverity.SUCCESS)
               }
               setSnackBarMessageState(signup?.Message)
               setSnackBarOpenState(true)

               if(signup.Status == 200){
                    setTimeout(()=>{
                         return router.push("/auth/login")
                    },2000)
               }
          },
     })
     return(
          <Box>
               <Box className={styles.registerIllusBox}>
                    <Box className={styles.registerIllus}></Box>
               </Box>

               <LogoNText text="Sign up"/>             
               {
                    Object.keys(registerForm.values).map((property,index)=>(
                         <Box key={index} className={styles.textFieldBox}>
                              <Avatar src={registerFormConfig[index].icon} sx={{width : "24px", height:"24px"}} />
                              <SizedHorizontalBox px={2}/>
                              <TextField 
                                   name={property}
                                   value={registerForm.values[property]}
                                   onChange={registerForm.handleChange}
                                   onBlur= {registerForm.handleBlur}
                                   placeholder={registerFormConfig[index].placeholder}
                                   error={registerForm.touched[property] && registerForm.errors[property] ? true : false}
                                   helperText={registerForm.touched[property] && registerForm.errors[property]}
                                   variant="standard"
                                   sx={{ 
                                        width  : "100%",
                                   }}
                                   type={property =="password" ? "password" : "text"}
                              />
                         </Box>
                    ))
               }
               <CustomTypography className={styles.termsNConditionFullText}>
                    By creating account, you agree to our <span className={styles.termsNConditionText}><Link href={"#"}>Terms and condition</Link></span> and <span className={styles.termsNConditionText}><Link href={"#"}>Privacy policy</Link></span>
               </CustomTypography>

               <PrimaryButton text="Create Account" onClick={registerForm.submitForm} />
               <Or/>
               <OauthButton text="Sign up with Google" startIcon={true} iconsrc={"/googleIcon.svg"} />

               <CustomTypography className={styles.alreadyRegisteredFullText}> 
                    Already registered? &nbsp;
                    <Link href={"/auth/login"}>
                         Login
                    </Link>
               </CustomTypography>

          </Box>
    )
}