import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import { NextSeo } from "next-seo";

const Picasso = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <NextSeo
        title="Picasso | Publishing Package"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Picasso | Publishing Package",
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

      <PageBanner pageTitle="Picasso Publishing Package" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Picasso Package</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>

              <h3>Price: $5,999 </h3>
              <p style={{ marginTop: "1rem" }}>
                A board book's unique design is an excellent way to introduce
                children to reading. They allow toddlers to safely explore the
                text and images using all their senses. You may nurture an early
                love of reading by showing babies that reading is fun and that
                they can play with books.
              </p>

              <p style={{ marginTop: "1rem" }}>
                Board books also allow for valuable bonding time. Sharing basic
                board books with a child helps develop listening and visual
                abilities, which are the foundation for later independent
                reading. Board books, with their graphics and few words, provide
                lots of opportunities to "point and say."
              </p>

              <p style={{ marginTop: "1rem" }}>
                Impart knowledge of the world and establish a joyful and loving
                connection between toddlers and grownups with the help of board
                books. Let us help you realize these purposes with our Picasso
                publishing package, which comes along with your desired
                illustrations and other inclusions. See the full package
                inclusions below:
              </p>

              <h4 style={{ marginBottom: "1rem" }}>Inclusions:</h4>

              <Container>
                <Row>
                  <Col sm={6} md={6} lg={6}>
                    <h5>AVAILABLE SIZES</h5>
                    <ul>
                      <li>
                        <h6>5.905" x 5.905"</h6>
                      </li>
                      <li>
                        <h6>6" x 6" (standard)</h6>
                      </li>
                      <li>
                        <h6>7" x 7"</h6>
                      </li>
                      <li>
                        <h6>8 x 8”</h6>
                      </li>
                      <li>
                        <h6>Customized*</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>Registrations And Distribution</h5>
                    <ul>
                      <li>
                        <h6>ARPress Online Bookstore Availability</h6>
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
                        <h6>Book Sales and Royalty Accounting</h6>
                      </li>

                      <li>
                        <h6>Quarterly Royalty Payments</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>AUTHOR COPIES</h5>
                    <ul>
                      <li>
                        <h6>3 Copies</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>DISPLAY COPIES</h5>
                    <ul>
                      <li>
                        <h6>97 Copies (shipping and handling applies)</h6>
                      </li>
                    </ul>
                  </Col>

                  <Col sm={6} md={6} lg={6}>
                    <h5>COVER AND INNER</h5>
                    <ul>
                      <li>
                        <h6>
                          Minimum of 6 pages (3 spreads); Maximum of 10 pages (5
                          spreads)
                        </h6>
                      </li>
                      <li>
                        <h6>Gloss or Matte Cover Lamination</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>DESIGN AND CONTENT</h5>
                    <ul>
                      <li>
                        <h6>3 Basic Illustrations</h6>
                      </li>
                      <li>
                        <h6>Custom Cover Design</h6>
                      </li>
                      <li>
                        <h6>Custom Interior Layout</h6>
                      </li>
                      <li>
                        <h6>Unlimited Corrections (Pre-production stage)</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>ADD-ONS</h5>
                    <ul>
                      <li>
                        <h6>Publisher's Review</h6>
                      </li>
                      <li>
                        <h6>
                          Free promotion on ARP's blogsite and social media
                          pages
                        </h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>Time frame</h5>
                    <ul>
                      <li>
                        <h6>
                          4-6 months depending on the author’s responsiveness
                          and availability of the final design
                        </h6>
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

export default Picasso;
