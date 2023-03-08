import { Box } from "@mui/material";

export default function BlackBox({ children } : any ){
    return(
        <Box
            sx={{
                backgroundColor : "var(--kiwi_black)",
                paddingY : 6,
                width : "100%",
                color : "var(--kiwi_white)"
            }}
        >
            {children}
        </Box>
    )
}