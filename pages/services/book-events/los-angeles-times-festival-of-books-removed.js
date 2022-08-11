import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import { NextSeo } from "next-seo";

const LosAngelesTimesFestival = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <NextSeo
        title="Los Angeles Times Festival of Books – Book Gallery | Services"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title:
            "Los Angeles Times Festival of Books – Book Gallery | Services",
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

      <PageBanner pageTitle="Book Events and Tours" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h1>Los Angeles Times Festival of Books – Book Gallery </h1>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                {/* <h3>$3,999.00</h3> */}

                <h5 style={{ marginTop: "2rem" }}>
                  Unleash the full potential of your marketing campaign through
                  LA Times Festival of Books series of events.
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Considered as one of the biggest and most prestigious book
                  festivals in the entire United States, the Los Angeles Times
                  Festival of Books attracts a wild number of book lovers and
                  media lovers with more than 150,000 attendees.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  More than 200 exhibitors with books and merchandise for sale,
                  activities and giveaways, including special themed areas.
                  There will also be musical performances, food trucks and an
                  Independent author pavilion with a variety of indie writers
                  and titles.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>Book Gallery</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Book Gallery is a title showcase of books published by
                    Author Reputation Press. It is a physical display of an
                    author’s book along with other titles coming from various
                    genres and it is intended to maximize the exposure of the
                    book to a wider audience.
                  </p>
                  <ul>
                    <li>
                      <h6>1 Print Title on Display</h6>
                    </li>
                    <li>
                      <h6>
                        5 copies of paperback books available for sale during
                        the gallery
                      </h6>
                    </li>
                    <li>
                      <h6>Blog Feature on ARPress’ Website</h6>
                    </li>
                    <li>
                      <h6>ARPress’ Social Media Feature</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default LosAngelesTimesFestival;
