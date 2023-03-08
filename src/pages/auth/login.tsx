import AuthLayout from "@/core/components/layouts/auth.layout";
import Login from "@/features/login";

export default function Index(){
     return(
          <AuthLayout>
               <Login/>
          </AuthLayout>
     )
}