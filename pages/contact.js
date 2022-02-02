import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ContactInfo from "@/components/Contact/ContactInfo";
import GoogleMap from "@/components/Contact/GoogleMap";
import ContactForm from "@/components/Contact/ContactForm";
import Head from "next/head";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Author Reputation Press</title>
        <link
          rel="canonical"
          href={`${
            process.env.NEXT_PUBLIC_URL ?? "https://authorreputationpress.com"
          }${router.pathname}`}
        />
      </Head>
      <Navbar />

      <PageBanner pageTitle="Contact Us" />
      <ContactForm />

      <ContactInfo />

      <GoogleMap />
      <Footer />
    </>
  );
}
