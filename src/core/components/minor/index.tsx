import Box from "@mui/material/Box"
import styles from "./style.module.css"
import Image from "next/image";
import { SizedHorizontalBox } from "../box";
import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Sofia_Sans } from "next/font/google";

const sofia_Sans = Sofia_Sans({ subsets: ['latin'] })


export function Or(){
     return(
          <Box className={styles.orBox}>
               <Box className={styles.orSeparator}>
               </Box>
               <SizedHorizontalBox px={5}/>
               <CustomTypography className={styles.orText}>
                    OR
               </CustomTypography>
               <SizedHorizontalBox px={5}/>
               <Box className={styles.orSeparator}>
               </Box>
          </Box>
     )
}


export function LogoNText({ text } : any){
     return(
          <Box className={styles.logoNTextBox}>
               <Image src={"/logo.svg"} width={60} height={80} alt="Wellighten logo"/>
               <SizedHorizontalBox px={6}/>
               <CustomTypography>
                    {text}
               </CustomTypography>
          </Box>
     )
}



export const CustomTypography = withStyles({
     "root" : {
          fontFamily : sofia_Sans.style.fontFamily
     }
})(Typography)