import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Better Navbars</title>
        <meta name="description" content="Better Navbars" />
        <Link rel="icon" href="/logo.ico" />
      </Head>
      <main className="flex h-screen min-h-screen w-screen flex-col items-center justify-center bg-white">
        <Navbar />
      </main>
    </>
  );
};

export default Home;
