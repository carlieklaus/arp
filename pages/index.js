import React from "react";
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import MainBanner from "@/components/BigdataAnalytics/MainBanner";
import DiscoverArea from "@/components/BigdataAnalytics/DiscoverArea";
import Services from "@/components/BigdataAnalytics/Services";
import BigdataFunFacts from "@/components/BigdataAnalytics/BigdataFunFacts";
import Footer from "@/components/_App/Footer";
import Projects from "@/components/MachineLearning/Projects";
import Head from "next/head";
import PublishingMarketing from "@/components/BigdataAnalytics/PublishingMarketing";
import { useRouter } from "next/router";

const BigdataAnalytics = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Author Reputation Press is where you can find the most reliable team of author consultants with a combined experience of more than two decades in the industry."
        />

        <meta
          property="og:title"
          content="Author Reputation Press LLC"
          key="ogtitle"
        />

        <meta
          property="og:description"
          content="Author Reputation Press is where you can find the most reliable team of author consultants with a combined experience of more than two decades in the industry."
          key="ogdesc"
        />

        <meta
          property="og:image"
          content="/images/logo-book.png"
          key="ogimage"
        />
        <link
          rel="canonical"
          href={`${
            process.env.NEXT_PUBLIC_URL ?? "https://authorreputationpress.com"
          }${router.pathname}`}
        />
      </Head>
      <NavbarStyleFour textLogo="white" />
      <MainBanner />
      <Projects />
      <DiscoverArea />
      <Services />
      {/* <Features /> */}
      <PublishingMarketing />

      <BigdataFunFacts />

      <Footer />
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
export default BigdataAnalytics;
