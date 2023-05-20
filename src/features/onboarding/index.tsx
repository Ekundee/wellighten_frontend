import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useAtom } from "jotai";
import Image from "next/image";
import { onboardingAtom } from "./state";
import styles from "./style.module.css"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CenteredBox, SizedVerticalBox } from "@/core/components/box";
import { useRouter } from "next/router";
import { CustomTypography } from "@/core/components/minor";
import { checkPreference, setPreference } from "@/core/utils/utilFunction";
import { useEffect, useState } from "react";

export default function Onboarding(this: any) {
     const [showComponent, setShowComponent] = useState(false)
     const router = useRouter()

     const [onboarding, setOnboarding] = useAtom(onboardingAtom)
     const onboardingConfig = [
          {
               id : 1,
               image : "/onboarding1.png",
               headerText : "Accurate & Fast Diagnosis",
               text : "Get quick answers to your health concerns with just a few taps - Diagnosis made easy with our app",
               proceed : "proceed_33.svg"
          },
          {
               id : 2,
               image : "/onboarding2.png",
               headerText : "Seamless & Cheap Consultation",
               text : "Connecting you with trusted medical professionals to make informed health decisions, easily and conveniently",
               proceed : "proceed_67.svg"
          },
          {
               id : 3,
               image : "/onboarding3.png",
               headerText : "Simple User Interface",
               text : "Experience the perfect blend of simplicity and functionality with our streamlined user interface, built with you in mind",
               proceed : "proceed_100.svg"
          }
     ]

     function handleSwipe(swipeDirection : string){
          if(swipeDirection == "left" && (onboarding + 1) < onboardingConfig.length){
               setOnboarding(onboarding + 1)
          }else if(swipeDirection == 'right' && (onboarding - 1) >= 0){
               setOnboarding(onboarding - 1)
          }
     }

     async function handleChangeScreen(){
          if(onboarding != onboardingConfig.length-1){
               setOnboarding(onboarding + 1)
          }else{
               await setPreference("isWellightonFirstOpening", true)
               router.push("/auth/register")
          }
     }
     
     var sliderConfig = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          onSwipe: (swipeDirection : string)=>handleSwipe(swipeDirection)
     }
     useEffect(()=>{
          setTimeout((async ()=>{
               const isWellightonFirstOpening : string | null =  await checkPreference("isWellightonFirstOpening")
               if(isWellightonFirstOpening == "true"){
                    router.push("/auth/login")
               }else{
                    setShowComponent(true)
               }
          }),1000)
     })

    
     return(
          <>
          {
               showComponent &&
                    <Box className={styles.onboardingBox}>
                         <Box className={styles.skipBar}>
                              <Image src={"/logo.svg"} width={80} height={80} alt="Wellighten logo"/>
                              <CustomTypography onClick={()=>setOnboarding(2)}>
                                   Skip
                              </CustomTypography>
                         </Box>
                         <Slider className={styles.slider} ref={slider => slider?.slickGoTo(onboarding)} {...sliderConfig} >
                              {onboardingConfig.map((screen, index)=>(
                                   <Box className={styles.slide} key={index}>
                                        <Box
                                             sx={{
                                                  backgroundImage: `url(${screen.image})`,
                                                  backgroundRepeat: "no-repeat",
                                                  backgroundSize: "100% 100%",
                                                  width:280,
                                                  height:330,
                                                  margin: "auto",
                                             }}
                                        >
                                        </Box>
                                        <CustomTypography variant="h3" className={styles.headertext}>
                                             {screen.headerText}
                                        </CustomTypography>
                                        <CustomTypography className={styles.text}>
                                             {screen.text}
                                        </CustomTypography>
                                   </Box>
                              ))}
                         </Slider>
                         <CenteredBox>
                              <Image src={`/${onboardingConfig[onboarding].proceed}`}  height={80} width={onboarding != onboardingConfig.length-1 ? 80 : 245} alt="Wellighten logo" onClick={handleChangeScreen}/>
                         </CenteredBox>
                    </Box>
          }
        </>
     )
}