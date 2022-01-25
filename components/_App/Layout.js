import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home | Author Reputation Press</title>
      </Head>
      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { req, res } = context;

  if (req.headers.host.match(/^www/) !== null) {
    res.writeHead(301, {
      location: "https://" + req.headers.host.replace(/^www./, "") + req.url,
    });
    res.end();
  }

  return { props: {} };
};

export default Layout;
