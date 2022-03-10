import React, { useState, useEffect, Fragment } from "react";
import Navbar from "@/components/_App/Navbar";
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";

import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ProductCard from "@/components/Shop/ProductCard";
import { API_URL } from "config";
import { Form, Container, Row, Col } from "react-bootstrap";
import { useDebouncedCallback } from "use-debounce";
import QueryString from "qs";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const Bookstore = ({ total }) => {
  const router = useRouter();
  const [books, setBooks] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [books]);

  const debounced = useDebouncedCallback(
    // function
    async (value) => {
      setLoading(true);
      if (value === "") {
        setBooks(null);
        setLoading(false);
      } else {
        const query = QueryString.stringify({
          _where: {
            _or: [
              { title_contains: value },
              { "author.username_contains": value },
              { "categories.name_contains": value },
            ],
          },
        });
        const request = await fetch(`${API_URL}/books?${query}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const authorQuery = await fetch(
          `${API_URL}/users?username_contains=${value}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const authorResponse = await authorQuery.json();

        const response = await request.json();

        if (request.ok || authorQuery.ok) {
          setBooks(response);
          setAuthors(authorResponse);
          setLoading(false);
        } else {
          setLoading(false);
          console.error(response?.message);
        }
      }
    },
    // delay in ms
    1000
  );

  return (
    <>
      <NextSeo
        title="Bookstore | Author Reputation Press LLC - Online Bookstore"
        description="Readers get the right and best books of different genres at the right prices at Author Reputation Press online bookstore"
        canonical={
          (
            `https://authorreputationpress.com` +
            (router.asPath === "/" ? "" : router.asPath)
          ).split("?")[0]
        }
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Bookstore | Author Reputation Press LLC - Online Bookstore",
          description:
            "Readers get the right and best books of different genres at the right prices at Author Reputation Press online bookstore",
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
      <NavbarStyleFour textLogo="white" />
      <PageBanner pageTitle="Bookstore" />
      <Container style={{ position: "relative", marginTop: "10rem" }}>
        <Form.Control
          style={{ marginTop: "1rem", width: "100%" }}
          type="text"
          placeholder="Search any book, author or category"
          defaultValue=""
          onChange={(e) => debounced(e.target.value)}
        />
        {loading && (
          <div className="no-results" style={{ padding: "1rem" }}>
            Loading...
          </div>
        )}
        {books?.length === 0 && authors?.length === 0 && (
          <div className="no-results" style={{ padding: "1rem" }}>
            No results..
          </div>
        )}

        {(books?.length > 0 || authors?.length > 0) && (
          <div className="search-results">
            {authors?.length > 0 &&
              authors.map((author) => (
                <div className="search-item" key={author?.id}>
                  <Link href={`/authors/${author?.username}`}>
                    <Row>
                      <Col lg={1} md={1} sm={1}>
                        {author?.picture && (
                          <Image
                            src={author?.picture?.url}
                            alt={author?.username}
                            layout="responsive"
                            width={40}
                            height={50}
                          />
                        )}
                      </Col>
                      <Col
                        lg={11}
                        md={11}
                        sm={11}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <span
                          style={{ fontSize: "1rem" }}
                        >{`${author?.firstname} ${author?.lastname} | Author`}</span>
                      </Col>
                    </Row>
                  </Link>
                </div>
              ))}
            {books?.length > 0 &&
              books.map((book, index) => (
                <div className="search-item" key={book?.id}>
                  <Link href={`/products/${book?.slug}`}>
                    <Row>
                      <Col lg={1} md={1} sm={1}>
                        <Image
                          src={book?.bookCover?.url}
                          alt={book?.title}
                          layout="responsive"
                          width={40}
                          height={50}
                        />
                      </Col>
                      <Col
                        lg={11}
                        md={11}
                        sm={11}
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <span
                          style={{ fontSize: "1rem" }}
                        >{`${book?.title}`}</span>

                        {book?.author ? (
                          <>
                            <p>{`by ${book?.author?.firstname} ${book?.author?.lastname}`}</p>
                            <p style={{ marginTop: "-1rem" }}>
                              {book?.categories.map((cat) => (
                                <Fragment key={cat?.id}>{cat.name}, </Fragment>
                              ))}
                            </p>
                          </>
                        ) : (
                          <>
                            <p>
                              {book?.categories.map((cat) => (
                                <Fragment key={cat?.id}>{cat.name}, </Fragment>
                              ))}
                            </p>
                          </>
                        )}
                      </Col>
                    </Row>
                  </Link>
                </div>
              ))}
          </div>
        )}
      </Container>

      <ProductCard total={total} />
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const total = await fetch(`${API_URL}/books/count`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const totalRes = await total.json();

  if (!total.ok) {
    throw new Error("Error in fetching all books");
  }

  return {
    props: {
      total: totalRes,
    },
  };
}

export default Bookstore;
