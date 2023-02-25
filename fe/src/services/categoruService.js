import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getCategory = createAsyncThunk(
    'category/getCategory',
    async ()=>{
        const res = await customAxios.get('blogs/getCategories');
        return res.data;
    }
)