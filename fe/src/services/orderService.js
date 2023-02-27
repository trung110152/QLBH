import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const addOrder = createAsyncThunk(
    'order/addOrder',
    async (data)=>{
        const res = await customAxios.post('orders/addOrder',data);
        return res.data;
    }
)
export const findByStatus = createAsyncThunk(
    'order/findByStatus',
    async (data)=>{

        const res = await customAxios.get(`orders/find-by-status/${data}`);
        return res.data;
    }
)
export const addCart = createAsyncThunk(
    'order/addCart',
    async (data)=>{
        const res = await customAxios.post(`orders/addCart`,data);
        return res.data;
    }
)
