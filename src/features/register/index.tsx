import { PrimaryButton, SecondaryButton } from "@/core/components/buttons";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LogoNText from "./components/logoNText";


export default function Register() {
    return(
          <Box>
               <Box
                    sx={{
                         backgroundImage: `url(/registerillus.png)`,
                         backgroundRepeat: "no-repeat",
                         backgroundSize: "100% 100%",
                         width: 290,
                         height:270,
                         margin: "auto",
                    }}
               >
               </Box>
              <LogoNText text="Sign up"/>             

               <Typography>
                    By creating account, you agree to our Terms and condition and Privacy policy
               </Typography>

               <PrimaryButton text="Create Account" />
               <SecondaryButton text="Sign up with Google" />

               <Typography>
                    Already registered? &nbsp;
                    <Link href={"/auth/login"}>
                         Login
                    </Link>
               </Typography>

          </Box>
    )
}