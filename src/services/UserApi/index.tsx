import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IUserListGrid from "../../models/UserModel"

export const usersApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        users: builder.query<IUserListGrid[], void>({
            query: () => '/users'
        })
    })

})
export const { useUsersQuery } = usersApi;