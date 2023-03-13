import '@/styles/globals.css'
import { ThemeProvider } from '@mui/styles';
import { Provider } from 'jotai/react';
import type { AppProps } from 'next/app'
import { useAtom } from "jotai"
import { themeAtom } from '@/core/utils/utils.state';
import { darkTheme, lightTheme } from '@/core/utils/theme';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

export default function App({ Component, pageProps }: AppProps) {
     if (typeof window !== "undefined") {
          // Client-side-only code
          defineCustomElements(window); 
        }
     return(
          <Provider>
               <Component {...pageProps} />
          </Provider>
     )
}
     