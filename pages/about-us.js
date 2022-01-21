import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-feather";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <div className="center-row">
        <iframe
          className="mr-2"
          width="760"
          height="500"
          src="https://www.youtube.com/embed/Hjregt9rNQM?autoplay=1&mute=1&loop=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="ready-to-talk" style={{ marginTop: "3rem" }}>
        <div className="container">
          <h3>Author Reputation Press, LLC</h3>
          <p>
            We are a leading publishing company with headquarters in Canton,
            Massachusetts. Author Reputation Press (ARP) is committed to
            transforming an author’s imagination into pages and helping them
            carve out a name for themselves in the literary world.
          </p>

          {/* <Link href="/contact">
            <a className="btn btn-primary">Contact Us</a>
          </Link>

          <span>
            <Link href="#">
              <a>Or, get started now with a free trial</a>
            </Link>
          </span> */}
        </div>
      </div>

      <div
        className="partner-area partner-section"
        style={{ marginBottom: "5rem" }}
      >
        <div className="container">
          <div className="partner-inner">
            <div className="row justify-content-center">
              <div className="features-details-area ptb-80">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 features-details-image">
                      <img
                        src="/images/books/callcenter.jpg"
                        className="animate__animated animate__fadeInUp"
                        alt="image"
                        loading="lazy"
                      />
                    </div>

                    <div className="col-lg-6 features-details">
                      <div className="features-details-desc">
                        <div className="col-lg-12 col-md-12 services-content">
                          <div className="section-title">
                            <h2>Services</h2>
                            <div className="bar"></div>
                            <div style={{ marginBottom: "2rem" }}>
                              <h5
                                style={{
                                  color: "#0e314c",
                                  marginBottom: "1rem",
                                }}
                              >
                                Offering Publishing Services to Meet All of Your
                                Publication Needs
                              </h5>
                              <p>
                                We offer our authors high-quality editorial and
                                publishing services to help them advance in
                                their literary careers.
                              </p>
                            </div>
                            <h5
                              style={{
                                color: "#0e314c",
                                marginBottom: "1rem",
                              }}
                            >
                              Providing Excellent Book Marketing Services
                            </h5>
                            <p>
                              {" "}
                              Our services include a wide range of first-class
                              marketing and advertising campaigns. With the
                              combined talent of our marketing experts and
                              seasoned publicists, we are at the forefront of
                              driving your success as an author by harnessing
                              the power of both traditional media platforms and
                              modern digital services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="separate"></div>

                  <div className="row align-items-center">
                    <div className="col-lg-6 features-details">
                      <div className="features-details-desc">
                        <div className="col-lg-12 col-md-12 services-content">
                          <div className="section-title">
                            <h2>Achievements</h2>
                            <div className="bar"></div>
                            <p>
                              We have been delivering on our promise of total
                              customer satisfaction while bringing out the best
                              in every published story. With a large volume of
                              books already available to global readers, we aim
                              to work with more authors who are driven by their
                              passion and confidence in their work.
                            </p>

                            <p style={{ marginTop: "2rem" }}>
                              We have a large number of accomplished projects in
                              our portfolio. We have and will continue to assist
                              thousands of people in realizing their ambitions.
                              Our platform has allowed us to ensure that we do
                              everything possible to assist people in achieving
                              their goals. We have completely pleased our
                              clients, thanks to our staff's tireless efforts.
                              We excel in going above and above for the sake of
                              client service. It is our goal to increase client
                              retention and satisfaction. Our greatest
                              achievement is the impressive team that we have
                              assembled here. Our team made it possible for us
                              to run a platform whose primary purpose is to
                              assist people in realizing their ambitions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 features-details-image">
                      <img
                        src="/images/books/achieve.JPG"
                        className="animate__animated animate__fadeInUp"
                        alt="image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="newsletter-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="newsletter-image">
                <img src="/images/books/careers.jpg" alt="image" />
                <iframe
                  className="mr-2"
                  width="760"
                  height="500"
                  src="https://www.youtube.com/embed/Hjregt9rNQM?autoplay=1&mute=1&loop=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-0">
              <div className="newsletter-content">
                <h2>Start your free trial</h2>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your business email here"
                  />
                  <button type="submit">Sign Up Free</button>
                </form>

                <p>
                  Test out the Big Data Analytics features for 14 days, no
                  credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
}
