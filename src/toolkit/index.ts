import { configureStore } from '@reduxjs/toolkit'
import { productApi, userApi } from '../product/product.service'
import productSlice, { userSlice } from '../product/product.Slice'


export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    student: productSlice,

    // [userApi.reducerPath]: userApi.reducer,
    // users: userSlice
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
    
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch