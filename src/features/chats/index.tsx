import { Box, TextField } from "@mui/material";
import { EachChat } from "./components/eachChat";
import { Search } from "@mui/icons-material";
import {useEffect, useState} from "react"
import { getUserFriendsAPI, getUserMessageAPI } from "@/api/message";
import { useAtom } from "jotai";
// import { chatsConfigAtom } from "./state";
import serverIO from 'socket.io-client';
import Requester from "@/api/util";

export default function Chats() {
     // const [chatConfigStates, setChatConfigStates] = useAtom(chatsConfigAtom)
     const [chatConfigState, setChatConfigState] = useState([])

     useEffect(()=>{
          const socket = serverIO("http://localhost:3030")
          getUserFriendsAPI().then((response : any )  =>{
               console.log(response.Data?.UserConsultantFriend)
               setChatConfigState(response.Data?.UserConsultantFriend)
          })
     },[])

     return(
          <Box>
               <Box
                    sx={{
                         display: "grid",
                         placeItems: "center",
                         py: "40px",
                         borderBottom: "1px solid gray",
                    }}
               >
                    <TextField
                         InputProps={{
                              style:{
                                   // padding: "10px",
                                   fontSize: "1rem",
                                   borderRadius: "20px"
                              },

                              endAdornment : <Search
                                   sx={{
                                        color: "#979797",
                                   }}
                              />
                         }}
                         name={"search"}
                         placeholder={"Search"}
                         variant="outlined"
                         // value={registerForm.values[property]}
                         // onChange={registerForm.handleChange}
                         // onBlur= {registerForm.handleBlur}
                         sx={{ 
                              width  : "80%",
                              borderRadius: "10px",
                              backgroundColor: "rgba(217,217,217,0.32)",
                         }}
                         // type={property =="password" ? "password" : "text"}
               />
               </Box>
               {
                    chatConfigState && chatConfigState.map((eachChat, index)=>( 
                         <EachChat config={eachChat} key={index}/>
                    ))
               }
          </Box>
    )
}