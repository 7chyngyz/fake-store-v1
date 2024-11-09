"use client";
import React, { FC } from "react";
import scss from "./Login.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignInMutation } from "@/redux/api/register";
import { useRouter } from "next/navigation";

const Login: FC = () => {
  const { register, handleSubmit } = useForm<ISignin>();
  const [login] = useSignInMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<ISignin> = async (data) => {
    try {
      const newData = {
        email: data.email,
        password: data.password,
      };
      await login(newData);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={scss.login}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.login_content}>
            <div className={scss.login_image}></div>
            <div className={scss.login_auth}>
              <div className={scss.login_text}>
                <h1>Log in to ChikaShop</h1>
                <span>Enter your details below</span>
              </div>
              <form
                className={scss.login_inputs}
                onSubmit={handleSubmit(onSubmit)}
              >
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
                <button type="submit">Log in</button>
                <p>Forget Password?</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
