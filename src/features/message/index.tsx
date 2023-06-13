import { getMessageWithParticipantAPI, getUserMessageAPI, sendMessageAPI } from "@/api/message";
import { useEffect, useState } from "react";
import { EachChat } from "../chats/components/eachChat";
import EachMessage from "./components/eachMessage";
import { IGetMessageWithParticipant, ISendMessage } from "@/api/message/interface";
import { ChatNavigationBar } from "@/core/components/navigation";
import { Avatar, Box, IconButton, TextField } from "@mui/material";
import { useFormik } from "formik";
import serverIO from 'socket.io-client';
import Requester from "@/api/util";
import { useAtom } from "jotai";
import { userAtom } from "./state";


export default function IndividualChat ({id} : any) {
     const [messages, setMessages] : any = useState([])
     const [userId, setUserId] : any = useState([])
     // const [x, setx] : any = useAtom(userAtom)
     const socket = serverIO("http://localhost:3030")

     // const myId
     useEffect(()=>{
          if(typeof(id) !== 'undefined'){
               if (messages && messages.length == 0){
                    console.log(id)
                    const model : IGetMessageWithParticipant = {
                         Participant : id
                    }
                    getMessageWithParticipantAPI(model).then((response: any) => {
                         console.log(response.Data.UserMessage); 
                         setUserId(response.Data.UserId)
                         setMessages(response.Data.UserMessage)
                    })
               }
          }
     })
   

     const chatForm = useFormik({
          initialValues : {
               message : ""
          },
          async onSubmit(values, formikHelpers)
          {
               const model :ISendMessage = {
                    Participant: id,
                    Message : values.message
               }
               socket.emit("saveChat", {
                    AuthToken: Requester.defaults.headers.common['Authorization'],
                    Participant : id,
                    Message : values.message 
               })
               socket.on("showChat", (data) =>{
                    console.log(messages)
                    setMessages([...messages,data])
               })
               values.message = ""
          },
     })

     return(
          <>
               <ChatNavigationBar profilePic={"/logo.svg"} name={"name"} activeStatus={"Online"} />
               {userId && messages && messages?.length > 0 && messages.map((message : any)=>(
                    <>
                         {message.Participant}
                         <p></p>
                         {userId}
                         <EachMessage config={message} sender={message.Sender == userId} />
                    </>
               ))}
               <Box
                    sx={{
                         width :"100%",
                         height : "100px",
                         display: "flex",
                         justifyContent: "space-between",
                         gap: "10px",
                         alignItems: "center",
                         px: "10px"
                    }}
               >
                    <TextField
                         value={chatForm.values.message}
                         placeholder= "Type your message"
                         sx={{
                              flexGrow : 1
                         }}
                         id="message"
                         onChange={chatForm.handleChange}
                    />
                    <IconButton onClick={chatForm.submitForm}>
                         <Avatar src="/send.svg"/>
                    </IconButton>
               </Box>
          </>
     )
}