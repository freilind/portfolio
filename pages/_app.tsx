import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { IntlProvider } from "react-intl";
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import darkTheme from '../components/ui/theme/DarkTheme';
import lightTheme from '../components/ui/theme/LightTheme';
import en from "../lang/en.json";
import es from "../lang/es.json";
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import { IMessage } from '../interfaces';

const messages: IMessage = {
  es,
  en,
};

const _app: FC<PropsWithChildren<AppProps>> = ({ Component, pageProps }) => {
  const router = useRouter();
  const locale = router.locale || 'es';
  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    ><NextUIProvider>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Component {...pageProps} />
        </IntlProvider>
      </NextUIProvider>
    </NextThemesProvider >
  )
}

export default _app;

