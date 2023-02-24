
import './App.css';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import {Route, Routes} from "react-router";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import ListBlog from "./pages/blog/ListBlog";
import AddProduct from "./pages/blog/AddProduct";
import {useDispatch, useSelector} from "react-redux";
import EditBlog from "./pages/blog/EditBlog";
import MyBlogs from "./pages/blog/MyBlogs";
import ManagerProduct from "./pages/blog/ManagerProduct";
import AddCart from "./pages/blog/AddCart";

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
                    <Route path={''} element={<ListBlog/>}/>
                    <Route path={'manager-product'} element={<ManagerProduct/>}/>
                    <Route path={'add-product'} element={<AddProduct/>}/>
                    <Route path={'edit-blog/:id'} element={<EditBlog/>}/>
                    <Route path={'addCart/:id'} element={<AddCart/>}/>
                    <Route path={'my-blogs'} element={<MyBlogs/>}/>
                  </Route>:
                  <Route path={''} element={<Login/>}/>
            }

          </Routes>
        </div>
      </>
  );
}

export default App;
