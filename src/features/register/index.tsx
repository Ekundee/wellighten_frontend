import { OauthButton, PrimaryButton, SecondaryButton } from "@/core/components/buttons";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import { Form } from "formik";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as yup from 'yup' 
import { SizedHorizontalBox, SizedVerticalBox } from "@/core/components/box";
import { LogoNText, Or } from "@/core/components/minor";
import { useRouter } from "next/router";

export default function Register() {
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
          onSubmit : (values)=>{
               console.log(values)
               router.push("/auth/otp_verification")
          },
     })
     return(
          <Box>
               <SizedVerticalBox py={10}/>
               <Box
                    sx={{
                         backgroundImage: `url(/registerillus.png)`,
                         backgroundRepeat: "no-repeat",
                         backgroundSize: "100% 100%",
                         width: 290,
                         height:270,
                         margin: "auto",
                    }}
               >
               </Box>
               <LogoNText text="Sign up"/>             
               {
                    Object.keys(registerForm.values).map((property,index)=>(
                         <Box key={index}>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                              <SizedVerticalBox py={10}/>
                         </Box>
                    ))
               }
               <Typography
                    sx={{
                         fontFamily: 'Sofia Sans',
                         fontStyle: "normal",
                         fontWeight: 400,
                         fontSize: "12px",
                         lineHeight: "14px",
                         color: "var(--wellighten_deeper_grey)",
                    }}
               >
                    By creating account, you agree to our Terms and condition and Privacy policy
               </Typography>

               <PrimaryButton text="Create Account" onClick={registerForm.submitForm} />
               <Or/>
               <OauthButton text="Sign up with Google" startIcon={true} iconsrc={"/googleIcon.svg"} />

               <Typography>
                    Already registered? &nbsp;
                    <Link href={"/auth/login"}>
                         Login
                    </Link>
               </Typography>

          </Box>
    )
}