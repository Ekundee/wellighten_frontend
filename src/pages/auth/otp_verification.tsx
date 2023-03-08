import AuthLayout from "@/core/components/layouts/auth.layout";
import Otp_verification from "@/features/otp_verification";

export default function Index (){
     return(
          <AuthLayout>
               <Otp_verification/>
          </AuthLayout>
     )
}