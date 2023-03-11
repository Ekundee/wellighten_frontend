import BottomNavLayout from "@/core/components/layouts/bottomNavbar.layout";
import { TopAppbar, topAppBarTextAtom } from "@/core/components/navigation";
import { navbarPropertyConfigAtom } from "@/core/components/navigation/state";
import Tabs, { tabAtom } from "@/features/tabs";
import { useAtom } from "jotai";
import React,{ useEffect, useState } from "react"

export default function Index(props : any){
     const [tab] = useAtom(tabAtom)

     return(
          <BottomNavLayout>
               { tab != 0 && <TopAppbar/>}
               <Tabs/>
          </BottomNavLayout>
     )
}