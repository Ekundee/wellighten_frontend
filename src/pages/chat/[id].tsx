import { ChatNavigationBar } from "@/core/components/navigation";
import IndividualChat from "@/features/message";
import EachMessage from "@/features/message/components/eachMessage";
import { Box } from "@mui/material"
import { useRouter } from "next/router";


export default function Index() {
     const router = useRouter()
     const id = router.query.id
     return(
          <Box
               sx={{
                    width: "100%",
               }}
          >
               <IndividualChat id={id}/>
          </Box>
     )
}