import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      PRODUCTS.GetProductsResponse,
      PRODUCTS.GetProductsRequest
    >({
      query: () => ({
        url: `/get-product`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery } = api;
