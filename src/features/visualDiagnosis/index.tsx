import { TopAppbar, topAppBarTextAtom } from "@/core/components/navigation";
import { Box, Typography } from "@mui/material";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/router";
import Webcam from "react-webcam";
import { useEffect, useState } from "react"
import { Camera, CameraResultType } from '@capacitor/camera';
import axios from "axios";
import {decode} from "base64-arraybuffer";
import moment from "moment";
import { diagnosisPicBase64StringAtom, diagnosisPicFormatStringAtom } from "./state";




export default function VisualDiagnosis() {
     
     const [topAppBarText, setTopAppBarText] = useAtom(topAppBarTextAtom)
     const [,setDiagnosisPicBase64String] = useAtom(diagnosisPicBase64StringAtom)
     const [,setDiagnosisPicFormatString] = useAtom(diagnosisPicFormatStringAtom)

     const takePicture = async () => {
          const image = await Camera.getPhoto({
            quality: 100,
            allowEditing: true,
            resultType: CameraResultType.Base64,
          });
        
          // image.webPath will contain a path that can be set as an image src.
          // You can access the original file using image.path, which can be
          // passed to the Filesystem API to read the raw data of the image,
          // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
          var imageUrl : any = image.webPath;
          return image
        };
     const router = useRouter()

     const visualDiagnosisTypeConfig = [
          {
               icon : "/next.svg",
               name : "Skin Diagnosis",
               tagLine : "Get a clearer picture of your skin's health with our visual diagnosis",
               link : "/services/visual_diagnosis/skin"
          }, {
               icon : "/next.svg",
               name : "Eye Diagnosis",
               tagLine : "Trust us to detect and diagnose eye diseases before they become a problem",
               link : "/services/visual_diagnosis/eye"
          },
     ]

     useEffect(()=>{
          setTopAppBarText("Visual Diagnosis")
     })

     async function handleCaptureNRouting (e:any, link : string){
          const image : any = await takePicture()
          setDiagnosisPicBase64String(image.base64String)
          setDiagnosisPicFormatString(image.format)
          router.push("/services/visual_diagnosis/capture")
     }    


     
     return(
          <>
               <TopAppbar isBack={true}/>
               {
                    visualDiagnosisTypeConfig.map((type, index)=>(
                         <Box key={index} onClick={(e)=>handleCaptureNRouting(e,type.link)}>
                              <Box>
                                   <Box>
                                        <Image src={type.icon} width={50} height={50} alt="services" />
                                   </Box>
                                   <Typography>
                                        {type.name}
                                   </Typography>
                              </Box>
                              <Typography>
                                   {type.tagLine}
                              </Typography>
                         </Box>
                    ))
               }
          </>
    )
}