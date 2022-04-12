import React from "react";
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import MainBanner from "@/components/BigdataAnalytics/MainBanner";
import DiscoverArea from "@/components/BigdataAnalytics/DiscoverArea";
import Services from "@/components/BigdataAnalytics/Services";
import BigdataFunFacts from "@/components/BigdataAnalytics/BigdataFunFacts";
import Footer from "@/components/_App/Footer";
import Projects from "@/components/MachineLearning/Projects";
import { NextSeo } from "next-seo";
import PublishingMarketing from "@/components/BigdataAnalytics/PublishingMarketing";
import { useRouter } from "next/router";

const BigdataAnalytics = () => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Top Book Publishers - Author Reputation Press LLC"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Top Book Publishers - Author Reputation Press LLC",
          description: "",
          images: [
            {
              url: "/images/logo-book.png",
              width: 800,
              height: 600,
              alt: "Author Reputation Press Logo",
              type: "image/png",
            },
          ],
          site_name:
            process.env.NEXT_PUBLIC_URL ?? "https://authorreputationpress.com/",
        }}
      />
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
