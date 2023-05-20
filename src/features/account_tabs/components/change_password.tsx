import { AccountTabPaddedBox } from "@/core/components/box";
import { PrimaryButton, SecondaryButton } from "@/core/components/buttons";
import { AccountTextbox } from "@/core/components/textboxes";
import { PasswordOutlined } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material"
import { useFormik } from "formik";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function ChangePassword() {
     
     const changePasswordFormConfig : any = useFormik({
          initialValues : {
               oldPassword: "",
               newPassword: "",
               confirmPassword: ""
          },
          onSubmit: (values)=>{
               console.log(values)
          }
     })
     const propertyNames = ["Old Password", "New password", "Confirm Password"]

     return(
          <AccountTabPaddedBox>
               {
                    Object.keys(changePasswordFormConfig.initialValues).map((property,index)=>(
                         <Box key={index} py={1.5}>
                              {
                                   ["oldPassword", "newPassword", "confirmPassword"].includes(property) == false ? 
                                   <AccountTextbox label={propertyNames[Object.keys(changePasswordFormConfig.initialValues).indexOf(property)]} onBlur={changePasswordFormConfig.handleBlur} onChange={changePasswordFormConfig.handleChange} 
                                        name={property}
                                        errorMessage={changePasswordFormConfig.errors[property]}
                                   />
                                   :
                                   <AccountTextbox label={propertyNames[Object.keys(changePasswordFormConfig.initialValues).indexOf(property)]} type="password" onBlur={changePasswordFormConfig.handleBlur} onChange={changePasswordFormConfig.handleChange} 
                                        name={property}
                                        errorMessage={changePasswordFormConfig.errors[property]}
                                        
                                   />
                              }
                         </Box>
                    ))
               }
               <TextField
                    InputProps={{
                         endAdornment: <IconButton>
                              <VisibilityOutlinedIcon/>
                         </IconButton>
                    }}
               />
               <Box
                    sx={{
                         paddingTop: "15px"
                    }}
               >
                    <PrimaryButton text="Save"/>
               </Box>
          </AccountTabPaddedBox>
     )
}