import { Search } from "@mui/icons-material";
import { Box, TextField, Stack, Chip, Grid } from "@mui/material"
import EachSymptom from "./components/eachSymptom";
import {useState} from "react"
import CloseIcon from '@mui/icons-material/Close';
import { EastArrowButton } from "@/core/components/buttons";


export default function SymptomDiagnosis() {
     const symptomNames = ["itching","skin_rash","nodal_skin_eruptions","continuous_sneezing","shivering","chills","joint_pain","stomach_pain","acidity","ulcers_on_tongue","muscle_wasting","vomiting","burning_micturition","spotting_ urination","fatigue","weight_gain","anxiety","cold_hands_and_feets","mood_swings","weight_loss","restlessness","lethargy","patches_in_throat","irregular_sugar_level","cough","high_fever","sunken_eyes","breathlessness","sweating","dehydration","indigestion","headache","yellowish_skin","dark_urine","nausea","loss_of_appetite","pain_behind_the_eyes","back_pain","constipation","abdominal_pain","diarrhoea","mild_fever","yellow_urine","yellowing_of_eyes","acute_liver_failure","fluid_overload","swelling_of_stomach","swelled_lymph_nodes","malaise","blurred_and_distorted_vision","phlegm","throat_irritation","redness_of_eyes","sinus_pressure","runny_nose","congestion","chest_pain","weakness_in_limbs","fast_heart_rate","pain_during_bowel_movements","pain_in_anal_region","bloody_stool","irritation_in_anus","neck_pain","dizziness","cramps","bruising","obesity","swollen_legs","swollen_blood_vessels","puffy_face_and_eyes","enlarged_thyroid","brittle_nails","swollen_extremeties","excessive_hunger","extra_marital_contacts","drying_and_tingling_lips","slurred_speech","knee_pain","hip_joint_pain","muscle_weakness","stiff_neck","swelling_joints","movement_stiffness","spinning_movements","loss_of_balance","unsteadiness","weakness_of_one_body_side","loss_of_smell","bladder_discomfort","foul_smell_of urine","continuous_feel_of_urine","passage_of_gases","internal_itching","toxic_look_(typhos)","depression","irritability","muscle_pain","altered_sensorium","red_spots_over_body","belly_pain","abnormal_menstruation","dischromic _patches","watering_from_eyes","increased_appetite","polyuria","family_history","mucoid_sputum","rusty_sputum","lack_of_concentration","visual_disturbances","receiving_blood_transfusion","receiving_unsterile_injections","coma","stomach_bleeding","distention_of_abdomen","history_of_alcohol_consumption","fluid_overload.1","blood_in_sputum","prominent_veins_on_calf","palpitations","painful_walking","pus_filled_pimples","blackheads","scurring","skin_peeling","silver_like_dusting","small_dents_in_nails","inflammatory_nails","blister","red_sore_around_nose","yellow_crust_ooze"]

     const [selectedSymptomState, setSelectedSymptomState] : any = useState([])
     const [searchTerm, setSearchTerm] = useState('');
     const [filteredWords, setFilteredWords] : any = useState([]);

     const handleSymptomClick = (symptom : String) =>{
          setSelectedSymptomState((prevState : Array<String>)=>[...prevState,symptom])
          console.log(symptom)
     }

     const handleSymptomChipDelete = (symptom : string)=>{
          setSelectedSymptomState((prevState : Array<String>)=>prevState.filter(selectedSymptom => selectedSymptom != symptom))
     }

     const handleSearch = (e : any) => {
          console.log("jo")
          const term = e.target.value;
          setSearchTerm(term);
      
          if (term.trim() === '') {
            setFilteredWords([]);
          } else {
               const filtered = symptomNames.filter((word) =>
               word.toLowerCase().includes(term.toLowerCase())
               );
               setFilteredWords(filtered);
          }
     };

     const handlePredict = () =>{
          let symptomArr = []

          for(let i=0; i < symptomNames.length; i++){
               if(selectedSymptomState.includes(symptomNames[i])){
                    symptomArr.push(1)
               }else{
                    symptomArr.push(0)
               }
          }
          console.log(symptomArr)
     }
     return(
          <Box>
               {/* Bottom predict button */}
               {
                    selectedSymptomState && selectedSymptomState.length > 0 && <EastArrowButton onclick={handlePredict}/>
               }
               <Grid container>
                    {
                         selectedSymptomState && selectedSymptomState.map((selectedSymptom : string, index: number)=>(
                              <Grid item
                                   key={index}
                                   sx={{
                                        p:"5px"
                                   }}
                              >
                                   <Chip
                                        key={index}
                                        sx={{
                                             backgroundColor : "#4E27EB",
                                             color: "white",
                                             maxWidth: "max-content",
                                             p:"5px"
                                        }}
                                        onDelete={() => handleSymptomChipDelete(selectedSymptom)}
                                        label={selectedSymptom}
                                        deleteIcon={<CloseIcon
                                             style={{
                                                  color: "white",
                                             }}
                                        />}
                                   />
                              </Grid>
                         ))
                    }
               </Grid>

           
               <Box
                    sx={{
                         width: "100%",
                         textAlign: "center",
                         py: "50px",
                         borderBottom: "1px solid black",
                    }}
               >
                    <TextField
                         InputProps={{
                              style:{
                                   // padding: "10px",
                                   fontSize: "1rem",
                                   borderRadius: "20px"
                              },

                              endAdornment : <Search
                                   sx={{
                                        color: "#979797",
                                   }}
                              />
                         }}
                         name={"search"}
                         placeholder={"Search"}
                         variant="outlined"
                         // value={registerForm.values[property]}
                         onChange={(e)=>handleSearch(e)}
                         // onBlur= {registerForm.handleBlur}
                         sx={{ 
                              width  : "80%",
                              borderRadius: "10px",
                              backgroundColor: "rgba(217,217,217,0.32)",
                         }}
                         // type={property =="password" ? "password" : "text"}
                    />
               </Box>

               {
                    filteredWords.length <= 0  ? symptomNames.map((symptom, index)=>(
                         <>
                         {
                              selectedSymptomState && !selectedSymptomState.includes(symptom) &&  <EachSymptom text={symptom} addsymptom={()=>handleSymptomClick(symptom)}/>
                         }
                         </>
                    ))
                    :
                    filteredWords && filteredWords.map((searchedSymptom : string, index: number)=>(
                         <>
                         {
                              selectedSymptomState && !selectedSymptomState.includes(searchedSymptom) &&  <EachSymptom text={searchedSymptom} addsymptom={()=>handleSymptomClick(searchedSymptom)}/>
                         }
                         </>
                    ))
               }

               
          </Box>
    )
}
