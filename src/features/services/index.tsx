import { PrimaryButton, SecondaryButton } from "@/core/components/buttons";
import { CustomTypography } from "@/core/components/minor";
import { topAppBarTextAtom } from "@/core/components/navigation";
import {  Box, Toolbar } from "@mui/material";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";



export default function Services() {
     const router = useRouter()
     const serviceConfig = [
          {
               icon: "/symptomDiagnosisService.svg",
               headerText: "Symptom Diagnosis",
               infoText: "Take control of your health and get a personalized diagnosis of your symptoms, so you can get the right treatment and start feeling better, faster.",
               link: "/services/symptom_diagnosis"
          }, {
               icon: "/visualDiagnosisService.svg",
               headerText: "Visual Diagnosis",
               infoText: "From sight to discovery: Discover a faster, more accurate way to diagnose with visual recognition technology.",
               link: "/services/visual_diagnosis"
          }, {
               icon: "/medicalConsultationService.svg",
               headerText: "Medical Consultation",
               infoText: "Expert medical consultation to help you make informed decisions about your health, and achieve your wellness goals, every step of the way.",
               link: "/tabs"
          },
     ]
    return(
          <Box>
               <Box
                    sx={{
                         backgroundColor : "#EEEEEE",
                         width:"100%",
                         minHeight: "100vh",
                         height: "calc(max-content)",
                         paddingTop: "20px"
                    }}
               >
                    {
                         serviceConfig.map((service, index)=>(
                              <Box key={index}
                                   onClick={()=>router.push(service.link)}
                                   sx={{
                                        display: "flex",
                                        paddingY: "25px",
                                        borderBottom: "1px solid #c5c5c5",
                                        backgroundColor: "var(--wellighten_white)"
                                   }}
                              >
                                   <Box
                                        sx={{
                                             width: "20%",
                                             display: "grid",
                                             placeItems: "center"
                                        }}
                                   >
                                        <Image src={service.icon} width={55} height={55} alt="Serviceicon"/>
                                   </Box>
                                   <Box
                                        sx={{
                                             width: "80%",
                                             display: "flex",
                                             flexDirection: "column",
                                             height: "100%"
                                        }}
                                   >
                                        <CustomTypography
                                             sx={{
                                                  fontStyle: "normal",
                                                  fontWeight: 700,
                                                  fontSize: "15px",
                                                  lineHeight: "19px",
                                                  letterSpacing: "-0.165px",
                                                  color: "#2732EB",
                                                  paddingY: "5px"
                                             }}
                                        >
                                             {service.headerText}
                                        </CustomTypography>
                                        <CustomTypography
                                             sx={{
                                                  fontStyle: "normal",
                                                  fontWeight: 400,
                                                  fontSize: "13px",
                                                  lineHeight: "16px",
                                                  letterSpacing: "-0.165px",
                                             }}
                                        >
                                             {service.infoText}
                                        </CustomTypography>
                                   </Box>
                              </Box>

                         ))   
                    }
               </Box>
          </Box>
    )
}