import '../styles/global.css';
import { AppProps } from "next/app";

function _App({Component, pageProps}: AppProps) {
  return (
    <Component {...pageProps}/>
  );
}

export default _App;
