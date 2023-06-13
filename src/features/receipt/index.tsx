import axios from "axios";
import { Dna } from "react-loader-spinner";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./style.module.css"
import { CustomTypography } from "@/core/components/minor";
import { useAtom } from "jotai";
import LoaderScreen, { loaderShowAtom } from "@/core/components/layouts/loader.layout";
import { useEffect } from "react";


export interface IReceiptConfig {
     name?: string,
     value?: string,
     divider?: boolean
// }

// function runOnce(){
//      const [loaderShowState, setLoaderShowState] = useAtom(loaderShowAtom)
//      setLoaderShowState(true)
    
}
export default function Receipt(){
     const receiptConfig: IReceiptConfig[] = [
          {
               name: "Type",
               value: "Eye diagnosis"
          },{
               name: "Diagnosis code",
               value: "VDS123456789"
          },{
               name: "Date",
               value: "25-02-2003, 15:53:16"
          },{
               name: "Service",
               value: "Diagnosis"
          },{
               divider : true
          },{
               name: "Charges",
               value: "$ 20.00"
          },{
               divider : true
          },{
               name: "Suspected condition(1)",
               value: "Glaucoma"
          },{
               name: "Suspected condition(2)",
               value: "Conjunctivitis"
          },{
               name: "Suspected condition(3)",
               value: "Cataract"
          }
     ]

     return(
          <LoaderScreen>
               <Box
                    sx={{
                         width: "100%",
                         padding: "40px",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center",
                         rowGap:"10px"
                    }}
               >
                    <Image src={"/receipt_success.svg"} width={80} height={80} alt="success"/>
                    <CustomTypography>
                         VISUAL DIAGNOSIS RECEIPT
                    </CustomTypography>
                    <Image src={"/skinpic.svg"} width={130} height={80} alt="skinpic"/>
                    <Box
                         sx={{
                              width: "100%"
                         }}
                    >
                         {
                              receiptConfig.map((property, index : number)=>(
                                   <Box key={index} py={1}>
                                        {
                                             property.divider == true ?
                                             <Box className={styles.dashedDivider}></Box>
                                             :
                                             <Box
                                             sx={{
                                                  display: "center",
                                                  justifyContent: "space-between",
                                                  paddingY: "10px"
                                             }}
                                             >
                                                  <CustomTypography>
                                                       {property.name}
                                                  </CustomTypography>
                                                  <CustomTypography>
                                                       {property.value}
                                                  </CustomTypography>
                                             </Box>

                                        }
                                   </Box>
                              ))
                         }
                    </Box>
               </Box>
          </LoaderScreen>
     )
}