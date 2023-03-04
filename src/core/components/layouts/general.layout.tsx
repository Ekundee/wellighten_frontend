import { Box } from "@mui/material";
import { Sofia_Sans } from "next/font/google";

const sofia_Sans = Sofia_Sans({ subsets: ['latin'] })

export default function GeneralLayout ({ children } : any) {
    return(
        <Box fontFamily={sofia_Sans.style.fontFamily}>
            {children}
        </Box>
    )
}