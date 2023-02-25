import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "../../services/productsService";
import {Link} from "react-router-dom";


export default function ManagerProduct(){
    const dispatch = useDispatch();
    const products = useSelector(state => {
        return   state.products.products
    })

    useEffect(()=>{
        dispatch(getProducts()).then(()=>{
        })
    },[]);


    return(
        <>
            <br/>
            <br/>
            <h3 style={{textAlign: 'center'}}>List product</h3>
            <br/>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped" border={1}>
                        <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Name product</th>
                            <th scope="col">Description</th>
                            <th scope={"col"}>Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Quantity</th>
                            <th scope="col" colSpan="2">Action</th>
                        </tr>
                        </thead>
                        {products.map((product,ind)=>(
                            <tr>
                                <th scope="col">{ind+1}</th>
                                <th scope="col">{product.name}</th>
                                <th scope="col">{product.description}</th>
                                <th scope={"col"}><img src={product.image} style={{width:50}} alt=""/></th>
                                <th scope="col">{product.price}</th>
                                <th scope="col">{product.nameCategory}</th>
                                <th scope="col">{product.totalQuantity}</th>
                                <th scope="col" >
                                    <Link to={`/home/edit-product/${product.id}`}><button className="btn btn-outline-primary">Edit</button></Link>
                                    <button className="btn btn-outline-danger">Delete</button>
                                </th>
                            </tr>
                        ))}

                    </table>
                </div>
            </div>
            <br/>
            <br/>
        </>
    )
}