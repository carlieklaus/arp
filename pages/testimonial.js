import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Head from "next/head";
import LeftTestimonial from "@/components/Testimonials/LeftTestimonial";
import RightTestimonial from "@/components/Testimonials/RightTestimonial";
import { Loader } from "react-overlay-loader";
import useSWR from "swr";
import { API_URL } from "config";
import { useRouter } from "next/router";

export default function Testimonial() {
  const router = useRouter();
  const testimonialFetcher = async () => {
    const res = await fetch(`${API_URL}/testimonials?_sort=id:desc`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  };

  const { data: testimonials, error } = useSWR(
    `${API_URL}/testimonials`,
    testimonialFetcher
  );

  return (
    <>
      <Head>
        <title>Testimonials | Author Reputation Press</title>
        <link
          rel="canonical"
          href={`${
            process.env.NEXT_PUBLIC_URL ?? "https://authorreputationpress.com"
          }${router.pathname}`}
        />
      </Head>
      <Navbar />

      <PageBanner pageTitle="Testimonials" />

      {/* <Loader fullPage loading /> */}

      {!testimonials ? (
        <Loader fullPage loading />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        testimonials.map((test, index) =>
          Number(index + 1) % 2 === 0 ? (
            <LeftTestimonial
              key={index}
              title={test?.title ?? ""}
              description={test?.description ?? ""}
              author={test?.author ?? ""}
              image={test?.image?.url ?? ""}
            />
          ) : (
            <RightTestimonial
              key={index}
              title={test?.title ?? ""}
              description={test?.description ?? ""}
              author={test?.author ?? ""}
              image={test?.image?.url ?? ""}
            />
          )
        )
      )}

      <Footer />
    </>
  );
}
