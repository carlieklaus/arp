import React from "react";
import OwlCarousel from "react-owl-carousel3";
import * as Icon from "react-feather";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

const options = {
  loop: false,
  nav: false,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 5000,
  items: 1,
  animateOut: "fadeOut",
};

const Testimonials = ({ testimonials }) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="ml-feedback-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>What The Authors Have To Say About ARP</h2>
          <div className="bar"></div>
        </div>

        {display ? (
          <OwlCarousel
            className="ml-feedback-slides owl-carousel owl-theme"
            {...options}
          >
            {testimonials &&
              testimonials.map((item) => (
                <div className="single-ml-feedback-item">
                  <Row>
                    <Col lg={3} style={{ display: "flex" }}>
                      <div className="client-info">
                        {item?.author?.picture !== null && (
                          <Image
                            src={item?.author?.picture?.url}
                            alt={`${item?.author?.firstname} ${item?.author?.lastname}`}
                            width={200}
                            height={200}
                            layout="intrinsic"
                          />
                        )}
                        <h3>
                          <a href={`/authors/${item?.author?.username}`}>
                            {`${item?.author?.firstname} ${item?.author?.lastname}`}
                          </a>
                        </h3>
                        <span>{item?.book}</span>
                      </div>
                    </Col>
                    <Col lg={9}>
                      <p>{item?.description}</p>
                    </Col>
                  </Row>
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
