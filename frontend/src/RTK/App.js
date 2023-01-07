import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500/" }),
  endpoints: (builder) => ({
    allUser: builder.query({
      query: (args) => {
        //const {page,filter}=args
        console.log(args.filter)
        return { url: `/getuser?page=${args.page}&filter=${args.filter}`, method: "GET" };
      },
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
