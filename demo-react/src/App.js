import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import {Route, Routes} from "react-router";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import ListProduct from "./pages/product/ListProduct";
import AddProduct from "./pages/product/AddProduct";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getBlogs} from "./services/blogsService";
import EditProduct from "./pages/product/EditProduct";
import MyProduct from "./pages/product/MyProduct";

function App() {
    // service -> slice -> store -> selector -> useEffect
    const user = useSelector(state=>{
        return state.user.currentUser
    })

    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={''} element={<Login/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    {
                     user !== 'Username is not existed' && user !== 'Password is wrong'?
                         <Route path={'home'} element={<Home/>}>
                             <Route path={''} element={<ListProduct/>}/>
                             <Route path={'add-product'} element={<AddProduct/>}/>
                             <Route path={'edit-product/:id'} element={<EditProduct/>}/>
                             <Route path={'my-blogs'} element={<MyProduct/>}/>
                         </Route>:
                             <Route path={''} element={<Login/>}/>
                    }

                </Routes>
            </div>
        </>
    );
}

export default App;
