import { useState } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import Image from "next/image";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { API_URL } from "config";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import Link from "next/link";

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

      Swal.fire(
        "Success",
        "Please check your email for the link of the guide",
        "success"
      ).then(() => {
        reset({});
        setLoading(false);
        router.push("/");
      });
    } catch (error) {
      console.error(error);
    }
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

      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div
              className=""
              style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
            >
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo-2.png"
                    alt="Author Reputation Press Logo"
                    width={350}
                    height={100}
                    layout="fixed"
                  />
                </a>
              </Link>
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-8 col-md-12 col sm-12 author-guide">
                  <div className="hero-content">
                    <h1>Take The Easy Path To Publish Your Work</h1>
                    <h5 style={{ textAlign: "center" }}>
                      Author Reputation Press' publishing guide provides a
                      step-by-step method of bringing your manuscript from
                      scratch to completion
                    </h5>
                  </div>
                  <Image
                    src="/guide/authorbanner.jpg"
                    alt="Author Guide Banner"
                    width={650}
                    height={400}
                    layout="responsive"
                  />
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="banner-form ml-3">
                    <Form onSubmit={handleSubmit(submitHandler)}>
                      <h2
                        style={{
                          textAlign: "center",
                          marginBottom: "2rem",
                        }}
                      >
                        Get Your Author's Guide
                      </h2>
                      <Form.Group className="mb-3">
                        <Form.Label> Do you have a manuscript?</Form.Label>
                        <Form.Select aria-label="Select">
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                          <option value="3">Currently working</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>
                          What are your goals to your book?
                        </Form.Label>
                        <Form.Select aria-label="Select">
                          <option selected disabled>
                            Select options
                          </option>
                          <option value="1">Revenue</option>
                          <option value="3">Publicity</option>
                          <option value="2">Share Information/Story</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <FloatingLabel
                          controlId="floatingTextarea"
                          label="If other, please specify"
                        >
                          <Form.Control as="textarea" />
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
                          <p className="error-message">
                            {errors?.name?.message}
                          </p>
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
                          <p className="error-message">
                            {errors?.email?.message}
                          </p>
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
                        />

                        {errors?.contact && (
                          <p className="error-message">
                            {errors?.contact?.message}
                          </p>
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
                          <p className="error-message">
                            {errors?.address?.message}
                          </p>
                        )}
                      </FloatingLabel>

                      <Button
                        variant="primary"
                        type="submit"
                        disabled={loading}
                        style={{ width: "100%" }}
                      >
                        {loading ? (
                          <Loader
                            type="Puff"
                            color="white"
                            height={30}
                            width={30}
                          />
                        ) : (
                          "Send me the guide!"
                        )}
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default GetStarted;
