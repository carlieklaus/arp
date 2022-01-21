import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ProductSlider from "@/components/Shop/ProductSlider";
import ProductsDetailsTabs from "@/components/Shop/ProductsDetailsTabs";
import { useRouter } from "next/router";
import { API_URL } from "config";
import disableScroll from "disable-scroll";

const ProductDetails = ({ product }) => {
  const router = useRouter();

  const [bookTypePrice, setBookTypePrice] = useState("");
  const [selectedType, setSelectedType] = useState(null);

  const selectChangeHandler = (price, name) => {
    disableScroll.on();
    setBookTypePrice(price);
    setSelectedType(name);
  };

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Navbar />
      <PageBanner pageTitle={product?.title} />

      <div className="shop-details-area ptb-80">
        <div className="container">
          <button className="btn btn-primary" onClick={backButtonHandler}>
            Go Back
          </button>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <ProductSlider images={[product?.bookCover?.url]} />
            </div>

            <div className="col-lg-7">
              <div className="products-details">
                <h2>{product?.title}</h2>

                {/* Rating */}
                {/* 
                <ul className="rating">
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                </ul> */}

                <div style={{ marginTop: "2rem" }}>
                  <h2>{bookTypePrice !== "" ? `$ ${bookTypePrice}` : ""}</h2>
                </div>

                <div className="row" style={{ marginTop: "2rem" }}>
                  {product?.book_types.map((type) => (
                    <div
                      className="col-lg-3 col-sm-3 col-md-3"
                      key={type?.id}
                      onClick={() =>
                        selectChangeHandler(type?.price, type?.name)
                      }
                    >
                      <div className="single-solutions-box">
                        <h6>{type?.name}</h6>
                        <h6>${type?.price}</h6>
                      </div>
                    </div>
                  ))}
                </div>

                {product?.book_types.map((type) => (
                  <button
                    key={type?.id}
                    className={`btn btn-primary snipcart-add-item ${
                      selectedType !== type?.name ? "hidden" : ""
                    }`}
                    data-item-id={`${product?.id}${type?.name}`}
                    data-item-price={type?.price}
                    data-item-url={`/products/${product?.slug}/`}
                    data-item-name={product?.title}
                    data-item-image={product?.bookCover?.url}
                    data-item-description={type?.name}
                    data-item-file-guid={
                      type?.name === "Ebook" ? type?.ebookFile : null
                    }
                    data-item-weight={Math.ceil(
                      Number(type?.weight ?? 1) * Number(453.592)
                    )}
                    data-item-length={Math.ceil(
                      Number(type?.bookLength ?? 1) * Number(0.1)
                    )}
                    data-item-width={Math.ceil(
                      Number(type?.width ?? 1) * Number(0.1)
                    )}
                    data-item-height={Math.ceil(
                      Number(type?.height ?? 1) * Number(0.1)
                    )}
                    data-item-shippable={type?.name !== "Ebook"}
                  >
                    Add to Cart
                  </button>
                ))}
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <ProductsDetailsTabs product={product} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const query = await fetch(`${API_URL}/books?slug=${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const queryResult = await query.json();

    if (queryResult.length > 0) {
      return {
        props: {
          product: queryResult[0],
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export default ProductDetails;
