import React from "react";
import Link from "next/link";
import Image from "next/image";

const DiscoverArea = () => {
  return (
    <div className="discover-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <Image
              src="/images/authorguide2022.png"
              className="animate__animated animate__fadeInUp animate__delay-0.6s"
              alt="Authors Guide"
              width={400}
              height={550}
              layout="intrinsic"
            />
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="discover-content">
              <h2>Get Your Author's Guide</h2>
              <p>
                Author Reputation Press’ publishing guide provides a
                step-by-step method of bringing your manuscript from scratch to
                completion as well as harness our broad distribution network for
                books, reaching millions of readers worldwide.
              </p>
              <p>
                Sign up for the Author’s Guide to Successful Publishing today!
                Inside, you’ll have access to a proven roadmap to take your work
                from idea to a professionally published book.
              </p>

              <Link href="/authors-guide">
                <a className="btn btn-primary">GET IT NOW!</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="analytics-shape1">
        <img src="/images/bigdata-analytics/analytics-shape1.png" alt="image" />
      </div>
    </div>
  );
};

export default DiscoverArea;
