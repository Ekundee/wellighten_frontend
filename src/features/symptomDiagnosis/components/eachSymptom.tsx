import { CustomTypography } from "@/core/components/minor";
import { Box, IconButton } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';


export default function EachSymptom ( {text, onclick, addsymptom} : any ) {
     return(
          <Box
               sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid black",
                    padding: "15px",
                    alignItems: "center"
               }}
               onClick={onclick}
          >
               <CustomTypography>
                    {text}
               </CustomTypography>

               <IconButton onClick={addsymptom}>
                    <AddIcon/>
               </IconButton>
          </Box>
     )
}