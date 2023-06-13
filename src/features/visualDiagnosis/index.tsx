import { TopAppbar, topAppBarTextAtom } from "@/core/components/navigation";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react"
import { Camera, CameraResultType } from '@capacitor/camera';
import { diagnosisPicBase64StringAtom, diagnosisPicFormatStringAtom } from "./state";
import { CustomTypography } from "@/core/components/minor";
import { Box } from "@mui/material";


export default function VisualDiagnosis() {
     
     const [topAppBarText, setTopAppBarText] = useAtom(topAppBarTextAtom)
     const [,setDiagnosisPicBase64String] = useAtom(diagnosisPicBase64StringAtom)
     const [,setDiagnosisPicFormatString] = useAtom(diagnosisPicFormatStringAtom)

     const takePicture = async () => {
          const image = await Camera.getPhoto({
            quality: 100,
          //   allowEditing: true,
            resultType: CameraResultType.Base64,
          });
        
          return image
        };
     const router = useRouter()

     const visualDiagnosisTypeConfig = [
          {
               icon : "/visualDiagSkin.svg",
               name : "Skin Diagnosis",
               tagLine : "Get a clearer picture of your skin's health with our visual diagnosis",
               link : "/services/visual_diagnosis/skin"
          }, {
               icon : "/visualDiagEye.svg",
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
                         <Box key={index} onClick={(e)=>handleCaptureNRouting(e,type.link)}
                              sx={{
                                   width : "100%",
                                   minHeight: "400px",
                                   display: "flex",
                                   justifyContent: "center",
                                   alignItems : "center",
                                   flexDirection :"column",
                                   borderBottom: "2px solid grey"
                              }}
                         >
                              <Box
                                   sx={{
                                        width: "130px",
                                   }}
                              >
                                   <Box
                                        sx={{
                                             width: "100%",
                                             height: "120px",
                                             boxShadow: "0px 0px 20px 2px grey"
                                        }}
                                   >
                                        <img src={type.icon} width={"100%"} height={"100%"} alt="services" />
                                   </Box>
                                   <CustomTypography gutterBottom 
                                        sx={{
                                             color: "var(--wellighten_purplishblue)",
                                             fontSize: "1.7rem",
                                             fontWeight: "600",
                                             textAlign: "center",
                                             lineHeight: "1.2",
                                             pt: "20px"
                                        }}
                                   >
                                        {type.name}
                                   </CustomTypography>
                              </Box>
                              <CustomTypography
                                   sx={{
                                        width: "80%",
                                        textAlign : "center",
                                        pt: "10px",
                                        fontSize: "1.2rem"
                                   }}
                              >
                                   {type.tagLine}
                              </CustomTypography>
                         </Box>
                    ))
               }
          </>
    )
}