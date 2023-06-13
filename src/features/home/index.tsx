import ConsultationCard from "./components/consultationCard";
import { Box, Grid, List, Paper, Stack, Chip, TextField, IconButton, Badge } from "@mui/material"
import TopDoctorCard from "./components/doctorCard";
import { Card, CardContent} from "@mui/material"
import { CustomTypography } from "@/core/components/minor";
import { Search } from "@mui/icons-material";
import Slider from "react-slick";
import styles from "./style.module.css"
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

export default function Home() {
     const consultationCardConfig =[
          {
               label: "Consultation",
               imgsrc: "/consultation_service.svg"
          },  {
               label: "Visual diagnosis",
               imgsrc: "/visual_diagnosis_service.svg"
          },  {
               label: "Symptom diagnosis",
               imgsrc: "/symptom_diagnosis_service.svg"
          },  {
               label: "Tips",
               imgsrc: "/tips_service.svg"
          },  {
               label: "Workouts",
               imgsrc: "/workout_service.svg"
          },  {
               label: "Reminders",
               imgsrc: "/reminder_service.svg"
          },
     ]

     const topDoctorsCardConfig = [
          { 
               doctor_image_src: "/testpic.png", 
               name: "Dr Ekundayo Isaiah", 
               specialization_area: "Eye doctor"
          },{ 
               doctor_image_src: "/testpic.png", 
               name: "Dr Ekundayo Isaiah", 
               specialization_area: "Eye doctor"
          },{ 
               doctor_image_src: "/testpic.png", 
               name: "Dr Ekundayo Isaiah", 
               specialization_area: "Eye doctor"
          },{ 
               doctor_image_src: "/testpic.png", 
               name: "Dr Ekundayo Isaiah", 
               specialization_area: "Eye doctor"
          },{ 
               doctor_image_src: "/testpic.png", 
               name: "Dr Ekundayo Isaiah", 
               specialization_area: "Eye doctor"
          },
     ]

     var sliderConfig = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1.5,
          slidesToScroll: 0.1,
          // onSwipe: (swipeDirection : string)=>handleSwipe(swipeDirection)
     }


     return(
          <>
          <Box
               sx={{
                    backgroundImage: "url('/homebkg.png')",
                    width: "100%",
                    height: "400px",
                    backgroundSize: "cover",
                    padding: "20px",
                    display: "flex",
                    flexDirection : "column",
                    justifyContent: "space-between"
               }}
          >
               <Box
                    sx={{
                         width: "100%",
                         height: "290px",
                         display: "flex",
                         flexDirection: "column",
                         justifyContent: "space-between"
                    }}
               > 
                    <Stack direction={"row"} justifyContent={"space-between"}>
                         <img src="/homelogo.svg" style={{scale : "1.2", left: "5%", position: "relative"}}/>
                         <img src="/heartrate.svg"/>
                    </Stack>

               <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Stack direction={"column"}>
                         <CustomTypography
                              sx={{
                                   color: "white",
                                   fontSize: "2.2rem",
                              }}
                         >
                              Welcome, <span style={{
                                   fontSize: "2.5rem",
                                   fontWeight: 700
                              }}>Olu</span>
                         </CustomTypography>
                         <CustomTypography
                              sx={{
                                   color: "white",
                                   fontSize: "1.8rem",
                              }}
                         >
                              Have a nice day !!
                         </CustomTypography>
                    </Stack>

                    
                    {/* <Notification> */}
                    <IconButton
                         sx={{
                              backgroundColor: "rgba(255,255,255,0.1)",
                              width: "70px",
                              height: "70px",
                         }}
                    >
                         <Badge sx={{
                              color: "white",
                              "& .MuiBadge-badge": { fontSize: "1rem"}
                         }} badgeContent={1}>
                              <NotificationsActiveOutlinedIcon sx={{
                                   fontSize: "45px"
                              }} />
                         </Badge>
                    </IconButton>
               </Stack>


               <TextField
                    InputProps={{
                         style:{
                              padding: "10px",
                              fontSize: "1rem"
                         },

                         endAdornment : <Search
                              sx={{
                                   color: "#BBBBBB",
                              }}
                         />
                    }}
                    name={"search"}
                    placeholder={"Search for doctor"}
                    variant="standard"
                    // value={registerForm.values[property]}
                    // onChange={registerForm.handleChange}
                    // onBlur= {registerForm.handleBlur}
                    sx={{ 
                         width  : "100%",
                         borderRadius: "10px",
                         backgroundColor: "white",
                    }}
                    // type={property =="password" ? "password" : "text"}
               />
               </Box>

               
          </Box>

          <Box
               sx={{
                    px: "20px",
                    py: "40px"
               }}
          >
               {/* Services */}
               <CustomTypography gutterBottom>
                    Our services
               </CustomTypography>

          

                    <Grid container spacing={{ xs: 2 }} columns={{ xs: 3 }}>
                         {
                              consultationCardConfig.map((consultationCard, index)=>(
                                   <Grid item xs={1} key={index}
                                        sx={{
                                             display: "grid",
                                             placeItems: "center"
                                        }}
                                   >
                                        <ConsultationCard imgsrc={consultationCard.imgsrc} label={consultationCard.label}/>
                                   </Grid>
                              ))
                         }
                    </Grid>

          </Box>

          <Box
               sx={{
                    pl: "20px",
                    pb: "40px"
               }}
          >
               <CustomTypography gutterBottom>
                    Top Doctors
               </CustomTypography>
               <Slider 
                    {...sliderConfig}
                    className={styles.slider}
                    >
                    {
                         topDoctorsCardConfig.map((topDoctor, index) =>(
                              <TopDoctorCard key={index} doctor_image_src={topDoctor.doctor_image_src} name={topDoctor.name} specialization_area ={topDoctor.specialization_area}/>
                         ))
                    }
               </Slider>
          </Box>
          </>
    )
}