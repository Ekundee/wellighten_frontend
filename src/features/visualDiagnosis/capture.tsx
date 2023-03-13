import { PicButton } from "@/core/components/buttons";
import { Box } from "@mui/material";
import { decode } from "base64-arraybuffer";
import { useAtom } from "jotai";
import Image from "next/image";
import moment from "moment"
import { diagnosisPicBase64StringAtom, diagnosisPicFormatStringAtom } from "./state";
import { useRouter } from "next/router";

export default function Capture(){
     const [diagnosisPicBase64String, setDiagnosisPicBase64String] = useAtom(diagnosisPicBase64StringAtom)
     const [diagnosisPicFormatString] = useAtom(diagnosisPicFormatStringAtom)
     
     const router = useRouter()

     async function handleDiagnose (){
          const blob = new Blob([new Uint8Array(decode(diagnosisPicBase64String))], {
               type: `image/${diagnosisPicFormatString}`,
          });
          const pic = new File([blob], "Name", {
               lastModified: moment().unix(),
               type: blob.type,
           });

          const form_data = new FormData()
          form_data.append("pic", pic)
          router.push("/services/visual_diagnosis/receipt")
     }
     return(
          <Box
               sx={{
                    width: "100%",
                    height: "100vh",
                    position : "fixed"
               }}
          >
               <PicButton imagesrc={"/diagnoseButton.png"} width={100} height={100} style={{ position: "absolute", left: 0,  right: 0, bottom: "2%", marginLeft: "auto",marginRight: "auto"}} onClick={handleDiagnose}/>
               <Box
                    sx={{
                         width: "100vh",
                         height: "100vh",
                         
                    }}
               >

                    <img src={`data:image/png;base64, ${diagnosisPicBase64String}`} width={"100%"} height={"100%"} alt="services" />
               </Box>
          </Box>

     )
}