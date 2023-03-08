import Account from "@/features/account";
import Chats from "@/features/chats";
import Home from "@/features/home";
import Services from "@/features/services";
import { atom } from "jotai";



export const navbarPropertyConfigAtom = atom([
     {
          whiteIcon: "./whitehome.svg",
          themeIcon: "./themehome.svg",
          text: "Home",
          active: 1.5,
          component: <Home/>
     },{
          whiteIcon: "./whiteservices.svg",
          themeIcon: "./themeservices.svg",
          text: "Services",
          active: 1,
          component: <Services/>
     },{
          whiteIcon: "./whitechats.svg",
          themeIcon: "./themechats.svg",
          text: "Chats",
          active: 1,
          component: <Chats/>
     },{
          whiteIcon: "./whiteaccount.svg",
          themeIcon: "./themeaccount.svg",
          text: "Account",
          active: 1,
          component: <Account/>
     }
])

