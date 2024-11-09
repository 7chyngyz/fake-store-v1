"use client";
import React, { useState, useEffect } from "react";
import scss from "./Welcome.module.scss";
import { FaApple } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import Categories from "../Categories/Categories";
import { slider } from "@/constants/links";
import Image from "next/image";

const Welcome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slider.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.category}>
            <Categories />
          </div>
          <div className={scss.welcome_content}>
            {slider.map((slide, index) => (
              <div
                key={index}
                className={`${scss.slide} ${
                  currentSlide === index ? scss.active : ""
                }`}
              >
                <div className={scss.content_text}>
                  <div className={scss.content_logo}>
                    <FaApple />
                    <p>{slide.phone}</p>
                  </div>
                  <p>
                    Up to 10% <br /> off Voucher
                  </p>
                  <button>
                    {slide.button} <TiArrowRight />
                  </button>
                </div>

                <div className={scss.content_img}>
                  <Image
                    src={slide.image}
                    alt="apple"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
              </div>
            ))}

            <div className={scss.navDots}>
              {slider.map((_, index) => (
                <span
                  key={index}
                  className={`${scss.dot} ${
                    currentSlide === index ? scss.active : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
