import { Box } from "@mui/material";
import { BottomNavbar } from "../navigation";

export default  function BottomNavLayout({ children } :any){
     return(
          <Box>
               <Box>
                    {children}
               </Box>
               <BottomNavbar/>
          </Box>
     )
}