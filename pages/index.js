import React from "react";
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import MainBanner from "@/components/BigdataAnalytics/MainBanner";
import DiscoverArea from "@/components/BigdataAnalytics/DiscoverArea";
import Services from "@/components/BigdataAnalytics/Services";
import BigdataFunFacts from "@/components/BigdataAnalytics/BigdataFunFacts";
import Footer from "@/components/_App/Footer";
import Projects from "@/components/MachineLearning/Projects";
import Features from "@/components/IOT/Features";
import Head from "next/head";

const BigdataAnalytics = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Author Reputation Press is where you can find the most reliable team of author consultants with a combined experience of more than two decades in the industry."
        />
        <meta property="og:type" content="article" />

        <meta property="og:title" content="Author Reputation Press LLC" />

        <meta
          property="og:description"
          content="Author Reputation Press is where you can find the most reliable team of author consultants with a combined experience of more than two decades in the industry."
        />

        <meta property="og:image" content="/images/logo-book.png" />

        <meta
          property="og:url"
          content="https://usa.authorreputationpress.com/"
        />

        <meta property="og:site_name" content="Author Reputation Press LLC" />
      </Head>
      <NavbarStyleFour textLogo="white" />
      <MainBanner />
      <Projects />
      <DiscoverArea />
      <Services />
      <BigdataFunFacts />
      <Features />
      <Footer />
    </>
  );
};

export default BigdataAnalytics;
