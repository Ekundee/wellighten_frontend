import { AccountTabPaddedBox } from "@/core/components/box";
import { PrimaryButton, SecondaryButton } from "@/core/components/buttons";
import { AccountTextbox } from "@/core/components/textboxes";
import { Box } from "@mui/material"
import { useFormik } from "formik";


export default function PersonalInformation() {
     const personalInfomationFormConfig : any = useFormik({
          initialValues : {
               username: "",
               firstname: "",
               lastname: "",
               email: "",
               phoneNo: "",
               role: ""
          },
          onSubmit: (values)=>{
               console.log(values)
          }
     })
     const propertyNames = ["Username", "Firstname", "Lastname", "Email", "Phone No","Role"]

     return(
          <AccountTabPaddedBox>
               {
                    Object.keys(personalInfomationFormConfig.initialValues).map((property,index)=>(
                         <Box key={index} py={1.5}>
                              {
                                   property != "password" ? 
                                   <AccountTextbox label={propertyNames[Object.keys(personalInfomationFormConfig.initialValues).indexOf(property)]} onBlur={personalInfomationFormConfig.handleBlur} onChange={personalInfomationFormConfig.handleChange} 
                                        name={property}
                                        errorMessage={personalInfomationFormConfig.errors[property]}
                                   />
                                   :
                                   <AccountTextbox label={property} type="password" onBlur={personalInfomationFormConfig.handleBlur} onChange={personalInfomationFormConfig.handleChange} 
                                        name={property}
                                        errorMessage={personalInfomationFormConfig.errors[property]}
                                   />
                              }
                         </Box>
                    ))
               }
               <Box
                    sx={{
                         display: "flex",
                         gap: "20px",
                         paddingTop: "15px"
                    }}
               >
                    <PrimaryButton text="Save"/>
                    <SecondaryButton text="Edit"/>
               </Box>
          </AccountTabPaddedBox>
     )
}