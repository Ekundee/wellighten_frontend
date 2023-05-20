import { Sofia_Sans } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LandingPage from '@/features/home';
import Onboarding from '@/features/onboarding';
import AuthLayout from '@/core/components/layouts/auth.layout';
import Webcam from 'react-webcam';


const sofia_Sans = Sofia_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
     <AuthLayout>
          <Onboarding/>
     </AuthLayout>
  )
}
