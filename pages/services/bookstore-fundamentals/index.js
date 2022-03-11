import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import * as Icon from "react-feather";
import Link from "next/link";
import { Button } from "react-bootstrap";
import GoogleMapsBookshops from "@/components/BigdataAnalytics/GoogleMapsBookshops";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import useSWR from "swr";
import { API_URL } from "config";

export default function BookstoreFundamentals() {
  const router = useRouter();

  const servicesQuery = async () => {
    const query = await fetch(
      `${API_URL}/subservices?service.id=3&_sort=name:ASC`,
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
    `${API_URL}/subservices?service.id=3&_sort=name:ASC`,
    servicesQuery
  );

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <NextSeo
        title="Bookstore Fundamentals | Author Reputation Press"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Bookstore Fundamentals | Author Reputation Press",
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
                  <h2>Bookstore Fundamentals</h2>

                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
                <p>
                  Choose any of our wide array of services that will help you in
                  publishing your literary works!
                </p>
              </div>

              <div className="row">
                {subservices &&
                  subservices.map((item) => (
                    <div className="col-lg-6 col-md-6">
                      <Link
                        href={`/services/bookstore-fundamentals/${item?.slug}`}
                      >
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

              <GoogleMapsBookshops />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
