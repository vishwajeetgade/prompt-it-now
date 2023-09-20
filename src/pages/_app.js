import Head from "next/head";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Prompt It Now</title>
        <meta name="description" content="Discover & Share AI Prompts" />
      </Head>
      <SessionProvider >
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </>
  );
}
