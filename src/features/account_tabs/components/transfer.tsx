import { AccountTabPaddedBox, SizedVerticalBox } from "@/core/components/box";
import { PrimaryButton } from "@/core/components/buttons";
import { AccountTextbox } from "@/core/components/textboxes";
import { Box } from "@mui/material"
import { useFormik } from "formik";


export default function Transfer() {
     const transferFormConfig : any = useFormik({
          initialValues : {
               username: "",
               amount: "",
               password: ""
          },
          onSubmit: (values)=>{
               console.log(values)
          }
     })
     const propertyNames = ["Username", "Amount", "Password"]

     
     return(
          <AccountTabPaddedBox>
               {
                    Object.keys(transferFormConfig.initialValues).map((property,index)=>(
                         <Box key={index} py={1.5}>
                              {
                                   property != "password" ? 
                                   <AccountTextbox label={propertyNames[Object.keys(transferFormConfig.initialValues).indexOf(property)]} onBlur={transferFormConfig.handleBlur} onChange={transferFormConfig.handleChange} 
                                        name={property}
                                        errorMessage={transferFormConfig.errors[property]}
                                   />
                                   :
                                   <AccountTextbox label={property} type="password" onBlur={transferFormConfig.handleBlur} onChange={transferFormConfig.handleChange} 
                                        name={property}
                                        errorMessage={transferFormConfig.errors[property]}
                                   />
                              }
                         </Box>
                    ))
               }
               <SizedVerticalBox py={10}/>
               <PrimaryButton text="Transfer" iconsrc="/transfer.svg"/>
          </AccountTabPaddedBox>
     )
}