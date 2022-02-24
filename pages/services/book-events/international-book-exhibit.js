import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import { NextSeo } from "next-seo";
import { Table } from "react-bootstrap";

const InternationalBookExhibit = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <NextSeo
        title="International Book Exhibit | Services"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "International Book Exhibit | Services",
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

      <PageBanner pageTitle="Book Events and Tours" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h1>International Book Exhibit</h1>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>

                <p style={{ marginTop: "1rem" }}>
                  Author Reputation Press ® Book Exhibition Marketing holds the
                  key to growing your book sales by enabling you to reach your
                  target audience at trade shows. You can choose from over 10
                  annual shows where you can exhibit your book and unleash the
                  full potential of your marketing campaign.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Here is what’s in it for you. This is a tangible, physical
                  display of your book, hence, every audience will get the
                  chance to physically skim through your book’s pages. On these
                  International shows, the target audience includes a wide
                  selection of publishing industry professionals, including
                  librarians and traditional publishers.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>INCLUSIONS:</h5>
                  <ul>
                    <li>
                      <h6>Inclusion in International Show Exhibit</h6>
                    </li>
                    <li>
                      <h6>Full-page Ad in Exhibit Catalog</h6>
                    </li>
                    <li>
                      <h6>Full-page Ad in Exhibit Catalog</h6>
                    </li>
                    <li>
                      <h6>Full-page Ad in Exhibit Catalog</h6>
                    </li>
                    <li>
                      <h6>ARPress’ Social Media Feature</h6>
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>How It Works</h5>
                  <ul>
                    <li>
                      Your book will be displayed along with other ARPress
                      titles in a prime position on the exhibit floor.
                    </li>
                    <li>Your book will be displayed face-out on the shelf.</li>
                    <li>
                      A sticker bearing a unique QR code will be placed on the
                      lower left-hand side of the cover of the books that will
                      be displayed. Book fair attendees can then scan the code
                      using the Book Fair Buddy app to learn more about your
                      book. Using the app, they can add your book to their
                      to-be-read list, share that with friends, family, or on
                      their social media pages and even get connected to a
                      variety of reseller sites where they can purchase your
                      book.
                    </li>
                    <li>
                      At the show of your choice, your book will be assigned a
                      number, either based on its Dewey Decimal Subject Category
                      at library shows, or alphabetically, by publisher at
                      international venues.
                    </li>
                    <li>
                      Your book's full-page ad in the exhibit catalog will
                      include the following:
                      <ul>
                        <li>Title</li>
                        <li>
                          Your name as the author (as well as that of the
                          illustrator and/or editor, where applicable)
                        </li>
                        <li>Year of publication</li>
                        <li>Price</li>
                        <li>ISBN</li>
                        <li>
                          25-word description (that you can write on your own or
                          have our professional copywriters do it for you)
                        </li>
                        <li>Citations of awards and/or honors received.</li>
                      </ul>
                    </li>
                    <li>
                      You have the option to make up to three rounds of text
                      corrections to ensure the advertisement is perfect.
                    </li>
                    <li>
                      ARPress information will be included in the catalog as
                      part of the publisher directory, complete with all
                      pertinent contact and distribution information.
                    </li>
                    <li>
                      This information is also available online in a live
                      searchable database and archived for up to one year.
                    </li>
                    <li>
                      The official report and PDF of the exhibit catalog can
                      also be viewed online for up to one year after the event.
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>
                    You can choose from the following schedule for your desired
                    book exhibition:
                  </h5>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Show Name</th>
                        <th>Show Dates</th>
                        <th>Location</th>
                        <th>Registration Deadline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          2022 Bologna Book Fair NEW TITLE SHOWCASE: An official
                          exhibit of the fair
                        </td>
                        <td>Mar 21, 2022 - Mar 24, 2022</td>
                        <td>Bologna, Italy</td>
                        <td>Feb 28, 2022</td>
                      </tr>

                      <tr>
                        <td>2022 Public Library Association</td>
                        <td>Mar 22, 2022 - Mar 26, 2022</td>
                        <td>Portland, OR</td>
                        <td>Feb 25, 2022</td>
                      </tr>
                      <tr>
                        <td>2022 London Book Fair New Title Showcase</td>
                        <td>Apr 05, 2022 - Apr 07, 2022</td>
                        <td>London, UK</td>
                        <td>Mar 01, 2022</td>
                      </tr>
                      <tr>
                        <td>
                          2022 US Book Show (Virtual Only) Plus A FREE Physical
                          Book Display at the New York Library Assn.!
                        </td>
                        <td>May 23, 2022 - May 25, 2022</td>
                        <td>Virtual US Book Show/Physical New York</td>
                        <td>May 20, 2022</td>
                      </tr>
                      <tr>
                        <td>
                          2022 American Library Association Annual Conference
                        </td>
                        <td>Jun 23, 2022 - Jun 28, 2022</td>
                        <td>Washington D.C.</td>
                        <td>Jun 06, 2022</td>
                      </tr>
                      <tr>
                        <td>
                          2022 ALA Annual Diversity in Publishing Showcase
                        </td>
                        <td>Jun 24, 2022 - Jun 27, 2022</td>
                        <td>Washington D.C.</td>
                        <td>Jun 24, 2022</td>
                      </tr>
                      <tr>
                        <td>2022 Beijing International Book Fair</td>
                        <td>Aug 24, 2022 - Aug 27, 2022</td>
                        <td>Beijing, China</td>
                        <td>Jun 27, 2023</td>
                      </tr>
                      <tr>
                        <td>2022 Frankfurt International Book Fair</td>
                        <td>Oct 19, 2022 - Oct 23, 2022</td>
                        <td>Frankfurt, Germany</td>
                        <td>Sep 12, 2022</td>
                      </tr>
                      <tr>
                        <td>2022 Sharjah International Book Fair</td>
                        <td>Nov 02, 2022 - Nov 13, 2022</td>
                        <td>Sharjah, UAE</td>
                        <td>Oct 03, 2022</td>
                      </tr>
                      <tr>
                        <td>2022 New York Library Association</td>
                        <td>Nov 03, 2022 - Nov 04, 2022</td>
                        <td>Saratoga Springs, NY</td>
                        <td>Oct 14, 2022</td>
                      </tr>
                      <tr>
                        <td>2022 National Council Teachers of English</td>
                        <td>Nov 17, 2022 - Nov 20, 2022</td>
                        <td>Anaheim, CA</td>
                        <td>Oct 24, 2022</td>
                      </tr>
                      <tr>
                        <td>2022 Guadalajara International Book Fair</td>
                        <td>Nov 26, 2022 - Nov 30, 2022</td>
                        <td>Guadalajara, Mexico</td>
                        <td>Oct 14, 2022</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>Note</h5>
                  <ul style={{ marginTop: "1rem" }}>
                    <li>
                      Publish dates are subject to change by the event
                      organizers without prior notice. Please contact Author
                      Reputation Press ® to confirm dates for you.
                    </li>
                    <li>
                      Please note that the Purchase Deadline will be two (2)
                      weeks before your preferred show’s Registration Deadline.
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>Getting Started</h5>
                  <p style={{ marginTop: "1rem" }}>
                    For bundles and discounts, our Marketing Consultants are
                    available for pro bono consultation via e-mail at
                    info@authorreputationpress.com or telephone at
                    1-888-829-0229.
                  </p>
                  <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
                    Disclaimer: Prices are subject to change without prior
                    notice. Prices listed do not include any applicable sales,
                    use, excise, value-added, goods and services, or other tax,
                    which will be added to the total payable at the time of
                    purchase. Other restrictions may also apply.
                  </p>
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

export default InternationalBookExhibit;
