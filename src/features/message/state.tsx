import { getMessageWithParticipantAPI } from "@/api/message";
import { IGetMessageWithParticipant } from "@/api/message/interface";
import Requester from "@/api/util";
import { atom } from "jotai";
import { useRouter } from "next/router";

export const userAtom = atom(async (get)=>{
     const router = useRouter()
     const id : any = router.query.id
     const model : IGetMessageWithParticipant = {
          Participant : id
     }
     const messages : any = await getMessageWithParticipantAPI(model)
     console.log(messages)
     return messages.Data.UserMessage
})