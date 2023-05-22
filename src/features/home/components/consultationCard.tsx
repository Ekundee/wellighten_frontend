import { CustomTypography } from "@/core/components/minor";
import { Card, CardActions, CardContent, Box } from "@mui/material";

export default function ConsultationCard ({imgsrc, label } : any) {
     return (
          <Box
               sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px"
               }}
          >
               <Card 
                    elevation={3}
                    sx={{
                         width: "100px",
                         height: "100px",
                    }}
               >
                    <CardContent
                         sx={{
                              width: "100%",
                              height: "100%",
                              display: "grid",
                              placeItems : "center"
                         }}
                    >
                         <img src={imgsrc} width={"100%"} height={"100%"} style={{scale:1.2}}/>
                    </CardContent>
               </Card>
               <CustomTypography>
                    {label}
               </CustomTypography>
          </Box>
     )
}