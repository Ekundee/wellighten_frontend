import Button from "@mui/material/Button";
import { ButtonProp } from "./interface";
import Avatar from "@mui/material/Avatar";
import { AppBar, Box, Typography } from "@mui/material";
import styles from "./style.module.css"
import { SizedHorizontalBox } from "../box";
import { useAtom } from "jotai";
import { navbarPropertyConfigAtom } from "./state";
import { tabAtom } from "@/features/tabs";




export function BottomNavbar (this: any) {
     const [,setTab] = useAtom(tabAtom)
     const [navbarPropertyConfig, setNavbarPropertyConfig] = useAtom(navbarPropertyConfigAtom)
     
     const handleSlider = (activeTab : any) =>{
          for(var property = 0; property < navbarPropertyConfig.length; property++){
               if(property == activeTab){
                    navbarPropertyConfig[property].active = 1.5
               }else{
                    navbarPropertyConfig[property].active = 1
               }
          }
          setNavbarPropertyConfig(navbarPropertyConfig)
          setTab(activeTab)
     }

     


     return(
               <Box className={styles.bottomNavbarBox}>
                    <Box
                         sx={{
                              width: "100%",
                              display: "grid",
                              gridTemplateColumns: `${navbarPropertyConfig[0].active}fr ${navbarPropertyConfig[1].active}fr ${navbarPropertyConfig[2].active}fr ${navbarPropertyConfig[3].active}fr`,
                              justifyContent: "space-between",
                              height: "50px",
                         }}
                    >
                         {
                              navbarPropertyConfig.map((property,index)=>(
                                   <Box
                                        key={index}
                                        sx={{
                                             display:"flex",
                                             justifyContent: "center",
                                             alignItems: "center"
                                        }}
                                        onClick={()=>handleSlider(index)}
                                   >
                                        <Avatar src={property.active == 1.5 ? property.whiteIcon : property.themeIcon} style={{width:"32px", height:"32px"}} />
                                        <SizedHorizontalBox px={2}/>
                                        <Typography
                                             sx={{
                                                  fontFamily: 'Open Sans',
                                                  fontStyle: "normal",
                                                  fontWeight: 700,
                                                  fontize: "15.54px",
                                                  lineHeight: "21px",
                                                  textAlign: "center",
                                                  letterSpacing: "-0.18315px",
                                                  color: "#FFFFFF",
                                             }}
                                        >
                                             {property.active == 1.5 && property.text}
                                        </Typography>
                                   </Box>
                              ))
                         }
                    </Box>

                    <Box
                         className={styles.slider}
                         sx={{      
                              transition: "all .5s",
                              left: `calc(15px + ${navbarPropertyConfig[0].active == 1.5 ? 3 : navbarPropertyConfig[1].active == 1.5 ? 23: navbarPropertyConfig[2].active ==1.5 ? 43 : navbarPropertyConfig[3].active == 1.5 ? 64 : 5}%)`
                         }}
                    >
                    </Box>
               </Box>
     )
}




// appbar 

export function TopAppbar (this: any) {
     return(
          <AppBar
          
          />
     )
}

