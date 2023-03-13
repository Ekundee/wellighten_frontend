import Button from "@mui/material/Button";
import { ButtonProp } from "./interface";
import Avatar from "@mui/material/Avatar";
import { Box, Typography } from "@mui/material";
import { SettingsInputComponent } from "@mui/icons-material";
import { useState } from "react"
import { display } from "@mui/system";

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

export function SecondaryButton ({ text, title, styles, endIcon=false, startIcon=false, iconsrc} : any) {
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


export function PicButton (buttonProp: any) {
     const { imagesrc, width, height } = buttonProp

     const [ scaleState, setScaleState ] = useState(1)
     const [ opacityState, setOpacityState ] = useState(1)
     return(
          <Box
               sx={{
                    backgroundImage: `url(${imagesrc})`,
                    width : width ? `${width}px` :  "200px",
                    height : height ? `${height}px` :  "50px",
                    scale : `${scaleState}`,
                    opacity: opacityState,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
               }}
               
               onMouseDown={()=>{
                    setScaleState(0.9)
                    setTimeout(()=>{
                         setScaleState(1)
                    },100)
               }}

               onMouseOver={()=>{
                    setOpacityState(0.7)
               }}
               onMouseLeave={()=>{
                    setOpacityState(1)
               }}

               {...buttonProp}
          >             
          </Box>
     )
}