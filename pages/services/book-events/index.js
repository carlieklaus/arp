import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import * as Icon from "react-feather";
import Head from "next/head";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export default function BookEvents() {
  const router = useRouter();

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
                <div className="col-lg-12 col-md-12">
                  <Link href="/services/book-events/los-angeles-times-festival-of-books">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film />
                      Los Angeles Times Festival of Books – Book Gallery
                    </div>
                  </Link>
                </div>
                <div className="col-lg-12 col-md-12">
                  <Link href="/services/book-events/miami-book-fair-international">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film />
                      Miami Book Fair International – Book Gallery, Book Signing
                      & Book Signing with Video Documentation
                    </div>
                  </Link>
                </div>

                {/* <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/international-show">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Exhibition – International Show
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/package-international-show">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Exhibit Package – International Show
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/national-show">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Exhibit – National Show
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/package-national-show">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Exhibit Package – National Show
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/national-book-signing">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Signing – National
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/international-book-signing">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Signing – International
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/nts">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Exhibit – NTS
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
