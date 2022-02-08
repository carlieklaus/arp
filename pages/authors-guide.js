import { useState } from "react";
import { NextSeo } from "next-seo";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Button, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import Image from "next/image";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { API_URL } from "config";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email Address is required"),
  address: yup
    .string()
    .min(5, "Address must be at least 5 characters")
    .required("Address is required"),
  contact: yup.string().required("Contact is required"),
});

const GetStarted = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const setSpecifyManuscript = (val) => {
    specifyManuscript.current = val;
  };

  const submitHandler = async (data) => {
    setLoading(true);
    try {
      const checkEmail = await fetch(`${API_URL}/guides?email=${data?.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const req = await checkEmail.json();

      if (req.length > 0) {
        Swal.fire("Error", `This data already exists in the system`, "error");
        setLoading(false);
        return;
      }

      const request = await fetch(`${API_URL}/guides`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const reply = await request.json();

      if (reply?.statusCode || reply?.statusCode === 400) {
        Swal.fire(
          "Error",
          `There's something wrong with the request, please try again`,
          "error"
        );
        setLoading(false);
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        showCloseButton: true,
        html: `
        Please click the link below to download your guide. Thank you! <br />
        <a
        href="/guide/AuthorsGuide2022.pdf"
        target="_blank"
        class="btn btn-primary mr-2"
        download
      >
        Download
      </a>`,
      });
      reset({});
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <NextSeo
        title="Get Author's Guide"
        description=""
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Get Author's Guide",
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

      <PageBanner pageTitle="Get Author's Guide" />

      <Row
        className="mr-2"
        style={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingBottom: "5rem",
        }}
      >
        <Col
          lg={6}
          className="mr-2"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Take The Easy Path To Publish Your Work</h1>
          <div className="mr-2" style={{ marginBottom: "2rem" }}>
            <h5>
              Author Reputation Press' Publishing guide provides a step-by-step
              method of bringing your manuscript from scratch to completion
            </h5>
          </div>
          <Image
            src="/guide/authorguide.jpg"
            className="animate__animated animate__fadeInUp animate__delay-0.6s"
            alt="Authors Guide"
            width={900}
            height={550}
            layout="intrinsic"
          />
        </Col>
        <Col
          lg={6}
          className=" mr-2"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "100%",
              width: "100%",
            }}
          >
            <Form
              className="get-author-guide"
              onSubmit={handleSubmit(submitHandler)}
            >
              <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
                Get Your Author's Guide
              </h2>
              <Form.Group className="mb-3">
                <Form.Label> Do you have a manuscript?</Form.Label>
                <Form.Select
                  aria-label="Select"
                  onChange={(e) => setSpecifyManuscript(e.target.value)}
                >
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Currently working</option>
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="If other, please specify"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>What are your goals to your book?</Form.Label>
                <Form.Select aria-label="Select">
                  <option selected disabled>
                    Select options
                  </option>
                  <option value="1">Revenue</option>
                  <option value="3">Publicity</option>
                  <option value="2">Share Information/Story</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="If other, please specify"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label> Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  {...register("name")}
                />
                {errors?.name && (
                  <p className="error-message">{errors?.name?.message}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...register("email")}
                />
                {errors?.email && (
                  <p className="error-message">{errors?.email?.message}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contact Number</Form.Label>
                <PhoneInputWithCountry
                  defaultCountry="US"
                  placeholder="Enter phone number"
                  control={control}
                  name="contact"
                  defaultValue={""}
                  rules={{ required: true }}
                  // {...register("contact")}
                />
                {/* <Form.Control
                          type="text"
                          placeholder="Enter contact number"
                          {...register("contact")}
                        /> */}
                {errors?.contact && (
                  <p className="error-message">{errors?.contact?.message}</p>
                )}
              </Form.Group>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Address"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  {...register("address")}
                />
                {errors?.address && (
                  <p className="error-message">{errors?.address?.message}</p>
                )}
              </FloatingLabel>
              {/* <a
                        href="/guide/testfile.pdf"
                        target="_blank"
                        download
                        className="btn btn-primary"
                      >
                        Download
                      </a> */}
              <Button
                variant="primary"
                type="submit"
                disabled={loading}
                style={{ width: "100%" }}
              >
                {loading ? (
                  <Loader type="Puff" color="white" height={30} width={30} />
                ) : (
                  "Send me the guide!"
                )}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>

      <Footer />
    </>
  );
};

export default GetStarted;
