import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

import { API_URL } from "config";
import { useDebouncedCallback } from "use-debounce";
import useSWR from "swr";

const SearchServices = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState(null);
  const [subservices, setSubservices] = useState(null);

  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  useEffect(() => {}, [services, subservices]);

  const servicesQuery = async () => {
    const query = await fetch(`${API_URL}/services`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await query.json();
  };

  const { data: allServices, error: servicesError } = useSWR(
    `${API_URL}/services`,
    servicesQuery
  );

  const debounced = useDebouncedCallback(
    // function
    async (value) => {
      setLoading(true);
      if (value === "") {
        setServices(null);
        setSubservices(null);
        setLoading(false);
      } else {
        const servicesReq = await fetch(
          `${API_URL}/services?name_contains=${value}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const subservicesReq = await fetch(
          `${API_URL}/subservices?name_contains=${value}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const servicesRes = await servicesReq.json();

        const subservicesRes = await subservicesReq.json();

        if (servicesReq.ok && subservicesReq.ok) {
          setServices(servicesRes);
          setSubservices(subservicesRes);
          setLoading(false);
        } else {
          setLoading(false);
          console.error(servicesRes?.message);
          console.error(subservicesRes?.message);
        }
      }
    },
    // delay in ms
    1000
  );

  const serviceRouter = (slug) => {
    router.push(`/services/${slug}`);
  };

  return (
    <>
      <NextSeo
        title="Search Service | Publishing Package"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Search Service | Publishing Package",
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

      <PageBanner pageTitle="Services" />

      <div className="services-area ptb-80 " style={{ marginBottom: "10rem" }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Search Services</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>

                <div>
                  <Container style={{ position: "relative" }}>
                    <Form.Control
                      style={{ marginTop: "1rem", width: "100%" }}
                      type="text"
                      placeholder="Search any service"
                      defaultValue=""
                      onChange={(e) => debounced(e.target.value)}
                    />
                    {loading && (
                      <div
                        className="search-results"
                        style={{ padding: "1rem" }}
                      >
                        Loading...
                      </div>
                    )}
                    {services?.length === 0 && subservices?.length === 0 && (
                      <div
                        className="search-results"
                        style={{ padding: "1rem" }}
                      >
                        No results..
                      </div>
                    )}

                    {services && services.length > 0 && (
                      <div className="search-all-services">
                        {services?.length > 0 &&
                          services.map((service) => (
                            <div
                              className="search-item-service"
                              key={service?.id}
                            >
                              <Link href={`/services/${service?.slug}`}>
                                <Row>
                                  <Col
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      marginTop: ".5rem",
                                      marginBottom: ".5rem",
                                    }}
                                  >
                                    <span
                                      style={{ fontSize: "1rem" }}
                                    >{`${service?.name}`}</span>

                                    <p>Service</p>
                                  </Col>
                                </Row>
                              </Link>
                            </div>
                          ))}
                      </div>
                    )}

                    {subservices && subservices.length > 0 && (
                      <div className="search-all-services">
                        {subservices?.length > 0 &&
                          subservices.map((sub) => (
                            <div className="search-item-service" key={sub?.id}>
                              <Link
                                href={`/services/${sub?.service?.slug}/${sub?.slug}`}
                              >
                                <Row>
                                  <Col
                                    style={{
                                      display: "flex",
                                      marginTop: ".5rem",
                                      flexDirection: "column",
                                      marginBottom: ".5rem",
                                    }}
                                  >
                                    <span
                                      style={{ fontSize: "1rem" }}
                                    >{`${sub?.name}`}</span>
                                    <p>{`${sub?.service?.name}`}</p>
                                  </Col>
                                </Row>
                              </Link>
                            </div>
                          ))}
                      </div>
                    )}

                    <div className="row mr-2">
                      {allServices &&
                        allServices !== undefined &&
                        allServices.map((item) => (
                          <div
                            className="col-lg-6 col-sm-6 col-md-6"
                            key={item?.id}
                          >
                            <div className="single-solutions-box">
                              <div
                                style={{
                                  marginTop: "1rem",
                                  marginBottom: "1rem",
                                }}
                              >
                                <Image
                                  src={item?.image?.url}
                                  layout="intrinsic"
                                  width={100}
                                  height={100}
                                />
                              </div>
                              <h2>
                                <Link href={`/services/${item?.slug}`}>
                                  <a>{item?.name}</a>
                                </Link>
                              </h2>
                              <Container>
                                <p style={{ marginTop: "2rem" }}>
                                  {item?.description}
                                </p>
                              </Container>

                              <button
                                onClick={() => serviceRouter(item?.slug)}
                                className="btn btn-secondary"
                                style={{
                                  marginTop: "1rem",
                                  marginBottom: "1rem",
                                  backgroundColor: "#0077b5",
                                }}
                              >
                                Explore
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>

                    <div className="row mr-2"></div>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchServices;
