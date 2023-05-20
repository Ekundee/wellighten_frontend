import { Box, TextField } from "@mui/material";
import { styled, withStyles } from "@mui/styles";
import { FieldsTextFieldProps } from "@mui/x-date-pickers/internals";
import { Sofia_Sans } from "next/font/google";
import { IAccountTextbox } from "./interface";
import { CustomTypography } from "../minor";

const sofia_Sans = Sofia_Sans({ subsets: ['latin'] })



const style = {
     "& .MuiOutlinedInput-root": {
       "&.Mui-focused fieldset": {
         borderColor: "transparent"
       }
     }
   }    
   

export const AccountTextbox = (accountTextboxProp : IAccountTextbox) =>{
     const { label, errorMessage } = accountTextboxProp
     return(
          <Box
               sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column"
               }}
          >
               <TextField
                    label={label != null ? label : "Label"}
                    InputLabelProps={{
                         style: {
                              paddingLeft: "10px",
                              paddingRight: "10px",
                              backgroundColor: "white",
                              color: "var(--wellighten_blue)",
                              fontWeight: "600",
                              fontSize: "1.1rem"
                         }
                    }}
                    sx={{
                         border: "1.5px solid var(--wellighten_blue)",
                         backgroundColor: "#F9F9FF",
                         borderRadius: "10px",
                         width: "100%",
                         ...style
                    }}
                    focused={true}
                    {...accountTextboxProp}
               />
               <CustomTypography
                    sx={{
                         color: "red",
                         fontSize: "0.8rem"
                    }}
               >
                    {errorMessage && errorMessage}
               </CustomTypography>
          </Box>
     )
}