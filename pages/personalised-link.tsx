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
        <iframe width="100%" height="800px" src="https://plugin-remix.k8s.skedify.io/frontend/schedule/timetable?config.language=en-GB&config.browser.timeZone=Europe%2FOslo&subjectId=24&meetingType=office&officeId=109&config.flow=TQC&agentId=545&startDate=2022-07-04" />
      </Example>
    </>
  );
};

export default Home;
