import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import useSWR from "swr";
import { API_URL } from "config";

const ServicesArea = () => {
  const router = useRouter();

  const servicesQuery = async () => {
    const query = await fetch(
      `${API_URL}/subservices?service.id=1&_sort=name:ASC`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return await query.json();
  };

  const { data: subservices, error: servicesError } = useSWR(
    `${API_URL}/subservices?service.id=1&_sort=name:ASC`,
    servicesQuery
  );

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back">
                  <h2>Content and Creativity</h2>

                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
                <p>
                  Choose any of our wide array of services that will help you in
                  publishing your literary works!
                </p>
              </div>

              <div className="row">
                {subservices &&
                  subservices.map((item) => (
                    <div className="col-lg-6 col-md-6">
                      <Link href={`/services/content-creativity/${item?.slug}`}>
                        <div className="box" style={{ cursor: "pointer" }}>
                          <Icon.Globe /> {item?.name}
                        </div>
                      </Link>
                    </div>
                  ))}

                {servicesError && (
                  <div>
                    <div className="col-lg-12 col-md-12">
                      <Link href={`/`}>
                        <div className="box" style={{ cursor: "pointer" }}>
                          Sorry but there are some error fetching the
                          subservices
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
