import { Box } from "@mui/material";

export default function AuthLayout ({ children } : any) {
    return(
          <Box
               sx={{
                    paddingX: "20px"
               }}
          >
               {children}
          </Box>
    )
}