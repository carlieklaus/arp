import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import { NextSeo } from "next-seo";

const TranslationService = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <NextSeo
        title="Translation Services | Services"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Translation Services | Services",
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
                    <h1>Translation Services</h1>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h5 style={{ marginTop: "2rem" }}>
                  Your Excellent Choice for Professional Translation Services
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Using our translation services, you can reach out to new
                  audiences in different languages. Author Reputation Press
                  provides book translation services to authors who want to
                  reach a global audience with their book, whether it is a
                  novel, poetry collection, or memoir.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  We offer the most spoken languages in the world for our
                  translation services such as, but not limited to, Mandarin
                  Chinese, Spanish, UK English, Modern Standard Arabic,
                  Portuguese, Bengali, Russian, Japanese, and Punjabi. In
                  addition, we can also translate files vice versa.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Our professional translators are meticulously screened to help
                  our authors receive nothing but the best. They make sure that
                  the accuracy, clarity, and the seamlessness of their
                  translated manuscripts are thoroughly maintained and
                  proof-read, without losing a bit of professionalism. Our
                  translators have years of experience in handling various
                  projects from different major industries. Thus, first-class
                  results are always ensured.
                </p>

                <h5 style={{ marginTop: "2rem" }}>Breaking the Barrier</h5>
                <p style={{ marginTop: "1rem" }}>
                  Break through the language barrier. Our translation services
                  enable authors to reach a global audience and increase their
                  readership exponentially, regardless of geography. We assist
                  authors in capturing a sizable portion of that market. With
                  the help of our translators’ expertise, we will be able to
                  accomplish more translation services without having to worry
                  of a poor-quality outcome.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Your work will be translated in the style and tone of the
                  original language. Complete editing and proofreading services
                  are provided to prepare the book for publication.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h4>How It Works</h4>
                  <ul>
                    <li>
                      <h6>
                        Your manuscript will be forwarded to our translators
                        indicating the language/languages in which you wish your
                        manuscript to be translated to.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        Your work will be manually translated with a genuine
                        style and tone of the language of your choice as if it
                        was originally written in that language.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        Our translators can translate works in any genre and
                        maintains a high level of reputation in the industry.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        Translation comes with complete editing and proofreading
                        services to make the book ready for publication.
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

export default TranslationService;
