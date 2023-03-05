import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import styles from "./style.module.css"
import Image from "next/image";
import { SizedHorizontalBox } from "../box";


export function Or(){
     return(
          <Box className={styles.orBox}>
               <Box className={styles.orSeparator}>
               </Box>
               <SizedHorizontalBox px={5}/>
               <Typography className={styles.orText}>
                    OR
               </Typography>
               <SizedHorizontalBox px={5}/>
               <Box className={styles.orSeparator}>
               </Box>
          </Box>
     )
}


export function LogoNText({ text } : any){
     return(
          <Box className={styles.logoNTextBox}>
               <Image src={"/logo.svg"} width={50} height={50} alt="Wellighten logo"/>
               <SizedHorizontalBox px={3}/>
               <Typography>
                    {text}
               </Typography>
          </Box>
     )
}