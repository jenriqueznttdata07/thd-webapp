import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/styles/Footer.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer /> {/* Renderizamos el Footer aquí */}
    </>
  );
}

