import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Summercamp Plugin Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <Link href="/old">
          <a className="p-10 hover:bg-yellow-300">Old Plugin</a>
        </Link>
        <Link href="/new">
          <a className="p-10 hover:bg-green-300">New Plugin</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
