import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductState, User, UserState } from "./product.interface";

export const initState : IProductState={
    product: []
}
export const productSlice = createSlice({
    name: 'product',
    initialState: initState,
    reducers:{
        productList: (state, action: PayloadAction<IProduct[]>) =>{
            state.product = action.payload
        }
    }
})


export const initStateUser : UserState={
    user: []
}
export const userSlice = createSlice({
    name: 'user',
    initialState: initStateUser,
    reducers:{
        userList: (state, action: PayloadAction<User[]>) =>{
            state.user = action.payload
        }
    }
})


export const { userList} = userSlice.actions
export default userSlice.reducer