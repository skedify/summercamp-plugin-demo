import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

import Example from "../components/SignupPage";

const Home: NextPage = () => {
  const URL =
    "https://plugin-remix.k8s.skedify.io/frontend/schedule/timetable?config.browser.timeZone=Europe%2FOslo&subjectId=24&meetingType=office&officeId=109&config.flow=TQC&agentId=545";
  return (
    <>
      <Head>
        <title>Personalised Link</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Example>
        <iframe width="100%" height="1000px" src={URL} />
      </Example>
    </>
  );

};

export default Home;
