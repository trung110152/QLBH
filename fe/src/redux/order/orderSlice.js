import {addCart, addOrder, editOrder, findByStatus, showCart} from "../../services/orderService";
import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    order:[],
    cart:[]
}
const orderSlice = createSlice({
        name:'order',
        initialState,
        extraReducers: builder => {
            builder.addCase(addOrder.fulfilled, (state, action) => {
                state.order = action.payload

            });
            builder.addCase(editOrder.fulfilled, (state, action) => {
                state.order = action.payload

            });
            builder.addCase(findByStatus.fulfilled, (state, action) => {
                state.order = action.payload

            });
            builder.addCase(addCart.fulfilled, (state, action) => {
                state.cart = action.payload

            });
            builder.addCase(showCart.fulfilled, (state, action) => {
                state.cart = action.payload

            });


        }
}
)

export default orderSlice.reducer;