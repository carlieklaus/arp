import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: false,
  nav: false,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 5000,
  items: 1,
};

const Testimonials = ({ testimonials }) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="feedback-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>What The Authors Have To Say About ARP</h2>
          <div className="bar"></div>
        </div>

        {display ? (
          <OwlCarousel
            className="testimonials-slides owl-carousel owl-theme"
            {...options}
          >
            {/*  */}

            {testimonials &&
              testimonials.map((item) => (
                <div className="single-feedback-item">
                  <p>{item?.description}</p>
                  <div
                    className="client-info "
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {item?.image !== null && (
                      <div className="image">
                        <img src={item?.image?.url} alt={item?.author} />
                      </div>
                    )}

                    <div
                      className="title"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <h3>{item?.author}</h3>
                      <span>{item?.book}</span>
                    </div>
                  </div>
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
      <div className="shape4">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape5">
        <img src="/images/shape5.png" alt="shape" />
      </div>
      <div className="shape6 rotateme">
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
