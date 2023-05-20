import { TopAppbar, topAppBarTextAtom } from "@/core/components/navigation";
import ChangePassword from "@/features/account_tabs/components/change_password";
import Deposit from "@/features/account_tabs/components/deposit";
import PersonalInformation from "@/features/account_tabs/components/personal_information";
import Transfer from "@/features/account_tabs/components/transfer";
import Withdraw from "@/features/account_tabs/components/withdraw";
import { Box } from "@mui/material";
import { useAtom } from "jotai";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AccountTabLayout({ name } : any) {
     const [, setTopAppBarText] = useAtom(topAppBarTextAtom)
     const [form, setForm] = useState()
     const [topPic, setTopPic] = useState()
     
     const nameNFormComponent : any = [
          {
               name: "Transfer",
               form: <Transfer/>,
               topPic: "/transfer_tab.svg"
          },{
               name: "Deposit",
               form: <Deposit/>,
               topPic: "/deposit_tab.svg"
          },{
               name: "Withdraw",
               form: <Withdraw/>,
               topPic: "/withdraw_tab.svg"
          },{
               name: "Personal Information",
               form: <PersonalInformation/>,
               topPic: "/personal_information_tab.svg"
          },{
               name: "Change Password",
               form: <ChangePassword/>,
               topPic: "/change_password_tab.svg"
          }
     ]

     const names = nameNFormComponent.map((property :any, index: number) => property.name)
     setTopAppBarText(name)
     useEffect(()=>{
          if (names.includes(name)){
               const index = names.indexOf(name)
               setForm(nameNFormComponent[index].form)
               setTopPic(nameNFormComponent[index].topPic)
          }else{
               // router.push("/tabs")
          }
     },[])
     return(
          <Box>
               <TopAppbar isBack={true}/>
          <Box>
               <Box
                    sx={{
                         width: "100%",
                         height: "270px",
                         display: "grid",
                         placeItems: "center"
                    }}
               >
                    <Box
                         sx={{
                              width: "200px",
                              height: "200px",
                              backgroundImage: `url(${topPic})`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              backgroundSize: "100% 100%"
                         }}
                    >
                    </Box>
               </Box>
                    {form}
               </Box>
          </Box>
    )
}