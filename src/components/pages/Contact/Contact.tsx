"use client";
import React, { FC } from "react";
import scss from "./Contact.module.scss";
import Connect from "./Connect";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface IFormTelegram {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;

const Contact: FC = () => {
  const {
    register,
    handleSubmit,
  } = useForm<IFormTelegram>({ mode: "onChange" });

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `name: <b>${data.name}</b>\n`;
    messageTG += `email: <b>${data.email}</b>\n`;
    messageTG += `phone: <b>${data.phone}</b>\n`;
    messageTG += `message: <b>${data.message}</b>`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage`,
        {
          chat_id: CHAT_ID,
          parse_mode: "html",
          text: messageModel(data),
        }
      );
      console.log("Message sent:", response.data);
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
    }
  };

  return (
    <section className={scss.Contact}>
      <h1>Contact</h1>
      <Connect />
      <div className="container">
        <div className={scss.contactContainer}>
          <form className={scss.content} onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Your Name*"
              type="text"
              {...register("name", { required: true })}
            />
            <input
              placeholder="email"
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            <input
              placeholder="Your Phone"
              type="text"
              {...register("phone", { required: true })}
            />
          </form>
          <form className={scss.content2} onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Your Message"
              type="text"
              {...register("message", { required: true })}
            />
          </form>
          <form className={scss.btn} onSubmit={handleSubmit(onSubmit)}>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
