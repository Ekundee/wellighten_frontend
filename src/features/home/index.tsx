import ConsultationCard from "./components/consultationCard";
import { Box, Grid, List, Paper, Stack, Chip, TextField } from "@mui/material"
import TopDoctorCard from "./components/doctorCard";
import { Card, CardContent} from "@mui/material"
import { CustomTypography } from "@/core/components/minor";
import { Search } from "@mui/icons-material";
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
     return(
          <>
          <Box
               sx={{
                    backgroundImage: "url('/homebkg.png')",
                    width: "100%",
                    height: "400px",
                    backgroundSize: "cover",
                    padding: "20px"
               }}
          >

               <img src="/homelogo.svg" width="200px" height={"50px"}  style={{ display: "flex", justifyContent:"start", textAlign: "center"}}/>
               <img src="/heartrate.svg" width="400px" height={"50px"} />
               <CustomTypography>
                    Welcome, Olu
               </CustomTypography>
               <CustomTypography>
                    Have a nice day !!
               </CustomTypography>

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
          
          {/* Services */}
          <CustomTypography>
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

          <CustomTypography>
               Top Doctors
          </CustomTypography>
              
               <Paper style={{maxHeight: 200, overflowX: 'auto'}}>
                    <List component={Stack} direction="row">
                    {
                         topDoctorsCardConfig.map((topDoctor, index) =>(
                              <TopDoctorCard doctor_image_src={topDoctor.doctor_image_src} name={topDoctor.name} specialization_area ={topDoctor.specialization_area}/>
                         ))
                    }
                    </List>
               </Paper>




                    <Paper style={{maxHeight: 200, overflowX: 'auto'}}>
          <List component={Stack} direction="row">
               <img src="/testpic.png"/>
               <img src="/testpic.png"/>
               <img src="/testpic.png"/>
               <img src="/testpic.png"/>
               <Card
                    sx={{
                         backgroundColor:"red",
                         width: "500px",
                         height: "200px"
                    }}
               >    
                    <CardContent>
                         hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                    </CardContent>
               </Card>
               <img src="/testpic.png"/>

          </List>
          </Paper>
          </>
    )
}