import Button from "@mui/material/Button";
import { ButtonProp } from "./interface";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { SettingsInputComponent } from "@mui/icons-material";


export function PrimaryButton (buttonProp: any) {
     const {  text, title, styles, endIcon=true, startIcon=false, iconsrc} = buttonProp
    return(
          <Button 
               title={title ? title : text}
               sx={{
                    color : "var(--wellighten_white)",
                    backgroundImage : "linear-gradient(45deg,var(--wellighten_blue),var(--wellighten_blue),var(--wellighten_blue),var(--wellighten_opaque_purple))",
                    paddingX : 4,
                    paddingY : 2,
                    width : "100%",
                    borderRadius: "10px",
                    ...styles
               }}
               {...buttonProp}

               endIcon={endIcon == false ? false : <Avatar src={iconsrc ? iconsrc : '/forward_arrows.svg'}
                    style={{
                         position:"absolute",
                         width: "24px",
                         height: "24px",
                         right: 10, 
                         alignSelf: "center"
                    }} 
               />}

               startIcon={startIcon == false ? false: <Avatar src={iconsrc ? iconsrc : '/forward_arrows.svg'}
                    style={{
                         position:"absolute",
                         width: "24px",
                         height: "24px",
                         left: 10, 
                         alignSelf: "center"
                    }} 
               />}
          >
               {text ? text : "Primary Button"}
          </Button>
    )
}

export function SecondaryButton ({ text, title, styles, endIcon=false, startIcon=false, iconsrc} : ButtonProp) {
     return(
          <Button 
               title={title ? title : text}
               sx={{
                    color: "var(--wellighten_black)",
                    backgroundColor: "var(--wellighten_white)", 
                    paddingX : 4,
                    paddingY : 2,
                    borderRadius: "10px",
                    border : "1px solid green",
                    width : "100%",
                    ...styles
               }}
          >
               {text ? text : "Primary Button"}
          </Button>
     )
}

export function OauthButton ({ text, title, styles, endIcon=false, startIcon=false, iconsrc} : any) {
     return(
          <Button 
               title={title ? title : text}
               sx={{
                    color: "var(--wellighten_black)",
                    backgroundColor: "var(--wellighten_lightblue)", 
                    paddingX : 4,
                    paddingY : 2,
                    borderRadius: "10px",
                    width : "100%",
                    textTransform: 'none',
                    ...styles
               }}
               startIcon={startIcon == false ? false: <Avatar src={iconsrc ? iconsrc : '/forward_arrows.svg'}
                    style={{
                         width: "30px",
                         height: "30px",
                         alignSelf: "center"
                    }} 
               />}

          >
               <Typography
                    sx={{
                         fontStyle: "normal",
                         fontWeight: 500,
                         fontSize: "14px",
                         lineHeight: "15px",
                    }}
               >
                    {text ? text : "Oauth Button"}
               </Typography>
          </Button>
     )
}