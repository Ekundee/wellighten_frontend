import { CustomTypography } from "@/core/components/minor";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";

export default function TopDoctorCard ({ doctor_image_src, name, specialization_area } : any) {
     return (
          <Card 
               elevation={3}
               sx={{
                    width: "1000px",
                    height: "500px",
               }}
          >
               <CardMedia
                    sx={{ height: 140 }}
                    image={doctor_image_src}
                    title="green iguana"
               />
               <CardContent
                    sx={{
                         display: "grid",
                         placeItems : "center"    
                    }}
               >
                    <CustomTypography gutterBottom>
                         {name}
                    </CustomTypography>
                    <CustomTypography>
                         {specialization_area}
                    </CustomTypography>
               </CardContent>
          </Card>
     )
}