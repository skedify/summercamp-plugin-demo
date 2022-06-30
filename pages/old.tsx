import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useRef } from "react";
import Example from "../components/SignupPage";

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //@ts-ignore
    if(window.Skedify?.Plugin) {
      //@ts-ignore
      window.Skedify.Plugin(ref.current, {});
    }
  }, [])

  return (
    <>
      <Head>
        <title>Old Plugin App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Example>
        <div
          ref={ref}
          className="skedify-plugin"
          id="skedify-plugin-wrapper"
          {...{ "skedify:oauth.client": "nqDtqanHFdemHyyqlxqvEjglCvUmtNql8HOPG1HI" }}
        ></div>
      </Example>
      <Script src="https://plugin.k8s.skedify.io/frontend/skedify-plugin.js" />
    </>
  );
};

export default Home;
