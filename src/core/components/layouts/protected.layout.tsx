import { getCapacitorStorageData } from "@/core/utils/utilFunction";
import { Box } from "@mui/material"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function ProtectedScreen ( { children } : any){
     const [showScreen, setShowScreen] = useState(false)
     
     const router = useRouter()
     const protectedScreenConfig = [
          {
               name : "tabs",
               route : "/tabs"
          },
     ]

     useEffect(()=>{
          const routeScreenpath = protectedScreenConfig.map((route)=> route.route)
          if(routeScreenpath.includes(router.pathname)){
               getCapacitorStorageData("wellighton_authtoken").then((value)=>{
                    if (value != null){
                         setShowScreen(true)
                    }else{
                         router.push("/auth/login") 
                    }
               })
          }else{
               setShowScreen(true)
          }

          console.log(router.pathname)
     })
     return(
          <Box>
               {
                    showScreen ? 
                    <>
                         {children}
                    </>
                    : 
                    <>
                    </>
               }
          </Box>
     )
}