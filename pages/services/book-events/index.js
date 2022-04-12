import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import * as Icon from "react-feather";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import useSWR from "swr";
import { API_URL } from "config";

export default function BookEvents() {
  const router = useRouter();

  const servicesQuery = async () => {
    const query = await fetch(
      `${API_URL}/subservices?service.id=4&_sort=name:ASC`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return await query.json();
  };

  const { data: subservices, error: servicesError } = useSWR(
    `${API_URL}/subservices?service.id=4&_sort=name:ASC`,
    servicesQuery
  );

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <NextSeo
        title="Book Events and Tours | Author Reputation Press"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Book Events and Tours | Author Reputation Press",
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
      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back">
                  <h2>Book Events and Tours</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
                <p>
                  Elevate the level of exposure you have for your book by taking
                  part into two of the biggest and most prestigious literary
                  events in the entire United States—the LA Times Festival of
                  Books and the Miami Book Fair International. Author Reputation
                  Press maintains a strong will to increase your exposure and
                  literary experience through these events.
                </p>
              </div>

              <div className="row">
                {subservices &&
                  subservices.map((item) => (
                    <div className="col-lg-6 col-md-6">
                      <Link href={`/services/book-events/${item?.slug}`}>
                        <div className="box" style={{ cursor: "pointer" }}>
                          <Icon.Globe /> {item?.name}
                        </div>
                      </Link>
                    </div>
                  ))}

                {servicesError && (
                  <div>
                    <div className="col-lg-12 col-md-12">
                      <Link href={`/`}>
                        <div className="box" style={{ cursor: "pointer" }}>
                          Sorry but there are some error fetching the
                          subservices
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
