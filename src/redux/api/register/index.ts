import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<USER.SignUpUserResponse, USER.SignUpUserRequest>({
      query: (query) => ({
        url: `/sign-up`,
        method: "POST",
        body: query,
      }),
      invalidatesTags: ["register"],
    }),
    signIn: builder.mutation<USER.SignInUserResponse, USER.SignInUserRequest>({
      query: (query) => ({
        url: `/sign-in`,
        method: "POST",
        body: query,
      }),
      invalidatesTags: ["register"],
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = api;
