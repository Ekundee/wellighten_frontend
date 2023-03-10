import BottomNavLayout from "@/core/components/layouts/bottomNavbar.layout";
import { TopAppbar } from "@/core/components/navigation";
import Tabs, { tabAtom } from "@/features/tabs";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

export default function Index(){
     const [tab, setTab] = useAtom(tabAtom)
     
     return(
          <BottomNavLayout>
               { tab != 0 && <TopAppbar/>}
               <Tabs/>
          </BottomNavLayout>
     )
}