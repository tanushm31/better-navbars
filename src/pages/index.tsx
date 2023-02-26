import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Better Navbars</title>
        <meta name="description" content="Better Navbars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-screen flex-col items-center justify-center bg-white dark:bg-black dark:text-white ">
        <div className="h-screen w-screen">
          <div className="text-xl">Init</div>
        </div>
      </main>
    </>
  );
};

export default Home;
