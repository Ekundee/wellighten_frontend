import { OauthButton, PrimaryButton, SecondaryButton } from "@/core/components/buttons";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import { Form } from "formik";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as yup from 'yup' 
import { SizedHorizontalBox, SizedVerticalBox } from "@/core/components/box";
import { CustomTypography, LogoNText, Or } from "@/core/components/minor";
import { useRouter } from "next/router";
import styles from "./style.module.css"
import { useAtom } from "jotai";
import { resendOtpCountDown } from "./state";
import { useState } from "react";
import Countdown from "react-countdown";

export default function Otp_verification() {
     const router = useRouter()


     const renderer = ({ hours, minutes, seconds, completed }:any) => {
          if (completed) {
            // Render a completed state
               return  (
                    <CustomTypography
                         sx={{
                              width: "100%",
                              textAlign: "right",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "19px",
                              color: "var(--wellighten_blue)"
                         }}
                    >
                         <Link href={"/auth/otp_verification"}>
                              Resend Token
                         </Link>
                    </CustomTypography>
               )
          } else {
            // Render a countdown
            return(
               <CustomTypography
                    sx={{
                         width: "100%",
                         textAlign: "right",
                         fontStyle: "normal",
                         fontWeight: 400,
                         fontSize: "16px",
                         lineHeight: "19px",
                         color: "red"
                    }}
               >
                    Resend token in&nbsp;
                    <span>{minutes}0:{seconds}</span>
               </CustomTypography>
            )
          }
     };
   
     const tokenForm :any = useFormik({
          initialValues : {
               valueOne: '',
               valueTwo: '',
               valueThree : '',
               valueFour: ''
          },
          validationSchema : yup.object({
               valueOne: yup.number().required().max(9),
               valueTwo: yup.number().required().max(9),
               valueThree : yup.number().required().max(9),
               valueFour: yup.number().required().max(9)
          }),
          onSubmit : (values)=>{
               console.log(values)
               router.push("/auth/login")
          },
     })
     return(
          <Box className={styles.otpVerificationMajorBox}>
               <Box className={styles.otpVerificationMinorBox}>
                    <Image src={"/padlock.svg"} width={80} height={90} alt="padlock"/>
                    <SizedVerticalBox py={5}/>
                    <CustomTypography
                         sx={{
                              fontFamily: 'Sofia Sans',
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "12px",
                              lineHeight: "14px",
                              color: "var(--wellighten_deeper_grey)",
                         }}
                    >
                         A  one-time password was sent to chiedozie121@gmail.com
                    </CustomTypography>
                    <SizedVerticalBox py={10}/>
                    <Box
                         sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "70%",
                              margin:"0 auto"
                         }}
                    >
                    {
                         Object.keys(tokenForm.values).map((property,index)=>(
                              <TextField 
                                   key={index}
                                   name={property}
                                   value={tokenForm.values[property]}
                                   // onChange={tokenForm.handleChange}
                                   onChange={(e : any)=>{
                                        tokenForm.setFieldValue(property.toString(),e.nativeEvent.data)
                                   }}
                                   onBlur= {tokenForm.handleBlur}
                                   placeholder="0"
                                   variant="filled"
                                   type={"number"}
                                  
                                   sx={{ 
                                        width  : "50px",
                                        height  : "60px",
                                        borderRadius : "10px",
                                        borderColor: "var(--wellighten_lightblue)",
                                        borderWidth: 0,
                                        backgroundColor: "var(--wellighten_lightblue)",
                                        display: "flex",
                                        alignItems:"center",
                                        alignSelf: "center"
                                   }}
                                   InputProps={{ 
                                        disableUnderline: true,
                                        style:{
                                             height:"100%",
                                        }
                                   }}    
                                   inputProps={{ 
                                        style:{
                                             fontSize : "30px",
                                             padding: "0",
                                             textAlign:"center"
                                        }
                                   }}
                              />
                         ))
                    }
                    </Box>    
                    <SizedVerticalBox py={5}/>

                    <CustomTypography
                         sx={{
                              width: "100%",
                              textAlign: "center",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "12px",
                              lineHeight: "19px",
                              color: "red",
                         }}
                    >
                         {tokenForm.errors.valueOne ? "Please enter the token" : tokenForm.errors.valueTwo ? "Please enter the token" :tokenForm.errors.valueThree ? "Please enter the token" :tokenForm.errors.valueFour ? "Please enter the token" : "" }
                              
                    </CustomTypography>

                    <SizedVerticalBox py={15}/>
                    
                    <PrimaryButton text="Autorize Email" onClick={tokenForm.submitForm} endIcon={true}/>
                  
                    <SizedVerticalBox py={5}/>
                   
                    <Countdown 
                         date={Date.now() + 30000}
                         renderer={renderer}
                         zeroPadTime={2}
                    />
               </Box>
          </Box>
    )
}