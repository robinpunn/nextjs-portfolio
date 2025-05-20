import Head from "next/head";
// import Image from 'next/image'
import { Inter } from "@next/font/google";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Robin | Web Developer</title>
        <meta
          name="description"
          content="Developer in progress."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Intro />
      {/*<About />*/}
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
