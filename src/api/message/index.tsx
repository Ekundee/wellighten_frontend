import { GET_ALL_USER_FRIENDS, GET_ALL_USER_MESSAGES, GET_MESSAGE_WITH_PARTICIPANT, POST_SEND_MESSAGE } from "../url";
import Requester, { IAxiosResponse } from "../util";
import { IGetMessageWithParticipant, ISendMessage } from "./interface";

// Send message
export async function sendMessageAPI(model : ISendMessage) {
     try{
          const response : any = await Requester.post(POST_SEND_MESSAGE, model)
          const { Status, Data, Message } : IAxiosResponse = response.data
          console.log({ Status, Data, Message })
          return { Status, Data, Message } 
     }catch(e : any){
          const response : IAxiosResponse = { Status : e?.response?.status ? e.response.status : 400 , Data : e?.response?.data ? e.response.data : e.message }
          const { Status, Data } : IAxiosResponse = response
          return response
     }
}



// get message woth participant
export async function getMessageWithParticipantAPI(model : IGetMessageWithParticipant) {
     try{
          const response : any = await Requester.get(`${GET_MESSAGE_WITH_PARTICIPANT}?Participant=${model.Participant}`)
          const { Status, Data, Message } : IAxiosResponse = response.data
          return { Status, Data, Message } 
     }catch(e : any){
          const response : IAxiosResponse = { Status : e?.response?.status ? e.response.status : 400 , Data : e?.response?.data ? e.response.data : e.message }
          const { Status, Data } : IAxiosResponse = response
          return response
     }
}



// get all users message
export async function getUserMessageAPI() {
     try{
          const response : any = await Requester.get(GET_ALL_USER_MESSAGES)
          const { Status, Data, Message } : IAxiosResponse = response.data
          // console.log({ Status, Data, Message })
          return { Status, Data, Message } 
     }catch(e : any){
          const response : IAxiosResponse = { Status : e?.response?.status ? e.response.status : 400 , Data : e?.response?.data ? e.response.data : e.message }
          const { Status, Data } : IAxiosResponse = response
          return response
     }
}



// get user friends
export async function getUserFriendsAPI() {
     try{
          const response : any = await Requester.get(GET_ALL_USER_FRIENDS)
          const { Status, Data, Message } : IAxiosResponse = response.data
          return { Status, Data, Message } 
     }catch(e : any){
          const response : IAxiosResponse = { Status : e?.response?.status ? e.response.status : 400 , Data : e?.response?.data ? e.response.data : e.message }
          const { Status, Data } : IAxiosResponse = response
          return response
     }
}




