import { Avatar, Box } from "@mui/material"
import { useEffect, useState } from "react";

export default function EachMessage ({config, sender }: any) {
     const [messageWidthState, setMessageWidthState] = useState(0)
     const { _id, Message, Participant, Sender, Timestamp} = config

     useEffect(()=>{
          const eachmeassagewidth : any = document.getElementById(_id)?.offsetWidth
          setMessageWidthState(eachmeassagewidth)
     }) 

     return(
          <Box
               sx={{
                    display: "flex",
                    left: sender ? `calc(100% - ${messageWidthState}px - 50px - 5px)` : 0 ,
                    position: "relative",
               }}
          >
               { 
                    sender == false &&
                    <Avatar
                         sx={{
                              width : "40px",
                              height : "40px",
                              marginLeft : "5px",
                              marginRight : "10px"
                         }}
                    >
                         hi
                    </Avatar>
               }
               <Box
                    id={_id}
                    sx={{
                         width: "max-content",
                         maxWidth: "70%",
                         backgroundColor: sender ? "#2732EB" :  "#D9D9D9" ,
                         padding: "10px",
                         borderRadius: "10px",
                         color: sender == true ? "white" : "black" ,
                         wordWrap: "break-word",
                         mb: "20px"
                    }}
               >
                    {Message}
               </Box>
               { 
                    sender == true &&
                    <Avatar
                         sx={{
                              backgroundColor: sender ? "grey" :  "blue" ,
                              width : "40px",
                              height : "40px",
                              marginLeft : "10px",
                              marginRight : "5px"
                         }}
                    >
                         hi
                    </Avatar>
               }
          </Box>
     )
}