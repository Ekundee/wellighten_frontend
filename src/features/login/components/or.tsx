import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import styles from "../style.module.css"


export default function Or(){
     return(
          <Box className={styles.orBox}>
               <Box className={styles.orSeparators}>
               </Box>
               <Typography className={styles.orText}>
                    OR
               </Typography>
               <Box className={styles.orSeparators}>
               </Box>
          </Box>
     )
}