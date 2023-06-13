import { AccountTabPaddedBox } from "@/core/components/box";
import { PrimaryButton, SecondaryButton } from "@/core/components/buttons";
import { AccountTextbox } from "@/core/components/textboxes";
import { PasswordOutlined } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material"
import { useFormik } from "formik";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { IChangePassword } from "@/api/authorization/interface";
import { ChangePasswordAPI } from "@/api/authorization";
import { useAtom } from "jotai";
import { snackBarMessageAtom, snackBarOpenAtom, snackBarSeverityAtom } from "@/core/components/popups/state";
import { alertSeverity } from "@/core/utils/enum";

export default function ChangePassword() {
     
     const [snackBarOpenState , setSnackBarOpenState] : any= useAtom(snackBarOpenAtom)
     const [snackBarMessageState , setSnackBarMessageState] : any = useAtom(snackBarMessageAtom)
     const [snackBarSeverityState , setSnackBarSeverityState] : any = useAtom(snackBarSeverityAtom)

     const changePasswordFormConfig :any = useFormik({
          initialValues : {
               oldPassword: "",
               newPassword: "",
               confirmPassword: ""
          },
          onSubmit: async (values)=>{
               const {oldPassword, newPassword} = values
               const model : IChangePassword = { 
                    OldPassword : oldPassword,
                    NewPassword : newPassword
               }
               const changePassword = await ChangePasswordAPI(model)

               if(changePassword.Status != 200){
                    setSnackBarSeverityState(alertSeverity.ERROR)
               }else{
                    setSnackBarSeverityState(alertSeverity.SUCCESS)
               }
               setSnackBarMessageState(changePassword?.Message)
               setSnackBarOpenState(true)
               console.log(changePassword)
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
               <Box
                    sx={{
                         paddingTop: "15px"
                    }}
               >
                    <PrimaryButton text="Save" onClick={changePasswordFormConfig.submitForm}/>
               </Box>
          </AccountTabPaddedBox>
     )
}