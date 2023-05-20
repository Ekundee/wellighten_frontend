import { AccountTabPaddedBox, SizedHorizontalBox, SizedVerticalBox } from "@/core/components/box";
import { PrimaryButton } from "@/core/components/buttons";
import { AccountTextbox } from "@/core/components/textboxes";
import { Box } from "@mui/material"
import { useFormik } from "formik";


export default function Deposit() {
     const depositFormConfig : any = useFormik({
          initialValues : {
               amount: "",
               cardNumber: "",
               expiryMonth: "",
               expiryYear: "",
               password: "",
               cvv: ""
          },
          onSubmit: (values)=>{
               console.log(values)
          }
     })
     const propertyNames = ["Amount", "Card Number", "Expiry Month", "Expiry Year", "Password", "CVV"]

     
     return(
          <AccountTabPaddedBox>
               {
                    Object.keys(depositFormConfig.initialValues).map((property,index)=>(
                         <Box key={index} py={1.5}>
                              {
                                   property != "password" ? 
                                   <AccountTextbox label={propertyNames[Object.keys(depositFormConfig.initialValues).indexOf(property)]} onBlur={depositFormConfig.handleBlur} onChange={depositFormConfig.handleChange} 
                                        name={property}
                                        errorMessage={depositFormConfig.errors[property]}
                                   />
                                   :
                                   <AccountTextbox label={property} type="password" onBlur={depositFormConfig.handleBlur} onChange={depositFormConfig.handleChange} 
                                        name={property}
                                        errorMessage={depositFormConfig.errors[property]}
                                   />
                              }
                         </Box>
                    ))
               }
               <SizedVerticalBox py={10}/>
               <PrimaryButton text="Deposit" iconsrc="/deposit.svg"/>
          </AccountTabPaddedBox>
     )
}