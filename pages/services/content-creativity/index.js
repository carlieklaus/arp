import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ServicesArea from "@/components/ITStartup/ServicesArea";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export default function ContentCreativity() {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Content and Creativity | Author Reputation Press"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Content and Creativity | Author Reputation Press",
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
      <Navbar />

      <PageBanner pageTitle="Services" />
      <ServicesArea />

      <Footer />
    </>
  );
}
