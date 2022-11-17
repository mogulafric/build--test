import { apiSlice } from "../../app/api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/api/v1/user/getusers',
            keepUnusedDataFor: 60,
        }),
        getUser: builder.query({
            query: (userID) => `/api/v1/user/getuserbyid/${userID}`,
            keepUnusedDataFor: 60,
        }),
        adduser: builder.mutation({
            query: ({userID, data}) => ({
                url:`/api/v1/user/updateuser`,
                method:'POST',
                body:`${data}`
            })  
        }),
        updateUser: builder.mutation({
            query: ({userID, data}) => ({
                url:`/api/v1/user/updateuser`,
                method:'PATCH',
                body:`${data}`
            })  
        }),
        deleteUser: builder.mutation({
            query: (userID) => ({
                url:`/api/v1/user/updateuser`,
                method:'DELETE'
            })
        })
    })
})

export const {
    useGetUsersQuery, useGetUserQuery, useUpdateUserMutation, useDeleteUserMutation
} = usersApiSlice 