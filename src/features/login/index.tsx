import { SizedHorizontalBox, SizedVerticalBox } from "@/core/components/box";
import { OauthButton, PrimaryButton, SecondaryButton } from "@/core/components/buttons";
import { LogoNText, Or } from "@/core/components/minor";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup"

export default function Login() {
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
          onSubmit : (values)=>{
               console.log(values)
          },
     })
    return(
          <Box>
               <Box
                    sx={{
                         backgroundImage: `url(/loginillus.png)`,
                         backgroundRepeat: "no-repeat",
                         backgroundSize: "100% 100%",
                         width: 290,
                         height:270,
                         margin: "auto",
                    }}
               >
               </Box>
              <LogoNText text="Sign in"/>             
               {
                         Object.keys(loginForm.values).map((property,index)=>(
                              <Box key={index}>
                                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar src={loginFormConfig[index].icon} sx={{width : "24px", height:"24px"}} />
                                        <SizedHorizontalBox px={2}/>
                                        <TextField
                                             name={property}
                                             value={loginForm.values[property]}
                                             onChange={loginForm.handleChange}
                                             onBlur= {loginForm.handleBlur}
                                             placeholder={loginFormConfig[index].placeholder}
                                             error={loginForm.touched[property] != true ? false : true}
                                             helperText={loginForm.touched[property] && loginForm.errors[property]}
                                             variant="standard"
                                             sx={{ 
                                                  width  : "100%",
                                             }}
                                        />
                                   </Box>
                                   <SizedVerticalBox py={10}/>
                              </Box>
                         ))
                    }

               <Link href={"/auth/forgot_password"}>
                    <Typography>
                         Forgot Password
                    </Typography>
               </Link>

               <PrimaryButton endIcon={true} text="Login"/>

               <Or/>

               <OauthButton text="Sign in with Google" startIcon={true} iconsrc={"/googleIcon.svg"} />

               <Typography>
                    Not registered yet? &nbsp;
                    <Link href={"/auth/register"}>
                         Sign up
                    </Link>
               </Typography>

          </Box>
    )
}