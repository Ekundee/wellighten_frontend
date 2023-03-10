import { Box } from "@mui/material";
import { BottomNavbar, TopAppbar } from "../navigation";

export default  function AllNavLayout({ children, text } :any){
     return(
          <Box>
               <TopAppbar/>
               <Box>
                    {children}
               </Box>
               <BottomNavbar/>
          </Box>
     )
}