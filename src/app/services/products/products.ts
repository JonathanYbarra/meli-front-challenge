import {
  ItemByIdResponse,
  SearchProductsResponse,
  TAG_TYPES,
} from "./products.types";
import { createProvidesTags } from "../../utils/creatorUrlTag";
import { baseApi } from "../../api";
import { QUERY_URL } from "../URL";

const characterApi = baseApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.searchProducts] })
  .injectEndpoints({
    endpoints: (builder) => ({
      searchProducts: builder.query<SearchProductsResponse, string>({
        query: (params) => ({
          url: QUERY_URL.searchProducts,
          method: "GET",
          params: {
            q: params,
          },
        }),
        providesTags: (result) =>
          createProvidesTags<SearchProductsResponse>(
            result,
            TAG_TYPES.searchProducts
          ) as [],
      }),

      productById: builder.query<ItemByIdResponse, string>({
        query: (id) => ({
          url: QUERY_URL.productId(id),
          method: "GET",
        }),
      }),
    }),
  });

export const { useLazySearchProductsQuery, useLazyProductByIdQuery } =
  characterApi;
