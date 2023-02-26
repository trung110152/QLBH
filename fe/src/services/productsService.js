import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (page)=>{
        const res = await customAxios.get('products');
        return res.data;
    }
    )



export const findByIdProduct = createAsyncThunk(
    'products/findByIdProduct',
    async (data)=>{
        const res = await customAxios.get('products/findById/'+data);
        return res.data;
    }
)


export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (data)=>{
        await customAxios.post('products',data);
        const res = await customAxios.get('products');
        return res.data;
    }
    )

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (data)=>{
        await customAxios.delete('products/'+data);
        const res = await customAxios.get('products');
        return res.data;
    }
)

export const editProduct = createAsyncThunk(
    'products/editProduct',
    async (data)=>{
        await customAxios.put('products/' + data.id,data);
        const res = await customAxios.get('products');
        return res.data;
    }
)