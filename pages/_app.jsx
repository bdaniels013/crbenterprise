import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet" />
        <title>CRB Enterprise — 1:1 Strategy Call</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
