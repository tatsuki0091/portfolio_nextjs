import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tatsuki Yamatani</title>
        <meta name="description" content="Tatsuki Yamatani" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-10 antialiased">
        <About />
      </main>
    </div>
  );
};

export default Home;
