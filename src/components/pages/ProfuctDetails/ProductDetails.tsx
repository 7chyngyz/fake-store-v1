"use client";
import React, { FC, useState } from "react";
import scss from "./ProductDetails.module.scss";
import { useGetProductsQuery } from "@/redux/api/product";
import { useParams } from "next/navigation";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FaRegHeart } from "react-icons/fa";
import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Cart from "../HomeSections/Cart";

const ProductDetails: FC = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const { data: product } = useGetProductsQuery();
  const itemDetails = product?.find((item) => item.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const totalPrice = (itemDetails?.price || 0) * quantity;

  return (
    <section className={scss.ProductDetails}>
      <>
        <TopHeader />
        <Header />
      </>
      <div className="container">
        <div className={scss.content}>
          <h1>{itemDetails?.title}</h1>
          <div className={scss.details}>
            <div className={scss.img}>
              <Zoom>
                <img src={itemDetails?.image} alt="image" />
              </Zoom>
            </div>
            <div className={scss.right}>
              <div className={scss.product_text}>
                <h1>{itemDetails?.title}</h1>
                <p>Цена: ${totalPrice.toFixed(2)}</p>
                <span>{itemDetails?.description}</span>
                <hr />
              </div>
              <div className={scss.product_det}>
                <h3>Colours: {itemDetails?.quantity}</h3>
                <h4>Size: {itemDetails?.category}</h4>
              </div>
              <div className={scss.btn}>
                <div className={scss.counter}>
                  <button className={scss.minus} onClick={decreaseQuantity}>
                    -
                  </button>
                  <p>
                    <button className={scss.count}>{quantity}</button>
                  </p>
                  <button className={scss.plus} onClick={increaseQuantity}>
                    +
                  </button>
                </div>
                <button className={scss.buy}>Buy Now</button>
                <button className={scss.heart}>
                  <FaRegHeart />
                </button>
              </div>
              <div className={scss.frame}></div>
            </div>
          </div>
          <Cart />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProductDetails;
