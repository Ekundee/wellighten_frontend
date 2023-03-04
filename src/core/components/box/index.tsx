import Box from "@mui/material/Box";
import { ISixedBoxProp } from "./interface";

export function CenteredBox ({ children } : any) {
     return(
          <Box
               sx={{
                    textAlign:"center",
                    display: "flex",
                    alignItems : "center",
                    justifyContent: "center"
               }}
          >
               {children}
          </Box>
     )
 }

export function SixedHorizontalBox({px, py} : ISixedBoxProp){
     return(
          <Box
               sx={{
                    paddingX : px ? px : 20,
                    paddingY : py ? py : 20,
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
                    paddingX : px ? px : 20,
                    paddingY : py ? py : 20,
                    width : "100%"
               }}
          >
          </Box>
     )
}