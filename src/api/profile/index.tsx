import { GET_PROFILE } from "../url";
import Requester, { IAxiosResponse } from "../util";

// get profile
export async function getProfile() {
     try{
          const response : any = await Requester.get(GET_PROFILE)
          const { Status, Data, Message } : IAxiosResponse = response.data
          // console.log({ Status, Data, Message })
          return { Status, Data, Message } 
     }catch(e : any){
          const response : IAxiosResponse = { Status : e?.response?.status ? e.response.status : 400 , Data : e?.response?.data ? e.response.data : e.message }
          const { Status, Data } : IAxiosResponse = response
          return response
     }
}