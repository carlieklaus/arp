import { NextSeo } from "next-seo";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const HollywoodBookToScreen = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <NextSeo
        title="Hollywood Book To Screen | Services"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Hollywood Book To Screen | Services",
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

      <PageBanner pageTitle="Powerhouse Platform" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h1>Hollywood Book To Screen</h1>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h4 style={{ textAlign: "center" }}>
                  Hollywood Book-to-Screen Service For Your Book's Film
                  Adaptation
                </h4>
                <p style={{ marginTop: "1rem" }}>
                  With the Book-to-Screen service, you can see your book
                  transformed into a motion picture. After a thorough
                  examination and study of the story, a cinematic version will
                  be created. The cover, title, character, plot, and all other
                  creative aspects of your book will be considered.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ textDecoration: "underline" }}>
                    Hollywood Movie Script Coverage{" "}
                  </h5>
                  <p style={{ marginTop: "1rem" }}>
                    Let us create a written outline of your book in a database
                    through our Movie Script Coverage and be discovered by major
                    studios in search of stories to adapt into motion pictures.
                    To be considered for a movie adaptation, your book needs to
                    have these basic elements: a cover sheet, synopsis, and
                    comments. We will endorse your manuscript to movie
                    producers, production companies, and studios. Submit a copy
                    of your manuscript today and we will fine-tune your book to
                    qualify for prospective agents, movie producers, and film
                    studios.
                  </p>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ textDecoration: "underline" }}>
                    Hollywood Movie Treatment{" "}
                  </h5>
                  <p style={{ marginTop: "1rem" }}>
                    Movie Treatment service is one of the first steps in writing
                    a screenplay, and it aims to provide a summary of your
                    work's screenplay idea and give you the Hollywood style of
                    fame that only a few authors have experienced. This package
                    includes a well-written, detailed story produced for the
                    screen (film, television, or digital) of your book's
                    screenplay idea, presenting its theme, plot, and characters
                    in a way that will captivate readers. Your book will then be
                    registered in an online database, making it more visible to
                    movie makers looking for latest content. Suggestions and
                    expectations are laid down to the agencies, studios, and
                    producers by stating exactly how to approach the adaptation
                    of your book. You can effectively demonstrate to them that
                    your book has what it takes to succeed on the big screen by
                    providing them with a visual sketch of how to adapt it for
                    the big screen.
                  </p>
                  <p style={{ marginTop: "1rem" }}>
                    This package includes the following services:{" "}
                  </p>
                  <ul>
                    <li>
                      <p>
                        Professional screenwriters who have experience adapting
                        books to film and television will write a 7–10-page
                        treatment detailing how to convert your manuscript into
                        a movie or TV series
                      </p>
                    </li>
                    <li>
                      <p>
                        Directory registration of your movie treatment to gain
                        traction among movie reviewers and film producers
                      </p>
                    </li>

                    <li>
                      <p>
                        US Copyright Office application to help you retain full
                        ownership of your treatment, which you can use during
                        your pitch appointments on your screenplay applications
                      </p>
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ textDecoration: "underline" }}>
                    Hollywood Movie Screenplay
                  </h5>
                  <p style={{ marginTop: "1rem" }}>
                    Your story’s path to Hollywood fame rests entirely in your
                    hands, and we want to help you chart that course with our
                    Movie Screenplay service. We are connected to a network of
                    film producers who can help turn your book into a
                    blockbuster movie through creative concept video production,
                    post-production, multimedia, and advertising services. A
                    screenplay is a professionally written script that
                    television and movie producers can use to see whether they
                    wish to make a film adaptation of your book. You will show
                    Hollywood that you are serious about breaking into the
                    entertainment industry if you have a properly adapted
                    screenplay. The screenplay will focus on your story’s
                    pivotal scenes, major characters, and the dialogue that
                    gives life to the story.
                  </p>
                  <p style={{ marginTop: "1rem" }}>
                    The Movie Screenplay Package includes:
                  </p>
                  <ul>
                    <li>
                      <p>
                        A carefully written screenplay by one of the first-rate
                        screenwriters based on your approved movie treatment
                      </p>
                    </li>
                    <li>
                      <p>
                        Character dialogue and detailed story events will be
                        included in the screenplay, which will be created using
                        industry-standard formatting and tools.
                      </p>
                    </li>

                    <li>
                      <p>
                        Submission of your draft screenplay to a producer for
                        review in preparation for a film adaptation Directory
                      </p>
                    </li>

                    <li>
                      <p>
                        Registration of your screenplay to gain attention from
                        co-writers, movie reviewers, and producers
                      </p>
                    </li>
                    <li>
                      <p>
                        US Copyright Office application to help you retain full
                        ownership of your screenplay, which you can use to
                        produce your own indie film
                      </p>
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

export default HollywoodBookToScreen;
