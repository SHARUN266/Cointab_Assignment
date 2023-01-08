import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Returns a user s api.
export const UserApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500/" }),
  // Get all users.
  endpoints: (builder) => ({
    allUser: builder.query({
      query: (args) => {
      
        return { url: `/getuser?page=${args.page}&filter=${args.filter}`, method: "GET" };
      },
    }),

    // Create a new post user
    postUser: builder.mutation({
      query: () => ({
        url: "/postuser",
        method: "POST",
      }),
    }),
    // Delete a user
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
