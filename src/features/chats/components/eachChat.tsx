import { CustomTypography } from "@/core/components/minor";
import { Box, Avatar } from "@mui/material"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export function EachChat ({config} : any) {
     const { id, name, lastTruncatedMessage, lastMessageTime, profilePic } = config
     const todayTime = new Date(new Date().toDateString()).getTime()
     const router = useRouter()

     const handleShowChat = () =>{
          router.push(`/chat/${id}`)
     }

     const [chatTime, setChatTIme] : any = useState()

     useEffect(()=>{
          console.log(config)
          const time = (new Date(lastMessageTime).toLocaleString()).split(", ")
          // const time = (new Date(lastMessageTime).toLocaleString()).split(", ")[1].split(":")
          const date = (new Date(lastMessageTime).toLocaleString()).split(", ")[0].split("/")
          // console.log((new Date().toLocaleString()).split(", ")[0] + ", 00:00:00")
          // console.log(new Date((new Date().toLocaleString()).split(", ")[0] + ", 00:00:00").getTime())
          // console.log(new Date((new Date().toLocaleString()).split(", ")[0] + ", 23:58:00").getTime())
          // console.log("1   : " + new Date("07/06/2023, 17:54:46").getTime())
          // console.log("2   : " + new Date(lastMessageTime).getTime())
          // console.log(new Date((new Date().toLocaleString()).split(", ")[0] + ", 00:00:00").getTime() > new Date("07/06/2023, 17:54:46").getTime())
          // console.log(new Date((new Date().toLocaleString()).split(", ")[0] + ", 00:00:00").getTime() > new Date(lastMessageTime).getTime())
          // console.log(new Date((new Date().toLocaleString()).split(", ")[0]).getTime() + " : " + new Date(lastMessageTime).getTime() )
          if (new Date(lastMessageTime).getTime() < new Date((new Date().toLocaleString()).split(", ")[0] + ", 00:00:00").getTime() ){
               setChatTIme(time[0] + ":" + time[1])
          }else{
               setChatTIme(date[0] + "/" + date[1])
          }
     },)

     return (
          <Box 
               sx={{
                    display: "flex",
                    borderBottom: "1px solid gray",
                    gap: "15px",
                    py:"25px",
                    px:"15px",
                    alignItems: "center",
               }}
               onClick={handleShowChat}
          >
               <Avatar
                    sx={{
                         width: "50px",
                         height: "50px"
                    }}
                    src="/logo.svg"
               >hi</Avatar>
               
               <Box
                    sx={{
                         display: "flex",
                         flexDirection: "column",
                         flexGrow: 1
                    }}
               >
                    <Box 
                         sx={{
                              display: "flex",
                              justifyContent : "space-between"
                         }}
                    >
                         <CustomTypography>
                              {name}
                         </CustomTypography>
                         <CustomTypography>
                              {chatTime && chatTime}
                              {/* {s && s} */}
                              {/* {new Date(lastMessageTime) && new Date(lastMessageTime)} */}
                              {/* {new Date(lastMessageTime).getTime() >= todayTime ?} */}
                         </CustomTypography>
                    </Box>

                    <CustomTypography>
                         {lastTruncatedMessage}
                    </CustomTypography>
               </Box>
          </Box>
     )
}