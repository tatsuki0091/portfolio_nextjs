import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../components/commons/Navigation";
import Footer from "../components/commons/Footer";
import { ThemeProvider } from "next-themes";
import { DataContext } from "../components/contexts/DataContext";
import React, { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  return (
    <>
      <DataContext.Provider value={{ mounted, setMounted }}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </DataContext.Provider>
    </>
  );
}

export default MyApp;
