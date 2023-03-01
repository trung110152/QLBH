import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const addOrder = createAsyncThunk(
    'order/addOrder',
    async (data)=>{
        const res = await customAxios.post('orders/addOrder',data);
        return res.data;
    }
)
export const editOrder = createAsyncThunk(
    'order/editOrder',
    async (data)=>{
        const res = await customAxios.put('orders/editOrder/'+data.id,data);
        return res.data;
    }
)

export const findByStatus = createAsyncThunk(
    'order/findByStatus',
    async (data)=>{
        const res = await customAxios.get(`orders/find-by-status/${data}`);
        return res.data[0];
    }
)
export const addCart = createAsyncThunk(
    'order/addCart',
    async (data)=>{
        const res = await customAxios.post(`orders/addCart`,data);
        return res.data;
    }
)

export const showCart = createAsyncThunk(
    'order/showCart',
    async (data)=>{
        const res = await customAxios.get(`orders/show-cart/${data}`);
        return res.data;
    }
)
