import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../style.module.css"

export default function LogoNText({ text } : any){
     return(
          <Box className={styles.LogoNTextBox}>
               <Image src={"/logo.svg"} width={50} height={50} alt="Wellighten logo"/>
               <Typography>
                    {text}
               </Typography>
          </Box>
     )
}