import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ServicesArea from "@/components/ITStartup/ServicesArea";
import Head from "next/head";

export default function ContentCreativity() {
  return (
    <>
      <Head>
        <title>Content and Creativity | Author Reputation Press</title>
        <link
          rel="canonical"
          href={`${
            process.env.NEXT_PUBLIC_URL ?? "https://authorreputationpress.com"
          }${router.pathname}`}
        />
      </Head>
      <Navbar />

      <PageBanner pageTitle="Services" />
      <ServicesArea />

      <Footer />
    </>
  );
}
