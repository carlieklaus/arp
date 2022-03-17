import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Facebook from "./Facebook";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home | Author Reputation Press LLC - Online Bookstore</title>
      </Head>
      {children}

      <Facebook />
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
