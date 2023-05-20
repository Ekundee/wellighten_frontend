import axios from "axios";
import { Dna } from "react-loader-spinner";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Receipt from "@/features/receipt";

export interface IReceiptConfig {
     name?: string,
     value?: string,
     divider?: boolean
}
export default function Index(){
     const receiptConfig: IReceiptConfig[] = [
          {
               name: "Type",
               value: "Eye diagnosis"
          },{
               name: "Diagnosis code",
               value: "VDS123456789"
          },{
               name: "Date",
               value: "25-02-2003, 15:53:16"
          },{
               name: "Service",
               value: "Diagnosis"
          },{
               divider : true
          },{
               name: "Charges",
               value: "$ 20.00"
          },{
               divider : true
          },{
               name: "Suspected condition(1)",
               value: "Glaucoma"
          },{
               name: "Suspected condition(2)",
               value: "Conjunctivitis"
          },{
               name: "Suspected condition(3)",
               value: "Cataract"
          }
     ]
     return(
          <>
               <Receipt/>
          </>
     )
}