import axios from "axios"

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