import { Sofia_Sans } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LandingPage from '@/features/home';
import Onboarding from '@/features/onboarding';


const sofia_Sans = Sofia_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Onboarding/>
    </>
  )
}
