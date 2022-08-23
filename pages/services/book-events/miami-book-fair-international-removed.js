import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import { NextSeo } from "next-seo";

const MiamiBookFairInternational = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <NextSeo
        title="Miami Book Fair International  | Services"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Miami Book Fair International  | Services",
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
                    <h1>Miami Book Fair International </h1>
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
                  Miami Book Fair International series of events.
                </h5>

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

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>Book Signing</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Author Reputation Press’ Book Signing and the Book Signing
                    with Video Documentation is designed to support a wide
                    exposure for your book, to build connections, to relate your
                    experiences with other authors and to enrich your literary
                    experience. This includes the following:
                  </p>
                  <ul>
                    <li>
                      <h6>1-hour Book Signing Slot per author</h6>
                    </li>
                    <li>
                      <h6>1 Print title on display</h6>
                    </li>
                    <li>
                      <h6>100 Paperback books</h6>
                    </li>
                    <li>
                      <h6>Book Signing Badge</h6>
                    </li>
                    <li>
                      <h6>Inclusion of your book in ARPress Gallery</h6>
                    </li>
                    <li>
                      <h6>
                        Shipping, storage, and handling of the books to the show
                        site
                      </h6>
                    </li>
                    <li>
                      <h6>Onsite poster at the fair during the signing</h6>
                    </li>
                    <li>
                      <h6>ARP Website Blog Feature</h6>
                    </li>
                    <li>
                      <h6>ARP social media Feature</h6>
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>
                    Book Signing with Video Documentation
                  </h5>

                  <ul>
                    <li>
                      <h6>1-hour Book Signing Slot per author</h6>
                    </li>
                    <li>
                      <h6>1 Print title on display</h6>
                    </li>
                    <li>
                      <h6>100 Paperback books</h6>
                    </li>
                    <li>
                      <h6>Book Signing Badge</h6>
                    </li>
                    <li>
                      <h6>Inclusion of your book in ARPress Gallery</h6>
                    </li>
                    <li>
                      <h6>
                        Shipping, storage, and handling of the books to the show
                        site
                      </h6>
                    </li>
                    <li>
                      <h6>Onsite poster at the fair during the signing</h6>
                    </li>
                    <li>
                      <h6>ARP Website Blog Feature</h6>
                    </li>
                    <li>
                      <h6>ARP social media Feature</h6>
                    </li>
                    <li>
                      <h6>Video production set </h6>
                    </li>
                    <li>
                      <h6>
                        Distribution of video output to streaming platforms such
                        as YouTube, social media accounts and on ARPress'
                        website
                      </h6>
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

export default MiamiBookFairInternational;