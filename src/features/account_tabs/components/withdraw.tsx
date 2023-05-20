import { AccountTabPaddedBox, SizedVerticalBox } from "@/core/components/box";
import { PrimaryButton } from "@/core/components/buttons";
import { AccountTextbox } from "@/core/components/textboxes";
import { Box } from "@mui/material"
import { useFormik } from "formik";


export default function Withdraw() {
     const withdrawFormConfig : any = useFormik({
          initialValues : {
               amount: "",
               bank: "",
               accountNumber: "",
               password: ""
          },
          onSubmit: (values)=>{
               console.log(values)
          }
     })
     const propertyNames = ["Amount", "Bank", "Account Number", "Password"]
     return(
          <AccountTabPaddedBox>
               {
                    Object.keys(withdrawFormConfig.initialValues).map((property,index)=>(
                         <Box key={index} py={1.5}>
                              {
                                   property != "password" ? 
                                   <AccountTextbox label={propertyNames[Object.keys(withdrawFormConfig.initialValues).indexOf(property)]} onBlur={withdrawFormConfig.handleBlur} onChange={withdrawFormConfig.handleChange} 
                                        name={property}
                                        errorMessage={withdrawFormConfig.errors[property]}
                                   />
                                   :
                                   <AccountTextbox label={property} type="password" onBlur={withdrawFormConfig.handleBlur} onChange={withdrawFormConfig.handleChange} 
                                        name={property}
                                        errorMessage={withdrawFormConfig.errors[property]}
                                   />
                              }
                         </Box>
                    ))
               }
               <SizedVerticalBox py={10}/>
               <PrimaryButton text="Withdraw" iconsrc="/withdraw.svg"/>
          </AccountTabPaddedBox>
     )
}