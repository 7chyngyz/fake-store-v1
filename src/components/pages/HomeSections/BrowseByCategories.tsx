"use client";
import React, { FC, useState } from "react";
import { RiSmartphoneLine } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import { BiJoystick } from "react-icons/bi";
import scss from "./BrowseByCategories.module.scss";

const BrowseByCategories: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
  };

  const categories = [
    { icon: <RiSmartphoneLine />, label: "Phones" },
    { icon: <FaComputer />, label: "Computers" },
    { icon: <BsSmartwatch />, label: "SmartWatch" },
    { icon: <IoCameraOutline />, label: "Camera" },
    { icon: <FiHeadphones />, label: "HeadPhones" },
    { icon: <BiJoystick />, label: "Gaming" },
  ];

  return (
    <section className={scss.BrowseByCategories}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.title}>
            <div className={scss.block}></div>
            <h1>Categories</h1>
          </div>
          <div className={scss.title2}>
            <h1>Browse By Category</h1>
          </div>
          <div className={scss.boxes}>
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${scss.box} ${
                  activeIndex === index ? scss.active : ""
                }`}
                onClick={() => handleBoxClick(index)}
              >
                <h1>{category.icon}</h1>
                <h2>{category.label}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategories;
