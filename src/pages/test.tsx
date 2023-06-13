import { BottomNavbar } from "@/core/components/navigation";
import PaymentIcon from '@mui/icons-material/Payment';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useEffect, useState } from "react";
import { getCapacitorStorageData, setCapacitorStorageData } from "@/core/utils/utilFunction";
import Receipt from "@/features/receipt";

export default function Index(){
     const [i,seti] : any = useState("o")
     // setCapacitorStorageData("n", "p")
     useEffect(()=>{
          getCapacitorStorageData("n").then((v)=>{
               seti(v)
               console.log(v)
          })
     })
     return(
          <>
          {/* <BottomNavbar/>

          <PaymentIcon/>

          <HelpOutlineIcon/>

          <LogoutIcon/>

          <HistoryIcon/>

          <MedicalServicesOutlinedIcon/>

          <DarkModeOutlinedIcon/>

          <LockResetOutlinedIcon/>

          <PersonAddAlt1OutlinedIcon/>

          <SendOutlinedIcon/>

          <GetAppOutlinedIcon/>

          <Person2OutlinedIcon/> */}
          
          <Receipt/>
          </>
     )
}