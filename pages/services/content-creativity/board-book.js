import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import { NextSeo } from "next-seo";

const BoardBook = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <NextSeo
        title="Board Book | Services"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Board Book | Services",
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

      <PageBanner pageTitle="Content and Creativity" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h1>Board Book</h1>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>

                <h5>
                  Nurture a love of books and reading for toddlers with the aid
                  of board books.
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  A board book is a book with durable board pages (often
                  referred to as “paperboard”) instead of paper pages. They have
                  strong, solid covers and thick pages, yet they're smaller than
                  regular story books. The durable pages and overall structure
                  of these books are made to resist rough handling since younger
                  children are prone to biting, chewing, and grabbing everything
                  in sight. With the help of these great features that make up a
                  good board book, authors can be guided as they tell their
                  story through text and various illustrations.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Bearing these few steps in mind will not be enough to get the
                  overall satisfactory finish. Creating a compelling cover
                  design, planning a thorough interior layout, selecting the
                  appropriate illustrations, and coming up with the best
                  marketing strategies are equally essential for your book's
                  success. At Author Reputation Press, we’ve got you covered
                  with our board book packages that are tailored to your
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="pricing-area  pb-50 ">
        <div className="container">
          <div className="section-title">
            <h4>Choose From Our Range of Board Book Publishing Packages</h4>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>PICASSO</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>5,999 <span></span>
                  </span>
                </div>

                <div className="pricing-footer">
                  <Link href="/packages/picasso">
                    <a className="btn btn-primary">More Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table ">
                <div className="pricing-header ">
                  <h3>DA VINCI</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>6,999 <span></span>
                  </span>
                </div>

                <div className="pricing-footer">
                  <Link href="/packages/da-vinci">
                    <a className="btn btn-primary">More Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>VAN GOGH</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>8,999 <span></span>
                  </span>
                </div>

                <div className="pricing-footer">
                  <Link href="/packages/van-gogh">
                    <a className="btn btn-primary">More Details</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
        <div className="shape7">
          <img src="/images/shape4.svg" alt="shape" />
        </div>
        <div className="shape4">
          <img src="/images/shape4.svg" alt="shape" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BoardBook;
