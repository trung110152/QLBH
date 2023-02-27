import {addCart, addOrder, findByStatus} from "../../services/orderService";
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
            builder.addCase(findByStatus.fulfilled, (state, action) => {
                state.order = action.payload

            });
            builder.addCase(addCart.fulfilled, (state, action) => {
                state.cart = action.payload

            });


        }
}
)

export default orderSlice.reducer;