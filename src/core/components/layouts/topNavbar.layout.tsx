import { Box } from "@mui/material";
import { BottomNavbar, TopAppbar } from "../navigation";

export default  function TopNavLayout({ children } :any){
     return(
          <Box>
               <TopAppbar/>
               <Box>
                    {children}
               </Box>
          </Box>
     )
}