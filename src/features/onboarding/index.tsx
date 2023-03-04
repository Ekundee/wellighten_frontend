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
import { CenteredBox, SixedVerticalBox } from "@/core/components/box";

export default function Onboarding() {
     const [onboarding, setOnboarding] = useAtom(onboardingAtom)

   

     const onboardingConfig = [
          {
               id : 1,
               image : "/onboarding1.png",
               headerText : "Accurate & Fast Diagnosis",
               text : "Get quick answers to your health concerns with just a few taps - Diagnosis made easy with our app",
               proceed : "hi"
          },
          {
               id : 2,
               image : "/onboarding2.png",
               headerText : "Seamless & Cheap Consultation",
               text : "Connecting you with trusted medical professionals to make informed health decisions, easily and conveniently",
               proceed : "hi"
          },
          {
               id : 3,
               image : "/onboarding3.png",
               headerText : "Simple User Interface",
               text : "Experience the perfect blend of simplicity and functionality with our streamlined user interface, built with you in mind",
               proceed : "hi"
          }
     ]

     function handleSwipe(screen : Record<string, any>){
          console.log(screen)
          setOnboarding(screen.id)
          return ""
     }
     var sliderConfig = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
     }

     return(
          <Box className={styles.onboardingBox}>
               <Box className={styles.skipBar}>
                    <Image src={"/logo.svg"} width={50} height={50} alt="Wellighten logo"/>
                    <Typography>
                         Skip
                    </Typography>
               </Box>
               <Box>
                    <Slider {...sliderConfig}>
                         {onboardingConfig.map((screen, index)=>(
                              <Box className={styles.slide} key={index}>
                                   <SixedVerticalBox py={3} />        
                                   <Box
                                        sx={{
                                             backgroundImage: `url(${screen.image})`,
                                             backgroundRepeat: "no-repeat",
                                             backgroundSize: "100% 100%",
                                             width:320,
                                             height:350,
                                             margin: "auto",
                                        }}
                                   >
                                   </Box>
                                   <SixedVerticalBox py={2} />        
                                   {/* <Image src={screen.image} width={350} height={350} alt="screen images"/> */}
                                   <Typography variant="h3" className={styles.headertext}>
                                        {screen.headerText}
                                   </Typography>
                                   <Typography className={styles.text}>
                                        {screen.text}
                                   </Typography>
                                   <SixedVerticalBox py={1} />        
                              </Box>
                         ))}
                    </Slider>
                    <SixedVerticalBox py={3} />        
                    <CenteredBox>
                         <Image src={"/proceed_33.svg"} width={80} height={80} alt="Wellighten logo"/>
                    </CenteredBox>

               </Box>
          </Box>
     )
}