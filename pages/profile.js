import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import FeedbackStyleTwo from "@/components/Common/FeedbackStyleTwo";
import { getSession } from "next-auth/client";
import { Loader } from "react-overlay-loader";

import { NextSeo } from "next-seo";
import { API_URL } from "config";
import useSWR from "swr";
import { useRouter } from "next/router";

const Profile = ({ jwt }) => {
  const router = useRouter();
  const userQuery = async () => {
    const query = await fetch(`${API_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    return query.json();
  };

  const { data: user, error } = useSWR(`${API_URL}/users/me`, userQuery);
  return (
    <>
      <NextSeo
        title="Profile | Author Reputation Press"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Profile | Author Reputation Press",
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

      <PageBanner pageTitle="Profile" />

      {!user && <Loader fullPage loading />}

      <div className="profile-area">
        <div className="container">
          <div className="profile-box ptb-100">
            <div className="row align-items-center">
              {error ? (
                <div>{error}</div>
              ) : (
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
                      {/* <div style={{ marginTop: "3rem" }}>
                        <button className="btn btn-secondary">
                          Edit Profile
                        </button>
                      </div> */}
                    </div>
                  </div>
                </>
              )}

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

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const { jwt } = session;

  return {
    props: {
      jwt,
    },
  };
}

export default Profile;
