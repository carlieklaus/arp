import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ContactInfo from "@/components/Contact/ContactInfo";
import GoogleMap from "@/components/Contact/GoogleMap";
import ContactForm from "@/components/Contact/ContactForm";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function ContactUs() {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Contact Us | Author Reputation Press"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Contact Us | Author Reputation Press",
          description: "",
          images: [
            {
              url: "/images/logo-book",
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

      <PageBanner pageTitle="Contact Us" />
      <ContactForm />

      <ContactInfo />

      <GoogleMap />
      <Footer />
    </>
  );
}
