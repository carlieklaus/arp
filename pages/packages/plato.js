import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import { NextSeo } from "next-seo";

const Plato = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <NextSeo
        title="Plato | Publishing Package"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Plato | Publishing Package",
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
      <PageBanner pageTitle="Plato Publishing Package" />
      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Plato Package</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>

              <h3>Price: $2,699</h3>
              <p style={{ marginTop: "1rem" }}>
                The Plato publishing service is the better deal for
                self-publishing authors. In addition to the paperback and E-book
                formats, it includes a hardback version and more complimentary
                copies for giveaways during book-signing or promotional events.
                This package combines the best services from our cover designs
                and guaranteed listing on large marketplaces such as Amazon,
                Barnes & Noble, and Waterstones. This package offers a scaled-up
                publishing service to help accelerate the publication and
                release of your book to the market.
              </p>

              <h4 style={{ marginBottom: "1rem" }}>Inclusions:</h4>

              <Container>
                <Row>
                  <Col sm={6} md={6} lg={6}>
                    <h5>Available Format</h5>
                    <ul>
                      <li>
                        <h6>Paperback</h6>
                      </li>
                      <li>
                        <h6>Hardback</h6>
                      </li>
                      <li>
                        <h6>E-Book</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>Cover</h5>
                    <ul>
                      <li>
                        <h6>Custom text and layout formatting</h6>
                      </li>
                      <li>
                        <h6>Custom-designed cover</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>Interior Layout</h5>
                    <ul>
                      <li>
                        <h6>
                          Trim size: 6.0″ x 9.0″ and 5.5″ X 8.5″ and 8.5″ x
                          11.0″
                        </h6>
                      </li>
                      <li>
                        <h6>Standard Text & Layout Formatting</h6>
                      </li>
                      <li>
                        <h6>Unlimited Image Insertion</h6>
                      </li>
                      <li>
                        <h6>Unlimited Corrections – Production Stage</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>Registrations And Distribution</h5>
                    <ul>
                      <li>
                        <h6>Registration with Books In Print database</h6>
                      </li>
                      <li>
                        <h6>Copyrights Registrations</h6>
                      </li>
                      <li>
                        <h6>Assignment of ISBN</h6>
                      </li>
                      <li>
                        <h6>Library of Congress Registration</h6>
                      </li>
                      <li>
                        <h6>Worldwide Online Book Distribution</h6>
                      </li>
                      <li>
                        <h6>Online book sales and Royalty Accounting</h6>
                      </li>
                      <li>
                        <h6>Quarterly Royalty Payments</h6>
                      </li>
                      <li>
                        <h6>ARP Bookstore Availability</h6>
                      </li>
                    </ul>
                  </Col>

                  <Col sm={6} md={6} lg={6}>
                    <h5>Add Ons</h5>
                    <ul>
                      <li>
                        <h6>Author's Discount on Bulk Order</h6>
                      </li>
                      <li>
                        <h6>Lowest SRP</h6>
                      </li>
                      <li>
                        <h6>1 Paperback Author's Copy</h6>
                      </li>
                      <li>
                        <h6>1 Hardback Author's Copy</h6>
                      </li>
                      <li>
                        <h6>10 Paperback Free Copies</h6>
                      </li>
                      <li>
                        <h6>5 Hardback Free Copies</h6>
                      </li>
                      <li>
                        <h6>Book Returns Insurance for 12 months</h6>
                      </li>
                      <li>
                        <h6>
                          Promotions on ARP’s blogsite and social media pages
                        </h6>
                      </li>
                      <li>
                        <h6>Professional’s Review</h6>
                      </li>
                      <li>
                        <h6>Comprehensive Facebook Ad Campaign – 30 Days</h6>
                      </li>
                      <li>
                        <h6>
                          Social Media Management/Social Media Blast – 30 Days
                        </h6>
                      </li>
                      <li>
                        <h6>Amazon Bookseller’s Campaign – 30 Days</h6>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Plato;
