import Box from "@mui/material/Box";
import { ISixedBoxProp } from "./interface";

export function CenteredBox ({ children, sx } : any) {
     return(
          <Box
               sx={{
                    textAlign:"center",
                    display: "flex",
                    alignItems : "center",
                    justifyContent: "center"
               }}

               style={sx}
          >
               {children}
          </Box>
     )
 }

export function SixedHorizontalBox({px, py} : ISixedBoxProp){
     return(
          <Box
               sx={{
                    paddingX : px ? `${px}px` : "20px",
                    paddingY : py ? `${py}px` : "20px",
                    height : "100%"
               }}
          >
          </Box>
     )
}

export function SixedVerticalBox({px, py} : ISixedBoxProp){
     return(
          <Box
               sx={{
                    paddingX : px ? `${px}px` : "20px",
                    paddingY : py ? `${py}px` : "20px",
                    width : "100%",
               }}
          >
          </Box>
     )
}