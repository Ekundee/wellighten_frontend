import AuthLayout from "@/core/components/layouts/auth.layout";
import Register from "@/features/register";

export default function Index(this : any){
     return(
          <>
               <AuthLayout>
                    <Register/> 
               </AuthLayout>
          </>
     )
}