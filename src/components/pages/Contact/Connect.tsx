import React, { FC } from "react";
import scss from "./Connect.module.scss";
import { FiPhone } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";

const Connect: FC = () => {
  return (
    <section className={scss.Connect}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.column}>
            <FiPhone />
            <h1>Call To Us</h1>
          </div>
          <div className={scss.phone}>
            <span>We are available 24/7, 7 days a week.</span>
            <span>Phone: +8801611112222</span>
          </div>
          <hr />
          <div className={scss.column}>
            <SlEnvolope />
            <h1>Write To Us</h1>
          </div>
          <div className={scss.message}>
            <span>
              Fill out our form and we will contact <br /> you within 24 hours.
            </span>
            <div className={scss.emails}>
              <span>Emails: customer@exclusive.com</span>
              <span>Emails: support@exclusive.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
