import { navbarPropertyConfigAtom } from "@/core/components/navigation/state";
import { atom, useAtom } from "jotai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css"  
import { SizedVerticalBox } from "@/core/components/box";
import React from "react"
import { Box } from "@mui/material";
import { topAppBarTextAtom } from "@/core/components/navigation";

export const tabAtom = atom(0)
export default function Tabs() {
   
     const [navbarPropertyConfig, setNavbarPropertyConfig] = useAtom(navbarPropertyConfigAtom)
     const [tab, setTab] = useAtom(tabAtom)
     const [,setTopAppBarText] = useAtom(topAppBarTextAtom)
     
     var sliderConfig = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          onSwipe: (swipeDirection : string)=>handleSwipe(swipeDirection)
     }

     
     function handleSwipe(swipeDirection : string){
          var activetab = 0
        
          if(swipeDirection == "left" && (tab + 1) < navbarPropertyConfig.length){
               activetab = tab + 1
               setTab(activetab)

          }else if(swipeDirection == 'right' && (tab - 1) >= 0){
               activetab = tab - 1
               setTab(activetab)
          }

          for(var property = 0; property < navbarPropertyConfig.length; property++){
               if(property == activetab){
                    navbarPropertyConfig[property].active = 1.5
               }else{
                    navbarPropertyConfig[property].active = 1
               }
          }
          setTopAppBarText(navbarPropertyConfig[activetab].text)
          setNavbarPropertyConfig(navbarPropertyConfig)
     }
    return(
          <Slider 
               ref={slider => slider?.slickGoTo(tab)} {...sliderConfig}
               className={styles.slider}
          >
               
               {
                    navbarPropertyConfig.map((property, index)=>(
                         <Box className={styles.scrollableBox} key={index}>
                              {property.component}
                         </Box>
                    ))
               }
          </Slider>
    )
}