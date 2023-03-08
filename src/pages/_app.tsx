import '@/styles/globals.css'
import { ThemeProvider } from '@mui/styles';
import { Provider } from 'jotai/react';
import type { AppProps } from 'next/app'
import { useAtom } from "jotai"
import { themeAtom } from '@/core/utils/utils.state';
import { darkTheme, lightTheme } from '@/core/utils/theme';

export default function App({ Component, pageProps }: AppProps) {

  return(
     <Provider>
          <Component {...pageProps} />
     </Provider>
  )
}
     