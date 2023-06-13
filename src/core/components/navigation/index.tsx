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
import { CustomTypography } from "../minor";
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';


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
                                        <CustomTypography
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
                                        </CustomTypography>
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
     const [tab, setTab] = useAtom(tabAtom)
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
                                   // sx={{ mr: 2 }}
                                   onClick={()=> { setTab(0); router.back}}
                              >
                                   <ArrowBackIos/>
                              </IconButton>
                         }
                         <CustomTypography
                              // sx={{color : "black"}}
                              fontSize={"1.2rem"}
                              fontWeight={700}
                              
                         >
                              {topAppBarText}
                         </CustomTypography>
                    </Box>
                    <NotificationsActiveOutlinedIcon sx={{color:"white", fontSize:"35px"}}/>
               </Toolbar>
          </AppBar>
     )
}

export function ChatNavigationBar ({profilePic, name, activeStatus} : any) {
     const router = useRouter()
     return (
          <AppBar position='static'>
          <Toolbar
               sx={{
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    color: "var(--wellighten_black)",
                    boxShadow: "0px 0.1px 10px 1px rgba(0,0,0,0.32)",
                    py: "20px",
               }}
          >
               <Box
                    sx={{
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                         width: "100%",
                         gap: "10px"
                    }}
               >
                    <IconButton
                         size="large"
                         edge="start"
                         color="inherit"
                         aria-label="menu"
                         sx={{ color: "black" }}
                         onClick={router.back}
                    >
                         <ArrowBackIos/>
                    </IconButton>

                    <Avatar src="/logo.svg"/> 

                    <Box
                         sx={{
                              display: "flex",
                              flexDirection: "column",
                              flexGrow: 1
                         }}
                    >
                         <CustomTypography
                              sx={{color : "black"}}
                              fontSize={"1.2rem"}
                              fontWeight={700}
                              
                         >
                              {name}
                         </CustomTypography>

                         <CustomTypography
                              sx={{color : "green"}}
                              fontSize={"1rem"}
                         >
                              {activeStatus}
                         </CustomTypography>
                    </Box>

                    <Box
                         sx={{
                         }}
                    >                    
                         <IconButton>
                              <CallIcon sx={{ fontSize: "35px" }}/>
                         </IconButton>
                         <IconButton>
                              <MoreVertIcon sx={{ fontSize: "35px" }}/>
                         </IconButton>
                    </Box>
               </Box>
          </Toolbar>
     </AppBar>
     )
}