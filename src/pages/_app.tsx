// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import { Normalize } from 'styled-normalize';
import { UserProvider } from '../contexts/UserContext';
import GlobalStyle from '../styles/global';
import Theme from '../styles/Theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <UserProvider>
        <Component {...pageProps} />
        <GlobalStyle />
        <Normalize />
      </UserProvider>
    </Theme>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
