import Button from "@mui/material/Button";
import { ButtonProp } from "./interface";
import Avatar from "@mui/material/Avatar";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { SettingsInputComponent } from "@mui/icons-material";
import { useState } from "react"
import { display } from "@mui/system";
import { CustomTypography } from "../minor";
import EastIcon from '@mui/icons-material/East';



export function PrimaryButton (buttonProp: any) {
     var {  text, title, styles, endIcon=true, startIcon=false, iconsrc, children} = buttonProp
    return(
          <Button 
               title={title ? title : text}
               sx={{
                    color : "var(--wellighten_white)",
                    backgroundImage : "linear-gradient(45deg,var(--wellighten_blue),var(--wellighten_blue),var(--wellighten_blue),var(--wellighten_opaque_purple))",
                    paddingX : 4,
                    paddingY : 2,
                    width : "100%",
                    textTransform: 'none',
                    borderRadius: "10px",
                    fontSize: "1rem",
                    ...styles
               }}
               {...buttonProp}

               endIcon={endIcon == false ? false : <Avatar src={iconsrc ? iconsrc : '/forward_arrows.svg'}
                    style={{
                         position:"absolute",
                         width: "24px",
                         height: "24px",
                         right: 10, 
                         alignSelf: "center",
                         borderRadius: "0px"
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
              { children  && children}
          </Button>
    )
}

export function SecondaryButton (buttonProp : any) {
     const {  text, title, styles, endIcon=true, startIcon=false, iconsrc} = buttonProp
     return(
          <Button 
               title={title ? title : text}
               sx={{
                    color: "var(--wellighten_blue)",
                    backgroundColor: "var(--wellighten_white)", 
                    paddingX : 4,
                    paddingY : 2,
                    borderRadius: "10px",
                    border : "2px solid var(--wellighten_blue)",
                    width : "100%",
                    textTransform: 'none',
                    ...styles
               }}
               {...buttonProp}

               endIcon={endIcon == false ? false : <Avatar src={iconsrc ? iconsrc : '/edit.svg'}
                    style={{
                         position:"absolute",
                         width: "24px",
                         height: "24px",
                         right: 10, 
                         alignSelf: "center",
                         borderRadius: "0px"
                    }} 
               />}

               startIcon={startIcon == false ? false: <Avatar src={iconsrc ? iconsrc : '/edit.svg'}
                    style={{
                         position:"absolute",
                         width: "24px",
                         height: "24px",
                         left: 10, 
                         alignSelf: "center"
                    }} 
               />}
          >
               {text ? text : "Secondary Button"}
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
                    fontSize: "1rem",
                    ...styles
               }}
               startIcon={startIcon == false ? false: <Avatar src={iconsrc ? iconsrc : '/forward_arrows.svg'}
                    style={{
                         width: "30px",
                         height: "30px",
                         alignSelf: "center",
                         marginRight: "5px"
                    }} 
               />}

          >
               {text ? text : "Oauth Button"}
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

export function EastArrowButton ({onclick} : any){
     return(
          <IconButton
               sx={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "65px",
                    backgroundColor: "#4E27EB",
                    position: "fixed",
                    zIndex: "2",
                    bottom: "30px",
                    right: "30px",
                    boxShadow: "0px 1px 5px 1px grey"
               }}
               onClick={onclick}
          >
               <EastIcon
                    sx={{
                         color: "white",
                         fontSize: "40px",
                         borderRadius: "15px"
                    }}
               />
          </IconButton>
     )
}