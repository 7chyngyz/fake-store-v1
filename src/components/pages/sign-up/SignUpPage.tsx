"use client";
import React, { FC } from "react";
import scss from "./SignUpPage.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignUpMutation } from "@/redux/api/register";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpPage: FC = () => {
  const { register, handleSubmit } = useForm<IUser>();
  const [signUp] = useSignUpMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    try {
      const newData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      };
      signUp(newData);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={scss.SignUpPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.signUp_content}>
            <div className={scss.signUp_image}></div>
            <div className={scss.signUp_auth}>
              <div className={scss.signUp_text}>
                <h1>Create an account</h1>
                <span>Enter your details below</span>
              </div>
              <form
                className={scss.signUp_inputs}
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  placeholder="firstName"
                />
                <hr />
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                  placeholder="lastName"
                />
                <hr />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email or Phone Number"
                />
                <hr />
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Password"
                />
                <hr />
                <button type="submit">Create Account</button>
                <div style={{ display: "flex", gap: "15px" }}>
                  <p>Allready have account?</p>
                  <Link href={"/login"}>
                    <p style={{ cursor: "pointer" }}>Log in</p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
