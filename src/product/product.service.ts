import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const productApi = createApi({
        reducerPath: 'productApi',
        baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/products'}),
        tagTypes:['Product'],
        endpoints: (builder) =>({
            getProductList: builder.query({
                query: () =>``,
                providesTags: ['Product']
                
            }),
            deleteProduct: builder.mutation({
                query: ({id}) =>({
                    url: `/${id}`,
                    method: 'DELETE'
                }),
                invalidatesTags: ['Product']
            }),
            addProduct: builder.mutation({
                query: (product) =>({
                    url: ``,
                    method: 'POST',
                    body: product
                }),
                invalidatesTags: ['Product']
            }),
            updateProduct: builder.mutation({
                query: ({id,...product}) =>({
                    url: `/${id}`,
                    method: 'PUT',
                    body: product
                }),
                invalidatesTags: ['Product']
            }),
        })
})


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/users'}),
    tagTypes:['User'],
    endpoints: (builder) =>({
     
        addUser: builder.mutation({
            query: (user) =>({
                url: ``,
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        
    })
})
export const {useGetProductListQuery, useAddProductMutation, useDeleteProductMutation, useUpdateProductMutation} = productApi

export const {useAddUserMutation} = userApi