import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findByName, getProducts} from "../../services/productsService";
import button from "bootstrap/js/src/button";
import {getCategory} from "../../services/categoruService";
import {Link} from "react-router-dom";


export default function ProductList() {


    const dispatch = useDispatch();



    const categories = useSelector(state => {
        return   state.categories.category
    })

    useEffect(()=>{
        dispatch(getCategory()).then(()=>{
        })
    },[]);

    const products = useSelector(state => {
        return   state.products.products
    })


    useEffect(() => {
        dispatch(getProducts())
    }, []);


    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bread-inner">
                                <ul className="bread-list">
                                    <li><a href="index1.html">Home<i className="ti-arrow-right"></i></a></li>
                                    <li className="active"><a href="blog-single.html">Shop Grid</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="product-area shop-sidebar shop section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="shop-sidebar">
                                <div className="single-widget category">
                                    <h3 className="title">Categories</h3>
                                    <ul className="categor-list" style={{}}>
                                        {categories.map((category)=>(
                                            <li  className="nav-item"><p style={{height:30,fontSize:10,width:200}} className="  btn btn-outline-secondary my-2 my-sm-0 " onClick={()=>{
                                                dispatch(findByName(category.name))
                                            }} >{category.name}</p></li>
                                        ))}

                                    </ul>
                                </div>
                                <div className="single-widget range">
                                    <h3 className="title">Shop by Price</h3>
                                    <div className="price-filter">
                                        <div className="price-filter-inner">
                                            <div id="slider-range"></div>
                                            <div className="price_slider_amount">
                                                <div className="label-input">
                                                    <span>Range:</span><input type="text" id="amount" name="price"
                                                                              placeholder="Add Your Price"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="check-box-list">
                                        <li>
                                            <label className="checkbox-inline" htmlFor="1"><input name="news" id="1"
                                                                                                  type="checkbox"/>$20 -
                                                $50<span className="count">(3)</span></label>
                                        </li>
                                        <li>
                                            <label className="checkbox-inline" htmlFor="2"><input name="news" id="2"
                                                                                                  type="checkbox"/>$50 -
                                                $100<span className="count">(5)</span></label>
                                        </li>
                                        <li>
                                            <label className="checkbox-inline" htmlFor="3"><input name="news" id="3"
                                                                                                  type="checkbox"/>$100 -
                                                $250<span className="count">(8)</span></label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="single-widget recent-post">
                                    <h3 className="title">Recent post</h3>
                                    <div className="single-post first">
                                        <div className="image">
                                            <img src="https://via.placeholder.com/75x75" alt="#"/>
                                        </div>
                                        <div className="content">
                                            <h5><a href="#">Girls Dress</a></h5>
                                            <p className="price">$99.50</p>
                                            <ul className="reviews">
                                                <li className="yellow"><i className="ti-star"></i></li>
                                                <li className="yellow"><i className="ti-star"></i></li>
                                                <li className="yellow"><i className="ti-star"></i></li>
                                                <li><i className="ti-star"></i></li>
                                                <li><i className="ti-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-post first">
                                        <div className="image">
                                            <img src="https://via.placeholder.com/75x75" alt="#"/>
                                        </div>
                                        <div className="content">
                                            <h5><a href="#">Women Clothings</a></h5>
                                            <p className="price">$99.50</p>
                                            <ul className="reviews">
                                                <li className="yellow"><i className="ti-star"></i></li>
                                                <li className="yellow"><i className="ti-star"></i></li>
                                                <li className="yellow"><i className="ti-star"></i></li>
                                                <li className="yellow"><i className="ti-star"></i></li>
                                                <li><i className="ti-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-post first">
                                        <div className="image">
                                            <img src="https://via.placeholder.com/75x75" alt="#"/>
                                        </div>
                                        <div className="content">
                                            <h5><a href="#">Man Tshirt</a></h5>
                                            <p className="price">$99.50</p>
                                            <ul className="reviews">
                                                <li className="yellow"><i className="ti-star"></i></li>
                                                <li className="yellow"><i className="ti-star"></i></li>
                                                <li className="yellow"><i className="ti-star"></i></li>
                                                <li className="yellow"><i className="ti-star"></i></li>
                                                <li className="yellow"><i className="ti-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-widget category">
                                    <h3 className="title">Manufacturers</h3>
                                    <ul className="categor-list">
                                        <li><a href="#">Forever</a></li>
                                        <li><a href="#">giordano</a></li>
                                        <li><a href="#">abercrombie</a></li>
                                        <li><a href="#">ecko united</a></li>
                                        <li><a href="#">zara</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="shop-top">
                                        <div className="shop-shorter">
                                            <div className="single-shorter">
                                            </div>
                                            <div className="single-shorter">
                                                <label>Sort By </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" role="tabpanel">
                                    <div className="tab-single">
                                        <div className="row">
                                            {products.map((product, ind)=>(
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link  style={{textDecoration: 'none'}} to={`/home/focus-product/${product.id}`}>
                                                                <img className="default-img"
                                                                     src={product.image} alt="#" style={{width:320, height:450}}/>


                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link  style={{textDecoration: 'none'}} ><i className=" ti-eye"></i><span>Detail 142</span></Link>
                                                                    <Link  style={{textDecoration: 'none'}} title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link  style={{textDecoration: 'none'}} title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link  style={{textDecoration: 'none'}}  to="/home/addCart">Add to cart</Link>
                                                                    <span> or </span>
                                                                    <Link  style={{textDecoration: 'none'}}  to="#" style={{color: "red"}}>Buy now</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5>{product.description}</h5>
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
            </section>
        </>
    )
}