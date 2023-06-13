import { getCapacitorStorageData } from "@/core/utils/utilFunction";
import axios from "axios"


getCapacitorStorageData("wellighton_authtoken").then(response => response).then(
     data => Requester.defaults.headers.common['Authorization']  = "bearer " + data
)

const Requester = axios.create({ baseURL : "http://localhost:3030", withCredentials: true})
export default Requester


export interface IAxiosResponse {
     Status?: number,
     Message?: string,
     Data?: {
          statusCode: string,
          statusMessage: string,
          message: string,
          data: Record<string,any> | string | any
     }
}