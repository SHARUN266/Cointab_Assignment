import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500/" }),
  endpoints: (builder) => ({
    allUser: builder.query({
      query: (page ) => ({
        url: `/getuser?page=${page}`,
        method: "GET",
      }),
    }),

    postUser: builder.mutation({
      query: () => ({
        url: "/postuser",
        method: "POST",
      }),
    }),
    deleteUser: builder.mutation({
      query: () => ({
        url: "/deleteusers",
        method: "DELETE",
      }),
    }),
  }),
});

export default UserApi;
export const { useAllUserQuery, usePostUserMutation, useDeleteUserMutation } =
  UserApi;
