import { OauthButton, PrimaryButton, SecondaryButton } from "@/core/components/buttons";
import { Alert, Avatar, Box, CircularProgress, IconButton, MenuItem, Select, Snackbar, TextField, Typography } from "@mui/material";
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
import { useEffect, useState } from "react"
import { snackBarMessageAtom, snackBarOpenAtom, snackBarSeverityAtom } from "@/core/components/popups/state";
import { useAtom } from "jotai";
import TabSwitcher from "./components/tabSwitcher";
import { authTabAtom } from "./state";
import { logDeviceInfo } from "@/core/utils/utilFunction";

export default function Register() {
     const [ , setSnackBarOpenState] : any= useAtom(snackBarOpenAtom)
     const [ , setSnackBarMessageState] : any = useAtom(snackBarMessageAtom)
     const [ , setSnackBarSeverityState] : any = useAtom(snackBarSeverityAtom)
     const [authTab, setAuthTab] : any = useAtom(authTabAtom)
     const [specialization, setSpecialization] : any = useState("Pick specialization")
     const [addrState, setAddrState] : any = useState("Location")
     const [ registerButtonLoader, setRegisterButtonLoader ] = useState(false)
     const consultantSpecializationConfig = [
          {
               label : "Pick specialization",
               value : "Pick specialization",
               description : "Pick a specialization"
          },   {
               label : "Cardiologist",
               value : "Cardiologist",
               description : "Specializes in the diagnosis and treatment of heart-related conditions."
          },   {
               label : "Dermatologist",
               value : "Dermatologist",
               description : "Specializes in the diagnosis and treatment of skin disorders, including skin cancer, acne, and eczema."
          },   {
               label : "Gastroenterologist",
               value : "Gastroenterologist",
               description : "Specializes in the diagnosis and treatment of digestive system disorders, such as gastrointestinal bleeding, ulcers, and irritable bowel syndrome."
          },   {
               label : "Neurologist",
               value : "Neurologist",
               description : "Specializes in the diagnosis and treatment of disorders of the nervous system, including Parkinson's disease, epilepsy, and stroke."
          },   {
               label : "Gynecologist",
               value : "Gynecologist",
               description : "Specializes in women's reproductive health, including pregnancy, childbirth, and disorders of the female reproductive system."
          },  {
               label : "Orthopedic Surgeon",
               value : "Orthopedic_Surgeon",
               description : "Specializes in the diagnosis and surgical treatment of musculoskeletal conditions, such as fractures, joint injuries, and sports injuries."
          },  {
               label : "Pediatrician",
               value : "Pediatrician",
               description : " Specializes in the medical care of infants, children, and adolescents, including routine check-ups, vaccinations, and treatment of childhood illnesses."
          },  {
               label : "Psychiatrist",
               value : "Psychiatrist",
               description : "Specializes in the diagnosis and treatment of mental disorders, including depression, anxiety, and schizophrenia."
          },  {
               label : "Pulmonologist",
               value : "Pulmonologist",
               description : "Specializes in the diagnosis and treatment of respiratory disorders, such as asthma, chronic obstructive pulmonary disease (COPD), and sleep apnea."
          },  {
               label : "Urologist",
               value : "Urologist",
               description : "Specializes in the diagnosis and treatment of disorders of the urinary tract and male reproductive system, including urinary tract infections, kidney stones, and prostate issues."
          },
     ]
     
     const states = ["Location",
          "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
          "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", 
          "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
          "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
          "Rivers", "Sokoto", "Taraba", "Yobe",
          "Zamfara"]
     const router = useRouter()

     const registerFormConfig =[
          {
               placeholder: 'Firstname',
               icon: '/name_icon.svg',
          }, {
               placeholder: 'Lastname',
               icon: '/name_icon.svg',
          }, {
               placeholder: 'abc_test@gmail.com',
               icon: '/email.svg',
          }, {
               placeholder: '*********',
               icon: '/lock_icon.svg',
          },{
               placeholder: 'License',
               icon: '/license.svg',
          }
     ]
   
     const registerForm : any = useFormik({
          initialValues : {
               firstname: '',
               lastname: '',
               email : '',
               password: '',
               license: '',
          },
          validationSchema : yup.object({
               firstname: yup.string().required("Firstname is required"),
               lastname: yup.string().required("Lastname is required"),
               email : yup.string().required("Email is required").email("Invalid Email"),
               password: yup.string().required("Password is required").min(8, "Password must be more than 8 characters"),
               license: yup.string().min(10, "License number must be 10 characters").min(10, "License number must be 10 characters")
          }),
          onSubmit : async (values)=>{
               setRegisterButtonLoader(true)
               const conditionalSpecialization = authTab == "user" ? null :  specialization
               if(addrState == "Location"){
                    setSnackBarSeverityState(alertSeverity.ERROR)
                    setSnackBarMessageState("All fields are required")     
                    setSnackBarOpenState(true)
                    return 0;
               }

               if(authTab == "consultant" && (specialization == "Pick specialization" || values.license == "")){
                    setSnackBarSeverityState(alertSeverity.ERROR)
                    setSnackBarMessageState("All fields are required")     
                    setSnackBarOpenState(true)
                    return 0;
               }

               const signupDTO : ISignUp = {
                    Firstname: values.firstname,
                    Lastname: values.lastname,
                    Role: authTab == "user" ? userRole.USER : userRole.CONSULTANT,
                    Email: values.email,
                    Password: values.password,
                    State: addrState,
                    LicenseNumber : parseInt(values.license),
                    Specialization: conditionalSpecialization
               }
               
               const signup = await SignUpAPI(signupDTO);
               if(signup.Status != 200){
                    setSnackBarSeverityState(alertSeverity.ERROR)
               }else{
                    setSnackBarSeverityState(alertSeverity.SUCCESS)
               }

               setTimeout(()=>{
                    setRegisterButtonLoader(false)
                    setSnackBarMessageState(signup?.Message)
                    setSnackBarOpenState(true)
     
                    if(signup.Status == 200){
                         return router.push("/auth/otp_verification")
                    }
               },2000)

             
          },
     })

     
     useEffect(()=>{
          logDeviceInfo().then((response)=>{
               console.log(response)
          })
          setAuthTab(router.query.authtab)   
     },[router])
     return(
          <Box>               
               <Box className={styles.registerIllusBox}>
                    <Box className={styles.registerIllus}></Box>
               </Box>


               <TabSwitcher/>
                         
               <LogoNText text="Sign up"/>             
               {
                    Object.keys(registerForm.values).map((property,index)=>(
                         <Box key={index} className={styles.textFieldBox}
                              sx={{
                                   display : property == "license"  && authTab == "user" ? "none" : "flex"
                              }}
                         >
                              <Avatar src={registerFormConfig[index].icon} sx={{width : "24px", height:"24px"}} />
                              <SizedHorizontalBox px={3}/>
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

               <Box className={styles.textFieldBox}>
                    <Avatar src={"/location.svg"} sx={{width : "24px", height:"24px"}} />
                    <SizedHorizontalBox px={3}/>
                    <TextField
                         placeholder="ji"
                         select
                         value={addrState}
                         onChange={(e)=>{console.log(e.target.value);setAddrState(e.target.value)}}
                         sx={{
                              width: "100%",
                              py: 1
                         }}
                         variant="standard"
                    >
                              {
                              states.map((state)=>(
                                   <MenuItem 
                                        value={state}
                                   >{state}</MenuItem>
                              ))
                         }
                    </TextField>
               </Box>

               {
                    authTab == "consultant" &&
                    <Box className={styles.textFieldBox}>
                         <Avatar src={"/specialization.svg"} sx={{width : "24px", height:"24px"}} />
                         <SizedHorizontalBox px={3}/>
                         <Select
                              placeholder="ji"
                              value={specialization}
                              onChange={(e)=>{console.log(e.target.value);setSpecialization(e.target.value)}}
                              sx={{
                                   width: "100%",
                                   py: 1
                              }}
                              variant="standard"
                         >
                              {
                                   consultantSpecializationConfig.map((specialization)=>(
                                        <MenuItem 
                                             value={specialization.value}
                                        >{specialization.label}</MenuItem>
                                   ))
                              }
                         </Select>
                    </Box>
               }


               <CustomTypography className={styles.termsNConditionFullText}>
                    By creating account, you agree to our <span className={styles.termsNConditionText}><Link href={"#"}>Terms and condition</Link></span> and <span className={styles.termsNConditionText}><Link href={"#"}>Privacy policy</Link></span>
               </CustomTypography>

               <PrimaryButton onClick={registerForm.submitForm}
                    disabled={registerButtonLoader ? true : false}
               >
                    {
                         registerButtonLoader ? 
                         <CircularProgress
                              sx={{
                                   color : "white"
                              }}
                         />
                         :   
                         "Create Account"
                    }
               </PrimaryButton>
               <Or/>
               <OauthButton text="Sign up with Google" startIcon={true} iconsrc={"/googleIcon.svg"} />

               <CustomTypography className={styles.alreadyRegisteredFullText}> 
                    Already registered? &nbsp;
                    <Link href={"/auth/login?authtab=user"}>
                         Login
                    </Link>
               </CustomTypography>

          </Box>
    )
}