import { OauthButton, PrimaryButton, SecondaryButton } from "@/core/components/buttons";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LogoNText from "./components/logoNText";
import Or from "./components/or";


export default function Login() {
    return(
          <Box>
               <Box
                    sx={{
                         backgroundImage: `url(/loginillus.png)`,
                         backgroundRepeat: "no-repeat",
                         backgroundSize: "100% 100%",
                         width: 290,
                         height:270,
                         margin: "auto",
                    }}
               >
               </Box>
              <LogoNText text="Sign in"/>             

               <Typography>
                    By creating account, you agree to our Terms and condition and Privacy policy
               </Typography>

               <PrimaryButton endIcon={true} text="Login"/>

               <Or/>

               <OauthButton text="Sign in with Google" startIcon={true} iconSrc={"/googleIcon.svg"} />

               <Typography>
                    Not registered yet? &nbsp;
                    <Link href={"/auth/login"}>
                         Sign up
                    </Link>
               </Typography>

          </Box>
    )
}