import PaymentIcon from '@mui/icons-material/Payment';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { AppBar, Avatar, Badge, Box, Divider, Switch, Tab, Toolbar, Typography } from '@mui/material';
import { SizedHorizontalBox, SizedVerticalBox } from '@/core/components/box';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useEffect } from "react"
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { useAtom } from 'jotai';
import { topAppBarTextAtom } from '@/core/components/navigation';
import { CustomTypography } from '@/core/components/minor';
import { useRouter } from 'next/router';


export default function Account() {
     const router = useRouter()

     const accountConfig : any = [
          [
               "Profile",
               [{
                    name: "Personal Information",
                    icon: <Person2OutlinedIcon sx={{ width: 24, height: 24}}/>,
                    link: "account_tab/personal_info"
               }]
          ],[
               "History",
               [{
                    name: "Diagnosis history",
                    icon: <MedicalServicesOutlinedIcon  sx={{ width: 24, height: 24}}/>
               },{
                    name: "Consultation history",
                    icon: <PersonAddAlt1OutlinedIcon  sx={{ width: 24, height: 24}}/>
               },{
                    name: "Transaction history",
                    icon: <HistoryIcon  sx={{ width: 24, height: 24}}/>
               }]
          ],[
               "Settings",
               [{
                    name: "Dark mode",
                    icon: <DarkModeOutlinedIcon  sx={{ width: 24, height: 24}}/>
               },{
                    name: "Change password",
                    icon: <LockResetOutlinedIcon  sx={{ width: 24, height: 24}}/>,
                    link: "account_tab/change_password"
               }]
          ],[
               "Payment",
               [{
                    name: "Deposit",
                    icon: <PaymentIcon  sx={{ width: 24, height: 24}}/>,
                    link: "account_tab/deposit"
               },{
                    name: "Withdraw",
                    icon: <GetAppOutlinedIcon  sx={{ width: 24, height: 24}}/>,
                    link: "account_tab/withdraw"
               },{
                    name: "Transfer",
                    icon: <SendOutlinedIcon  sx={{ width: 24, height: 24}}/>,
                    link: "account_tab/transfer"
               }]
          ],[
               "",
               [{
                    name: "Support & FAQs",
                    icon: <HelpOutlineIcon  sx={{ width: 24, height: 24}}/>
               },{
                    name: "Logout",
                    icon: <LogoutIcon  sx={{ width: 24, height: 24}}/>
               }]
          ]
     ]

  
     return(
          <Box
               sx={{
                    backgroundColor : "#EEEEEE",
                    width:"100%",
                    minHeight: "100%",
                    height: "calc(max-content)"
               }}
          >
               <SizedVerticalBox py={10}/>
               <Box>
                    {
                         accountConfig.map((section :any, index: number)=>(
                              <Box key={index}>
                                   <CustomTypography
                                        sx={{
                                             paddingTop: "20px",
                                             paddingBottom: "8px",
                                             paddingX: "5px",
                                             fontFamily: 'Sofia Sans',
                                             fontStyle: "normal",
                                             fontWeight: 600,
                                             fontSize: "14px",
                                             lineHeight: "17px",
                                             letterSpacing: "-0.18315px",
                                             textTransform: "uppercase"
                                        }}
                                   >
                                        {section[0]}
                                   </CustomTypography>
                                   <Divider/>
                                   {
                                        section[1].map((property : any, index2: any)=>(
                                             <Box
                                                  key={index2}
                                                  sx={{
                                                       display: "flex",
                                                       justifyContent: "space-between",
                                                       backgroundColor : "var(--wellighten_white)",
                                                       alignItems: "center",
                                                       paddingX: "20px",
                                                       paddingY : "15px",
                                                       borderBottom: "1px solid #c5c5c5"

                                                  }}
                                                  onClick={()=>router.push(property.link)}
                                             >
                                                  <Box
                                                       sx={{
                                                            display : "flex",
                                                            alignItems: "center",
                                                       }}
                                                  >
                                                       {property.icon}
                                                       <SizedHorizontalBox px={10}/>
                                                       <CustomTypography>
                                                            {property.name}
                                                       </CustomTypography>
                                                  </Box>
                                                  {property.name == "Dark mode" ? <Switch/> : <ChevronRightIcon/>}
                                             </Box>
                                        ))
                                   }
                              </Box>
                         ))
                    }
                    <SizedVerticalBox py={20}/>
               </Box>
          </Box>
    )
}