import Avatar from "@mui/material/Avatar";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import styles from "./style.module.css"
import { SizedHorizontalBox } from "../box";
import { atom, useAtom } from "jotai";
import { navbarPropertyConfigAtom } from "./state";
import { tabAtom } from "@/features/tabs";
import { ArrowBackIos } from "@mui/icons-material";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import Link from "next/link";
import { useRouter } from "next/router";




export function BottomNavbar (this: any) {
     const [,setTab] = useAtom(tabAtom)
     const [navbarPropertyConfig, setNavbarPropertyConfig] = useAtom(navbarPropertyConfigAtom)
     const [,setTopAppBarText] = useAtom(topAppBarTextAtom)
     
     const handleSlider = (activeTab : any) =>{
          for(var property = 0; property < navbarPropertyConfig.length; property++){
               if(property == activeTab){
                    navbarPropertyConfig[property].active = 1.5
               }else{
                    navbarPropertyConfig[property].active = 1
               }
          }
          setTopAppBarText(navbarPropertyConfig[activeTab].text)
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
export const topAppBarTextAtom = atom("Text"); 
export function TopAppbar ({ isBack } : any) {
     const [topAppBarText] = useAtom(topAppBarTextAtom)
     const router = useRouter()
     return(
          <AppBar position='static'>
               <Toolbar
                    sx={{
                         justifyContent: "space-between",
                         backgroundColor: "white",
                         color: "var(--wellighten_black)",
                         backgroundImage: "linear-gradient(60deg,var(--wellighten_blue),var(--wellighten_blue),var(--wellighten_opaque_blue),var(--wellighten_opaque_purple))"
                    }}
               >
                    <Box
                         sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center"
                         }}
                    >
                         {
                              isBack &&
                              <IconButton
                                   size="large"
                                   edge="start"
                                   color="inherit"
                                   aria-label="menu"
                                   sx={{ mr: 2 }}
                                   onClick={router.back}
                              >
                                   <ArrowBackIos/>
                              </IconButton>
                         }
                         <Typography
                              // sx={{color : "black"}}
                         >
                              {topAppBarText}
                         </Typography>
                    </Box>
                    <NotificationsActiveOutlinedIcon sx={{color:"white"}}/>
               </Toolbar>
          </AppBar>
     )
}

