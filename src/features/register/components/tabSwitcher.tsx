import { CustomTypography } from "@/core/components/minor";
import { Box } from "@mui/material";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import {useEffect, useState } from "react"
import { authTabAtom } from "../state";

export default function TabSwitcher () {
     const router = useRouter()
     const [authTab, setAuthTab] : any = useAtom(authTabAtom)

     useEffect(()=>{
          const authtab : any = router.query.authtab
          const authtabs = ["user", "consultant"]
          if(authtabs.includes(authtab)){
               setAuthTab(authtab)
          }
     },[router])

     function handleSwitcher (authtab : string){
          router.push(`${router.pathname}?authtab=${authtab}`)
     }
     return (
          <Box
               sx={{
                    display: "flex",
                    borderRadius: "20px",
                    py: 2
               }}
          >
               <Box
                    sx={{
                         width: "50%",
                         backgroundColor : authTab == "user" ? "var(--wellighten_blue)" :  "lightgrey",
                         textAlign: "center",
                         color:  authTab == "user" ? "white" : "black",
                         fontSize: "1.3",
                         alignItems: "center",
                         display: "flex",
                         justifyContent: "center",
                         borderTopLeftRadius: "20px",
                         borderBottomLeftRadius: "20px",
                         py: "10px",
                    }}
                    onClick={()=> handleSwitcher("user")}
               >
                    <CustomTypography
                         sx={{
                              fontWeight: "600"
                         }}    
                    >
                         USER
                    </CustomTypography>
               </Box>
               <Box
                    sx={{
                         width: "50%",
                         backgroundColor : authTab == "consultant" ? "var(--wellighten_blue)" : "lightgrey",
                         textAlign: "center",
                         color:  authTab == "consultant" ? "white" : "black",
                         fontSize: "1.3",
                         alignItems: "center",
                         display: "flex",
                         justifyContent: "center",
                         borderTopRightRadius: "20px",
                         borderBottomRightRadius: "20px",
                         py: "10px",
                    }}
                    onClick={()=> handleSwitcher("consultant")}

               >
                    <CustomTypography
                         sx={{
                              fontWeight: "600"
                         }}
                    >
                         CONSULTANT
                    </CustomTypography>
               </Box>
          </Box>
     )
}