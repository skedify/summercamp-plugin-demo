import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

import Example from "../components/SignupPage";

const Home: NextPage = () => {
  const URL = "https://plugin-remix.k8s.skedify.io/frontend/schedule/subject?config.flow=SOMTQC&agentId=545"
  return (
    <>
      <Head>
        <title>Meeting with Agent</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Example>
        <iframe width="100%" height="1000px" src={URL} />
      </Example>
    </>
  );
};

export default Home;
