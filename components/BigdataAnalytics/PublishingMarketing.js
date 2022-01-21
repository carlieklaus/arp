import Link from "next/link";

const PublishingMarketing = () => {
  return (
    <>
      <div className="features-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <div className="col-lg-12 col-md-12 services-content">
                  <div className="section-title">
                    <h2>PUBLISHING</h2>
                    <div className="bar"></div>
                    <p>
                      Author Reputation Press (ARP) comprises a team of
                      professional book editors, writers, and designers in
                      publishing who understand and are well-versed in the
                      industry.
                    </p>

                    <p style={{ marginTop: "20px" }}>
                      ARP will walk with you every step of the journey to turn
                      your imagination into pages and help determined and
                      passionate authors make their mark in the literary world.
                    </p>
                    <div
                      style={{
                        marginTop: "2rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link href={"/services/content-creativity"}>
                        <button className="btn btn-primary">Explore</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 features-details-image">
              <img
                src="/images/business/publishing.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>
          </div>
          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/business/marketing.png"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <div className="col-lg-12 col-md-12 services-content">
                  <div className="section-title">
                    <h2>MARKETING</h2>
                    <div className="bar"></div>
                    <p>
                      Author Reputation Press (ARP) commits to increasing brand
                      recognition and distinguishing the publication. ARP offers
                      services that include a wide range of first-class
                      marketing and advertising campaigns.
                    </p>
                    <p style={{ marginTop: "20px" }}>
                      With the combined talent of our marketing experts and
                      seasoned publicists, we are at the forefront of driving
                      your success as an author by leveraging the power of both
                      traditional media platforms and modern digital services.
                    </p>
                    <div
                      style={{
                        marginTop: "2rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link href={"/services/powerhouse"}>
                        <button className="btn btn-primary">Explore</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublishingMarketing;
