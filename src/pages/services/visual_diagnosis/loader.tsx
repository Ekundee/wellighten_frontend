import { DatePicker } from '@mui/x-date-pickers'
import axios from "axios";
import { Dna } from "react-loader-spinner";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Box } from '@mui/material';
import { CustomTypography } from '@/core/components/minor';

export default function Index(){
     const [percentage, setPercentageLoader] = useState(80)

     return(
          <Box
               sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100vh",
                    gap: "200px",
               }}
          >
               <Box
                    sx={{
                         textAlign: "center"
                    }}
               >
                    <Dna
                         visible={true}
                    />
                    <Box>
                         {percentage}%
                    </Box>
                    <CustomTypography>
                         Analyzing patient data, please wait...
                    </CustomTypography>
                    {/* <DatePicker
                         views={['year', 'month']}
                         label="Year and Month"
                         minDate={new Date('2012-03-01')}
                         maxDate={new Date('2023-06-01')}
                         value={new Date('2012-03-01')}
                         // onChange={setValue}
                         renderInput={(params : any) => <TextField {...params} helperText={null} />}
                    /> */}

               </Box>
          </Box>
     )
}