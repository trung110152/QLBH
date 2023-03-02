import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findByName, getProducts} from "../../services/productsService";
import {Link} from "react-router-dom";
import {getCategory} from "../../services/categoruService";
import button from "bootstrap/js/src/button";
import {findByStatus, showCart} from "../../services/orderService";



export default function HomeProduct(){
    const dispatch = useDispatch();

    const user = useSelector(state=>{
        return state.user.currentUser
    })
    const products = useSelector(state => {
        return   state.products.products
    })

    useEffect(()=>{
        dispatch(getProducts()).then(()=>{
            dispatch(findByStatus(user.idUser)).then((e)=> {
                dispatch(showCart(e.payload.id))
            });
        })
    },[]);

    const categories = useSelector(state => {
        return   state.categories.category
    })

    useEffect(()=>{
        dispatch(getCategory()).then(()=>{
        })
    },[]);

    const productss = products.slice(0,4)

    return(
        <>
            <section className="hero-slider" >
                <div className="single-slider" style={{backgroundImage:'https://theperfume.vn/wp-content/uploads/2021/06/nuoc-hoa-nu-huong-hoa-hong.jpeg'}}>
                    <div className="container" >
                        <div className="row no-gutters">
                            <div className="col-lg-9 offset-lg-3 col-12">
                                <div className="text-inner">
                                    <div className="row">
                                        <div className="col-lg-7 col-12">
                                            <div className="hero-text">
                                                <h1>Perfume</h1>
                                                <div className="mb-5 button">
                                                    <Link  style={{textDecoration: 'none'}} to="my-product" className="btn">Shop Now!</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="small-banner section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="/images/1.png" alt="#"/>
                                    <div className="content">
                                        <Link  style={{textDecoration: 'none'}} to="#">Discover Now</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="/images/2.png" alt="#"/>
                                    <div className="content">
                                        <Link  style={{textDecoration: 'none'}} to="my-product">Shop Now</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">

                            <div className="single-banner tab-height">
                                <img src="/images/3.png" alt="#"/>
                                    <div className="content">
                                        <p>Flash Sale</p>
                                        <Link  style={{textDecoration: 'none'}} to="#">Discover Now</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                        {categories.map((category)=>(
                                            <li  className="nav-item"><button style={{height:30,fontSize:10, width:100}} className=" ml-3  btn btn-outline-secondary my-2 my-sm-0" onClick={()=>{
                                                dispatch(findByName(category.name))
                                            }} >{category.name}</button></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="man" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                {productss.map((product, ind)=>(
                                                    <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                        <div className="single-product">
                                                            <div className="product-img">
                                                                <a  style={{textDecoration: 'none'}} href={`/home/focus-product/${product.id}`}>
                                                                    <img className="default-img"
                                                                         src={product.image} alt="#" style={{width:320, height:450}}/>
                                                                    <span className="out-of-stock">Hot</span>


                                                                </a>
                                                                <div className="button-head">
                                                                    <div className="product-action">
                                                                       <Link  style={{textDecoration: 'none'}} ><i className=" ti-eye"></i><span>Detail 142</span></Link>
                                                                        <Link  style={{textDecoration: 'none'}} title="Wishlist" href="#"><i
                                                                            className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                        <Link  style={{textDecoration: 'none'}} title="Compare" href="#"><i
                                                                            className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                    </div>
                                                                    <div className="product-action-2">
                                                                        <a  style={{textDecoration: 'none'}}  href={`/home/focus-product/${product.id}`}>Add to cart</a>
                                                                        <span> or </span>
                                                                        <Link  style={{textDecoration: 'none'}}  to={`/home/buy-now/${product.id}`} style={{color: "red"}}>Buy now</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{textAlign:"center"}} className="product-content">
                                                                <h5>{product.name}</h5>
                                                                <div className="product-price">
                                                                    <span style={{color:"red"}}>{product.price} $</span>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
)
}