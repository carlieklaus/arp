import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const BasicProfessional = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Professional Basic Book Trailer</title>
        <link
          rel="canonical"
          href={`${
            process.env.NEXT_PUBLIC_URL ?? "https://authorreputationpress.com"
          }${router.pathname}`}
        />
      </Head>
      <Navbar />

      <PageBanner pageTitle="Online Video Discovery" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Professional Basic Book Trailer</h2>
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
                  Let us help you captivate your readers and bloggers alike with
                  our creative video clips. Our team of professional video
                  editor and script writer will handle every creative aspect of
                  the video production while you focus on telling your story.
                </h5>
                <div style={{ marginTop: "2rem" }}>
                  <h6>
                    Our Professional Basic Book trailer includes the following
                    services:
                  </h6>
                  <ul>
                    <li>
                      Creation of a custom-made book video spanning
                      approximately 90 seconds
                    </li>
                    <li>
                      Storytelling through text and 2-D graphics and image
                    </li>
                    <li>
                      Distribution of your book video to YouTube and Dailymotion
                    </li>
                    <li>
                      Web streaming support and high-quality video downloads
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Revisions</h5>
                  <p>
                    You will be able to make two rounds of revisions to your
                    video at no additional cost. Any additional rounds of
                    revisions will incur charges. Acceptable changes include:
                  </p>
                  <ul>
                    <li>Simple text changes</li>
                    <li>Changes in font size</li>
                    <li>
                      Corrections or additions to book and author information
                    </li>
                    <li>Changes to audio levels</li>
                    <li>
                      Image changes (if you want to provide your own or you feel
                      like an image is not appropriate)
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Inclusion</h5>

                  <ul>
                    <li>
                      A video of up to 90 seconds in length complete with
                      images, music, and text, with an option for two rounds of
                      edits.
                    </li>
                  </ul>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <h5>Distribution</h5>

                  <ul>
                    <li>
                      Social Media and Book Blogger Program Submission (This
                      applies to any genre, excluding erotica.)
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

export default BasicProfessional;
