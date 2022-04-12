import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import FeedbackStyleTwo from "@/components/Common/FeedbackStyleTwo";
import { Loader } from "react-overlay-loader";

import Head from "next/head";
import { API_URL } from "config";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const AuthorProfile = ({ user }) => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Authors | Author Reputation Press"
        description="Author's Profile"
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Authors | Author Reputation Press",
          description: "Author's Profile",
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

      <PageBanner pageTitle="Author's Profile" />

      {!user && <Loader fullPage loading />}

      <div className="profile-area">
        <div className="container">
          <div className="profile-box ptb-100">
            <div className="row align-items-center">
              <>
                <div className="col-lg-4 col-md-4">
                  <div className="image">
                    {user?.picture ? (
                      <img src={user?.picture?.url} alt="profile" />
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src="/images/user.png"
                          alt="profile"
                          width={200}
                          height={200}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-8 col-md-8">
                  <div className="content">
                    <h3>{`${user?.firstname ?? ""} ${
                      user?.lastname ?? ""
                    }`}</h3>
                    <span className="sub-title">Author</span>
                    <p style={{ textAlign: "justify", fontStyle: "italic" }}>
                      {user?.biography}
                    </p>

                    {/* <ul className="info">
                      <li>
                        <span>Phone Number:</span>{" "}
                        <a href={`tel:+${user?.phone ?? ""}`}>
                          {user?.phone ?? ""}
                        </a>
                      </li>
                      <li>
                        <span>Email:</span>{" "}
                        <a href={`mailto:${user?.email ?? ""}`}>
                          {user?.email ?? ""}
                        </a>
                      </li>
                    </ul> */}

                    {/* <ul className="social-link">
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <i className="bx bxl-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <i className="bx bxl-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <i className="bx bxl-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <i className="bx bxl-linkedin"></i>
                          </a>
                        </li>
                      </ul> */}
                  </div>
                </div>
              </>

              {user?.books.length > 0 && (
                <FeedbackStyleTwo books={user?.books} />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { username } = params;

  const query = await fetch(`${API_URL}/users?username=${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await query.json();

  if (query.ok) {
    return {
      props: {
        user: response[0],
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}

export default AuthorProfile;
