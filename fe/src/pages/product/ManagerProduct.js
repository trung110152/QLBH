import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteProduct, getProducts} from "../../services/productsService";
import {Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert';




export default function ManagerProduct(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(state => {
        return   state.products.products
    })




    useEffect(()=>{
        dispatch(getProducts()).then(()=>{
        })
    },[]);



    return(
        <>

            <div className="product-area section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Trending Item</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                                <div className="nav-main">

                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab"
                                                                    href="#ALL" role="tab">ALL</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Amber"
                                                                    role="tab">Amber</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Dior"
                                                                    role="tab">Dior</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Chanel"
                                                                    role="tab">Chanel</a></li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="ALL" role="tabpanel">
                                        <div className="tab-single">
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
                                                        {
                                                            products.map((product,ind)=>(
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
                                                                        <button className="btn btn-outline-danger" onClick={()=>{
                                                                            swal({
                                                                                title: "Are you sure?",
                                                                                text: "Once deleted, you will not be able to recover this imaginary file!",
                                                                                icon: "warning",
                                                                                buttons: true,
                                                                                dangerMode: true,
                                                                            })
                                                                                .then((willDelete) => {
                                                                                    if (willDelete) {
                                                                                        dispatch(deleteProduct(product.id))
                                                                                        swal(`Poof! Deleted ${product.name}!`, {
                                                                                            icon: "success",
                                                                                        })
                                                                                        navigate('/home/manager-product')
                                                                                        ;
                                                                                    } else {
                                                                                        swal("Your imaginary file is safe!");
                                                                                    }
                                                                                });
                                                                        }}>Delete</button>
                                                                    </th>
                                                                </tr>
                                                            ))
                                                        }


                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="Amber" role="tabpanel">
                                            <div className="tab-single">
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
                                                            {
                                                                products.map((product,ind)=>(
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
                                                                            <button className="btn btn-outline-danger" onClick={()=>{
                                                                                swal({
                                                                                    title: "Are you sure?",
                                                                                    text: "Once deleted, you will not be able to recover this imaginary file!",
                                                                                    icon: "warning",
                                                                                    buttons: true,
                                                                                    dangerMode: true,
                                                                                })
                                                                                    .then((willDelete) => {
                                                                                        if (willDelete) {
                                                                                            dispatch(deleteProduct(product.id))
                                                                                            swal(`Poof! Deleted ${product.name}!`, {
                                                                                                icon: "success",
                                                                                            })
                                                                                            navigate('/home/manager-product')
                                                                                            ;
                                                                                        } else {
                                                                                            swal("Your imaginary file is safe!");
                                                                                        }
                                                                                    });
                                                                            }}>Delete</button>
                                                                        </th>
                                                                    </tr>
                                                                ))
                                                            }


                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="tab-pane fade" id="Dior" role="tabpanel">
                                        <div className="tab-single">
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
                                                        {
                                                            products.map((product,ind)=>(
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
                                                                        <button className="btn btn-outline-danger" onClick={()=>{
                                                                            swal({
                                                                                title: "Are you sure?",
                                                                                text: "Once deleted, you will not be able to recover this imaginary file!",
                                                                                icon: "warning",
                                                                                buttons: true,
                                                                                dangerMode: true,
                                                                            })
                                                                                .then((willDelete) => {
                                                                                    if (willDelete) {
                                                                                        dispatch(deleteProduct(product.id))
                                                                                        swal(`Poof! Deleted ${product.name}!`, {
                                                                                            icon: "success",
                                                                                        })
                                                                                        navigate('/home/manager-product')
                                                                                        ;
                                                                                    } else {
                                                                                        swal("Your imaginary file is safe!");
                                                                                    }
                                                                                });
                                                                        }}>Delete</button>
                                                                    </th>
                                                                </tr>
                                                            ))
                                                        }


                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="Chanel" role="tabpanel">
                                        <div className="tab-single">
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
                                                        {
                                                            products.map((product,ind)=>(
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
                                                                        <button className="btn btn-outline-danger" onClick={()=>{
                                                                            swal({
                                                                                title: "Are you sure?",
                                                                                text: "Once deleted, you will not be able to recover this imaginary file!",
                                                                                icon: "warning",
                                                                                buttons: true,
                                                                                dangerMode: true,
                                                                            })
                                                                                .then((willDelete) => {
                                                                                    if (willDelete) {
                                                                                        dispatch(deleteProduct(product.id))
                                                                                        swal(`Poof! Deleted ${product.name}!`, {
                                                                                            icon: "success",
                                                                                        })
                                                                                        navigate('/home/manager-product')
                                                                                        ;
                                                                                    } else {
                                                                                        swal("Your imaginary file is safe!");
                                                                                    }
                                                                                });
                                                                        }}>Delete</button>
                                                                    </th>
                                                                </tr>
                                                            ))
                                                        }


                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*<br/>*/}
            {/*<br/>*/}
            {/*<h3 style={{textAlign: 'center'}}>List product</h3>*/}

            {/*<br/>*/}
            {/*<nav className="navbar navbar-expand-lg navbar-light bg-light">*/}
            {/*    <a className="nav-link active" data-toggle="tab"*/}
            {/*       href="#Amber" role="tab">Amber</a>*/}
            {/*    <button className="navbar-toggler" type="button" data-toggle="collapse"*/}
            {/*            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
            {/*            aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*        <span className="navbar-toggler-icon"></span>*/}
            {/*    </button>*/}

            {/*    <div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
            {/*        <ul className="navbar-nav mr-auto">*/}
            {/*            <li className="nav-item active">*/}
            {/*                <a className="nav-link active" data-toggle="tab"*/}
            {/*                   href="#Dior" role="tab">Dior</a>*/}
            {/*            </li>*/}
            {/*            <li className="nav-item">*/}
            {/*                <a className="nav-link active" data-toggle="tab"*/}
            {/*                   href="#Chanel" role="tab">Chanel</a>*/}
            {/*            </li>*/}

            {/*        </ul>*/}

            {/*    </div>*/}
            {/*</nav>*/}
            {/*<div className="row">*/}
            {/*    <div className="col-12">*/}
            {/*        <table className="table table-striped" border={1}>*/}
            {/*            <thead>*/}
            {/*            <tr>*/}
            {/*                <th scope="col">STT</th>*/}
            {/*                <th scope="col">Name product</th>*/}
            {/*                <th scope="col">Description</th>*/}
            {/*                <th scope={"col"}>Image</th>*/}
            {/*                <th scope="col">Price</th>*/}
            {/*                <th scope="col">Category</th>*/}
            {/*                <th scope="col">Quantity</th>*/}
            {/*                <th scope="col" colSpan="2">Action</th>*/}
            {/*            </tr>*/}
            {/*            </thead>*/}
            {/*            {*/}
            {/*                products.map((product,ind)=>(*/}
            {/*                        <tr>*/}
            {/*                            <th scope="col">{ind+1}</th>*/}
            {/*                            <th scope="col">{product.name}</th>*/}
            {/*                            <th scope="col">{product.description}</th>*/}
            {/*                            <th scope={"col"}><img src={product.image} style={{width:50}} alt=""/></th>*/}
            {/*                            <th scope="col">{product.price}</th>*/}
            {/*                            <th scope="col">{product.nameCategory}</th>*/}
            {/*                            <th scope="col">{product.totalQuantity}</th>*/}
            {/*                            <th scope="col" >*/}
            {/*                                <Link to={`/home/edit-product/${product.id}`}><button className="btn btn-outline-primary">Edit</button></Link>*/}
            {/*                                <button className="btn btn-outline-danger" onClick={()=>{*/}
            {/*                                    swal({*/}
            {/*                                        title: "Are you sure?",*/}
            {/*                                        text: "Once deleted, you will not be able to recover this imaginary file!",*/}
            {/*                                        icon: "warning",*/}
            {/*                                        buttons: true,*/}
            {/*                                        dangerMode: true,*/}
            {/*                                    })*/}
            {/*                                        .then((willDelete) => {*/}
            {/*                                            if (willDelete) {*/}
            {/*                                                dispatch(deleteProduct(product.id))*/}
            {/*                                                swal(`Poof! Deleted ${product.name}!`, {*/}
            {/*                                                    icon: "success",*/}
            {/*                                                })*/}
            {/*                                                navigate('/home/manager-product')*/}
            {/*                                                ;*/}
            {/*                                            } else {*/}
            {/*                                                swal("Your imaginary file is safe!");*/}
            {/*                                            }*/}
            {/*                                        });*/}
            {/*                                }}>Delete</button>*/}
            {/*                            </th>*/}
            {/*                        </tr>*/}
            {/*                    ))*/}
            {/*            }*/}


            {/*        </table>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <br/>
            <br/>
        </>
    )
}