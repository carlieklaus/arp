import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Partner from "@/components/Common/Partner";
import { Container } from "react-bootstrap";

const SubmitManuscript = () => {
  return (
    <>
      <Head>
        <title>Submit Manuscript | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Submit Your Manuscript" />

      <Container style={{ marginTop: "4rem", marginBottom: "3rem" }}>
        <div>
          <h6 style={{ lineHeight: "2rem" }}>
            Prior to submission, please follow the formatting guidelines below:
          </h6>
          <ul style={{ fontSize: "1rem" }}>
            <li>Use double line spacing</li>
            <li>
              Use the common fonts such as Times New Roman, Georgia, and Calibri
            </li>
            <li>Set your font size to 12</li>
            <li>Include page numbers</li>
          </ul>

          <h6 style={{ lineHeight: "2rem" }}>
            To submit your manuscript, please click on the button below, fill
            out the necessary fields in the form, and attach a Word or PDF file
            of your work. In addition, please label your file as follows: LAST
            NAME_SUBMISSION.docx or LAST NAME_SUBMISSION.pdf.
          </h6>

          <h6 style={{ lineHeight: "2rem" }}>
            If we determine that your manuscript is ready for publication, our
            author consultants will give you a call to discuss the potential for
            publishing your book with Author Reputation Press. You will also
            receive an email confirmation after submitting your manuscript.
          </h6>
        </div>
      </Container>
      <Partner />
      <Container style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <h6 style={{ lineHeight: "2rem" }}>
          Author Reputation Press welcomes submissions from authors across all
          types of genre. Our goal is to provide equal opportunities to authors
          who seek a wider audience by evaluating their manuscript and getting
          it ready for publication.
        </h6>
        <h6 style={{ lineHeight: "2rem" }}>
          Our team of editors and proofreaders will guide you through every step
          of polishing your work if it needs a bit more work and revision.
        </h6>
      </Container>

      <Footer />
    </>
  );
};

export default SubmitManuscript;
