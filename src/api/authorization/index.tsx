import { IChangePassword, ISignIn, ISignUp, IValidateEmailDTO } from "./interface";
import { POST_CHANGE_PASSWORD, POST_SIGNIN, POST_SIGNUP, POST_VALIDATE_EMAIL } from "../url";
import Requester, { IAxiosResponse } from "../util";
import axios from "axios";

// Sign up
export async function SignUpAPI(model : ISignUp) {
     try{
          const response : any = await Requester.post(POST_SIGNUP, model)
          const { Status, Data, Message } : IAxiosResponse = response.data
          console.log({ Status, Data, Message })
          return { Status, Data, Message } 
     }catch(e : any){
          const response : IAxiosResponse = { Status : e?.response?.status ? e.response.status : 400 , Data : e?.response?.data ? e.response.data : e.message }
          const { Status, Data } : IAxiosResponse = response
          return response
     }
}



// Sign in
export async function SignInAPI(model : ISignIn) {
     try{
          const response : any = await Requester.post(POST_SIGNIN, model)
          const { Status, Data, Message } : IAxiosResponse = response.data
          console.log({ Status, Data, Message })
          return { Status, Data, Message } 
     }catch(e : any){
          const response : IAxiosResponse = { Status : e?.response?.status ? e.response.status : 400 , Data : e?.response?.data ? e.response.data : e.message }
          const { Status, Data } : IAxiosResponse = response
          return response
     }
}



// Change password
export async function ChangePasswordAPI(model : IChangePassword) {
     try{
          const response : any = await Requester.post(POST_CHANGE_PASSWORD, model)
          const { Status, Data, Message } : IAxiosResponse = response.data
          console.log({ Status, Data, Message })
          return { Status, Data, Message } 
     }catch(e : any){
          const response : IAxiosResponse = { Status : e?.response?.status ? e.response.status : 400 , Data : e?.response?.data ? e.response.data : e.message }
          const { Status, Data } : IAxiosResponse = response
          return response
     }
}



// Change password
export async function ValidateEmailAPI(model : IValidateEmailDTO) {
     try{
          const response : any = await Requester.post(POST_VALIDATE_EMAIL, model)
          const { Status, Data, Message } : IAxiosResponse = response.data
          console.log({ Status, Data, Message })
          return { Status, Data, Message } 
     }catch(e : any){
          const response : IAxiosResponse = { Status : e?.response?.status ? e.response.status : 400 , Data : e?.response?.data ? e.response.data : e.message }
          const { Status, Data } : IAxiosResponse = response
          return response
     }
}

