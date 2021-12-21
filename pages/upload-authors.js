import { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Head from "next/head";
import { Button, Form, Row, Col } from "react-bootstrap";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_URL } from "config";
import Swal from "sweetalert2";
import XLSX from "xlsx";
import { Loader } from "react-overlay-loader";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email Address is required"),
  authors: yup
    .mixed()
    .required("You need to provide a file")
    .test("type", "We only support excel and csv files", (value) => {
      return value && value[0]?.type === "application/vnd.ms-excel";
    }),
});

const UploadAuthors = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const submitHandler = async (data) => {
    setLoading(true);

    const userRequest = await fetch(`${API_URL}/users?email=${data?.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const userResponse = await userRequest.json();

    if (userRequest.ok) {
      if (userResponse.length > 0) {
        if (userResponse[0].accountType !== "admin") {
          Swal.fire(
            "Warning",
            `You do not have the permission to upload this document`,
            "warning"
          );
          setLoading(false);
          return;
        }
        let queryerrors = false;
        try {
          const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.readAsArrayBuffer(data?.authors[0]);

            fileReader.onload = (e) => {
              const bufferArray = e.target.result;
              const wb = XLSX.read(bufferArray, { type: "buffer" });
              const wsname = wb.SheetNames[0];
              const ws = wb.Sheets[wsname];
              const i = XLSX.utils.sheet_to_json(ws);

              resolve(i);
            };

            fileReader.onerror = (error) => {
              reject(error);
              throw new Error(error);
            };
          });

          promise.then(async (a) => {
            a.map(async (y) => {
              const createAuthor = {
                accountType: y?.AccountType,
                firstname: y?.Firstname,
                lastname: y?.Lastname,
                email: y?.Email ?? `${y?.Username}@arp.com`,
                arpNumber: y?.Arpnumber,
                username: y?.Username,
                password: y?.Password,
                confirmed: true,
              };

              const request = await fetch(`${API_URL}/users`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(createAuthor),
              });

              const response = await request.json();

              if (!request.ok) {
                queryerrors = true;
                console.log(createAuthor);
                console.log(response);
              }
            });
            // changed.map(async (y) => {
            //   const createRoyalty = {
            //     arpNumber: String(y["Arp Number"]).toUpperCase(),
            //     date: y?.Date,
            //     isbn: String(y?.ISBN),
            //     authorEarning: y["author earning"],
            //     claimed:
            //       y?.claimed === "No" || y?.claimed === "no" ? false : true,
            //     bookFormat: y?.format,
            //     netsale: y?.netsale,
            //     percentage: parseFloat(y?.percentage) * 100,
            //     quantity: y?.quantity,
            //     source: y?.source,
            //     title: String(y?.title),
            //     withdrawEligible: y["withdraw eligible"],
            //     status:
            //       y["withdraw eligible"] === "No" ||
            //       y["withdraw eligible"] == "no"
            //         ? "READY"
            //         : "",
            //     type: data?.type,
            //     uploadedBy: data?.email,
            //   };

            //   const request = await fetch(`${API_URL}/royalties`, {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(createRoyalty),
            //   });

            //   const response = await request.json();

            //   if (!request.ok) {
            //     errors = true;
            //     throw new Error("Error in uploading royalties to database");
            //   }
            // });
          });
        } catch (error) {
          console.error(error);
        } finally {
          if (!queryerrors) {
            Swal.fire("Success", `Upload success!`, "success");
          }
          setLoading(false);
          reset();
        }
      } else {
        Swal.fire("Warning", `User do not exist`, "warning");
        setLoading(false);
        return;
      }
    } else {
      setLoading(false);
      Swal.fire(
        "Error",
        `There's an error in uploading the document, please check the file and try again.`,
        "error"
      );
      return;
    }
  };

  return (
    <>
      <Head>
        <title>Upload Authors</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Upload Authors" />
      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <h2>Upload</h2>
                <div className="bar"></div>
                <p>Fill in the information below</p>
              </div>
              {loading && <Loader fullPage loading />}
              <Form onSubmit={handleSubmit(submitHandler)}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="email" {...register("email")} />
                    {errors?.email && (
                      <p className="error-message">{errors?.email?.message}</p>
                    )}
                  </Col>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3 mr-2">
                  <Form.Label>Upload excel/csv file</Form.Label>
                  <Form.Control type="file" {...register("authors")} />
                  {errors?.authors && (
                    <p className="error-message">{errors?.authors?.message}</p>
                  )}
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className="btn btn-primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UploadAuthors;
