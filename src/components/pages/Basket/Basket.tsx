"use client";
import React from "react";
import scss from "./Basket.module.scss";
import Header from "@/components/layout/header/Header";
import { CiCircleRemove } from "react-icons/ci";
import useCartStore from "../../../../store/useBasketStore";
import Footer from "@/components/layout/footer/Footer";

const Basket = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
  } = useCartStore();

  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <section className={scss.Basket}>
      <Header />
      <div className="container">
        <div className={scss.content}>
          <h2>Cart</h2>
          <div className={scss.main_cart}>
            {cart.length > 0 ? (
              cart.map((item) => (
                <div className={scss.cart_block} key={item.id}>
                  <div className={scss.block1}>
                    <img src={item.image} alt={item.title} /> 
                    <h4>{truncateText(item.title, 25)}</h4>
                  </div>
                  <div className={scss.block2}>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <p style={{ margin: "0 10px" }}>{item.quantity}</p>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <p>{(item.price * item.quantity).toFixed(2)} $</p>
                    <div
                      className={scss.remove_button}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <CiCircleRemove />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={scss.non_cart}>
                <p>No cards</p>
              </div>
            )}
          </div>
          <div className={scss.under_cart}>
            <div className={scss.coupon_cart}>
              <input type="text" placeholder="Coupon code" />
              <button>Apply coupon</button>
            </div>
            <div className={scss.total_block}>
              <h2>Total</h2>
              <div className={scss.main_box}>
                <div className={scss.box}>
                  <p>Total:</p>
                  <p>{getTotalPrice().toFixed(2)} $</p>
                </div>
                <div className={scss.box}>
                  <p>Delivery:</p>
                  <p>Free</p>
                </div>
                <div className={scss.box}>
                  <p>Total amount:</p>
                  <p>{getTotalPrice().toFixed(2)} $</p>
                </div>
                <button>Go to payment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Basket;
