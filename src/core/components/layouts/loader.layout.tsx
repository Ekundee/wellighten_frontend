import { Box } from "@mui/material"
import { atom, useAtom } from "jotai";
import { Dna } from "react-loader-spinner";
import { CustomTypography } from "../minor";
import Link from "next/link";
import { useState, useEffect, useRef } from "react"

export const loaderShowAtom = atom("flex")


function useInterval(callback : any, delay : any) {
     const savedCallback : any = useRef();

     // Remember the latest callback.
     useEffect(() => {
     savedCallback.current = callback;
     }, [callback]);

     // Set up the interval.
     useEffect(() => {
     let id = setInterval(() => {
          savedCallback.current();
     }, delay);
     return () => clearInterval(id);
     }, [delay]);
}



export default function LoaderScreen({ children } : any){
     const [loaderShowState, setLoaderShowState] = useAtom(loaderShowAtom)
     const [counterState, setCounterState] = useState(0)

     useInterval(() => {
          if(counterState >= 100){
               setLoaderShowState("none")
          }else if(counterState >= 95){
               setCounterState(counterState + 1);
          }else if(counterState >= 80){
               setCounterState(counterState + 5);
          }else{
               setCounterState(counterState + Math.floor(Math.random() * 20));
          }
     }, 1000);
    
    
     return(
          <>
               <Box
                    sx={{
                         backgroundColor: "White",
                         width: "100%",
                         height: "100%",
                         position: "fixed",
                         zIndex: "200",
                         display: loaderShowState,
                         flexDirection: "column",
                         justifyContent: "center",
                         alignItems: "center"
                    }}
               >
                    <Box
                         sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center"
                         }}
                    >
                         <Dna
                              width={"100%"}
                              height={"200px"}
                              
                         />
                         <CustomTypography
                              gutterBottom
                              sx={{
                                   color: "#4E27EB",
                                   fontWeight: 700
                              }}
                         >
                              {counterState}%
                         </CustomTypography>
                         <CustomTypography
                              sx={{
                                   fontWeight: "700"
                              }}
                         >
                              Analyzing patient data, please wait...
                         </CustomTypography>
                    </Box>
               </Box>

               {children}
          </>
     )
}