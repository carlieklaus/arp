import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  margin: 30,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 3,
    },
    768: {
      items: 3,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

const Testimonials = ({ testimonials }) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="ml-feedback-area pt-80 ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>What The Authors Have To Say About ARP</h2>
          <div className="bar"></div>
        </div>
      </div>
      <div className="container-fluid">
        {display ? (
          <OwlCarousel
            className="ml-projects-slides owl-carousel owl-theme"
            {...options}
          >
            {testimonials &&
              testimonials.map((item) => (
                <div
                  className="single-ml-projects-box testimonies"
                  key={item?.id}
                >
                  {item?.author?.picture && (
                    <Image
                      src={item?.author?.picture?.url}
                      width={100}
                      height={100}
                      layout="fixed"
                    />
                  )}
                  <h5 style={{ marginTop: "1rem" }}>
                    <Link href={`/authors/${item?.author?.username}`}>
                      <a>
                        {item?.author?.firstname} {item?.author?.lastname}
                      </a>
                    </Link>
                  </h5>
                  <p>{item?.book}</p>
                  <p style={{ color: "black", marginTop: "2rem" }}>
                    {item?.description}
                  </p>
                </div>
              ))}
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>

      {/* Shape Images */}
      <div className="shape1">
        <img src="/images/shape1.png" alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
      <div className="shape3">
        <img src="/images/shape3.svg" alt="shape" />
      </div>
      <div className="shape4">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape7">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </div>
  );
};

export default Testimonials;
