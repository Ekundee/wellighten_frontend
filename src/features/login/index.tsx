import { SizedHorizontalBox, SizedVerticalBox } from "@/core/components/box";
import { OauthButton, PrimaryButton, SecondaryButton } from "@/core/components/buttons";
import { CustomTypography, LogoNText, Or } from "@/core/components/minor";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as yup from "yup"
import styles from "./style.module.css"
import { SignInAPI, SignUpAPI } from "@/api/authorization";
import { ISignIn, ISignUp } from "@/api/authorization/interface";
import { useAtom } from "jotai";
import { snackBarMessageAtom, snackBarOpenAtom, snackBarSeverityAtom } from "@/core/components/popups/state";
import { alertSeverity } from "@/core/utils/enum";
import { getCapacitorStorageData, setCapacitorStorageData } from "@/core/utils/utilFunction";
import TabSwitcher from "../register/components/tabSwitcher";
import { authTabAtom } from "../register/state";

export default function Login() {
     const router = useRouter()

     const [snackBarOpenState , setSnackBarOpenState] : any= useAtom(snackBarOpenAtom)
     const [snackBarMessageState , setSnackBarMessageState] : any = useAtom(snackBarMessageAtom)
     const [snackBarSeverityState , setSnackBarSeverityState] : any = useAtom(snackBarSeverityAtom)
     const [authTab,] : any = useAtom(authTabAtom)

     const loginFormConfig =[
          {
               placeholder: 'abc_test@gmail.com',
               icon: '/email.svg',
          }, {
               placeholder: '*********',
               icon: '/lock_icon.svg',
          }
     ]
   
     const loginForm : any = useFormik({
          initialValues : {
               email : '',
               password: ''
          },
          validationSchema : yup.object({
               email : yup.string().required("Email is required").email("Invalid Email"),
               password: yup.string().required("Password is required").min(8, "Password must be more than 8 characters")
          }),
          onSubmit : async (values)=>{
               const signinDTO : ISignIn = {
                    Email: values.email,
                    Password: values.password,
                    Role: authTab == "user" ? "USER" : "CONSULTANT"
               }
               
               const signin : any = await SignInAPI(signinDTO);
               if(signin.Status != 200){
                    setSnackBarSeverityState(alertSeverity.ERROR)
               }else{
                    setSnackBarSeverityState(alertSeverity.SUCCESS)
               }
               setSnackBarMessageState(signin?.Message)
               setSnackBarOpenState(true)

               if(signin.Status == 200){
                    await setCapacitorStorageData("wellighton_authtoken", signin.Data.AuthToken)
                    setTimeout(()=>{
                         return router.push("/tabs")
                    },2000)
               }
          },
     })
    return(
          <Box>
               <Box className={styles.loginIllusBox}>
                    <Box className={styles.loginIllus}></Box>
               </Box>

               <TabSwitcher/>

              <LogoNText text="Sign in"/>             
               {
                         Object.keys(loginForm.values).map((property,index)=>(
                              <Box key={index} className={styles.textFieldBox}>
                                   <Avatar src={loginFormConfig[index].icon} sx={{width : "24px", height:"24px"}} />
                                   <SizedHorizontalBox px={2}/>
                                   <TextField
                                        name={property}
                                        value={loginForm.values[property]}
                                        onChange={loginForm.handleChange}
                                        onBlur= {loginForm.handleBlur}
                                        placeholder={loginFormConfig[index].placeholder}
                                        error={loginForm.touched[property] && loginForm.errors[property] ? true : false}
                                        helperText={loginForm.touched[property] && loginForm.errors[property]}
                                        variant="standard"
                                        sx={{ 
                                             width  : "100%",
                                        }}
                                        type={property =="password" ? "password" : "text"}
                                   />
                              </Box>
                         ))
                    }

               <CustomTypography className={styles.forgotPasswordText}>
                    <Link href={"/auth/forgot_password"}>
                              Forgot Password
                    </Link>
               </CustomTypography>

               <PrimaryButton endIcon={true} text="Login" onClick={loginForm.submitForm}/>

               <Or/>

               <OauthButton text="Sign in with Google" startIcon={true} iconsrc={"/googleIcon.svg"} />

               <CustomTypography className={styles.notRegisteredFullText}>
                    Not registered yet? &nbsp;
                    <Link href={"/auth/register"}>
                         Sign up
                    </Link>
               </CustomTypography>

          </Box>
    )
}