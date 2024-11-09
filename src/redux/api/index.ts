import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_SUPABASE_API_URL}`,
});

const baseQueryExtented: BaseQueryFn = async (args, api, estraOptions) => {
  const result = await baseQuery(args, api, estraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtented,
  refetchOnFocus: false,
  refetchOnReconnect: true,
  tagTypes: ["product", "details", "search", "favourites", "register"],
  endpoints: () => ({}),
});
