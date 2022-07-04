import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

import Example from "../components/SignupPage";

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //@ts-ignore
    if (window.Skedify?.PluginV2) {
      //@ts-ignore
      window.Skedify.PluginV2(ref.current, {});
    }

    //@ts-ignore
    return () => window.Skedify?.PluginV2?.disposeAll();
  }, []);

  return (
    <>
      <Head>
        <title>New Plugin App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Example>
        <div ref={ref} className="skedify-plugin" id="skedify-plugin-wrapper"></div>
      </Example>
      <Script src="https://plugin-remix.k8s.skedify.io/frontend/skedify-plugin.js" data-v2="true" />
    </>
  );
};

export default Home;
