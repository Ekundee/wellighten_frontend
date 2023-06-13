import { CustomTypography } from "@/core/components/minor";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";

export default function TopDoctorCard ({ doctor_image_src, name, specialization_area } : any) {
     return (
          <Card 
               elevation={3}
               sx={{
                    width: "250px",
                    height: "300px",
                    p: "3px"
               }}
          >
               <CardMedia
                    sx={{ height: "70%", width: "100%", display: "flex",alignItems: "center" , justifyContent: "center"}}
                    image={doctor_image_src}
                    title="green iguana"
               />
               <CardContent
                    sx={{
                         display: "grid",
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