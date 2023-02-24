import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addBlog, deleteBlog, getBlogs} from "../../services/blogsService";

import {Link, useNavigate, useSearchParams} from "react-router-dom";


export default function ListProduct(){


    const dispatch = useDispatch();


    const [page] = useSearchParams()

    const page1 = page.get('page') || 1;

    // const blogs = useSelector(state => {
    //     return state.blogs.blogs
    // });


    // const load = useSelector(state=>{
    //     return state.blogs.loading
    // })
    //
    // const user = useSelector(state=>{
    //     return state.user.currentUser
    // })

    // const totalPages = useSelector(state => {
    //     if (state.blogs.blogs !== undefined) {
    //         return state.blogs.blogs.totalPage;
    //     }
    // })

    useEffect(()=>{
        dispatch(getBlogs(page1)).then(()=>{
        })
    },[]);



    return(
        <>
            <section className="hero-slider">
                <div className="single-slider">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-9 offset-lg-3 col-12">
                                <div className="text-inner">
                                    <div className="row">
                                        <div className="col-lg-7 col-12">
                                            <div className="hero-text">
                                                <h1><span>UP TO 50% OFF </span>Shirt For Man</h1>
                                                <p>Maboriosam in a nesciung eget magnae dapibus disting tloctio in the find it pereri odiy maboriosm.</p>
                                                <div className="button">
                                                    <Link href="#" className="btn">Shop Now!</Link>
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
                                <img src="https://via.placeholder.com/600x370" alt="#"/>
                                    <div className="content">
                                        <p>Man's Collectons</p>
                                        <h3>Summer travel collection</h3>
                                        <Link to="#">Discover Now</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="https://via.placeholder.com/600x370" alt="#"/>
                                    <div className="content">
                                        <p>Bag Collectons</p>
                                        <h3>Awesome Bag 2020</h3>
                                        <Link to="#">Shop Now</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="single-banner tab-height">
                                <img src="https://via.placeholder.com/600x370" alt="#"/>
                                    <div className="content">
                                        <p>Flash Sale</p>
                                        <h3>Mid Season  Up to <span>40%</span> Off</h3>
                                        <Link to="#">Discover Now</Link>
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
                                        <li className="nav-item"><Link className="nav-link active" data-toggle="tab"
                                                                    href="#man" role="tab">Man</Link></li>
                                        <li className="nav-item"><Link className="nav-link" data-toggle="tab" href="#women"
                                                                    role="tab">Woman</Link></li>
                                        <li className="nav-item"><Link className="nav-link" data-toggle="tab" href="#kids"
                                                                    role="tab">Kids</Link></li>
                                        <li className="nav-item"><Link className="nav-link" data-toggle="tab"
                                                                    href="#accessories" role="tab">Accessories</Link></li>
                                        <li className="nav-item"><Link className="nav-link" data-toggle="tab"
                                                                    href="#essential" role="tab">Essential</Link></li>
                                        <li className="nav-item"><Link className="nav-link" data-toggle="tab"
                                                                    href="#prices" role="tab">Prices</Link></li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="man" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Women Hot Collection</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Pink Show</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Bags
                                                                Collection</Link></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="new">New</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Women Pant Collectons</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="women" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Women Hot Collection</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Pink Show</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="price-dec">30% Off</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Cap For Women</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Polo Dress For Women</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="out-of-stock">Hot</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Black Sunglass For
                                                                Women</Link></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="kids" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Women Hot Collection</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Pink Show</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Bags
                                                                Collection</Link></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="new">New</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Women Pant Collectons</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Bags
                                                                Collection</Link></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="price-dec">30% Off</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Cap For Women</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Polo Dress For Women</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="out-of-stock">Hot</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Black Sunglass For
                                                                Women</Link></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="accessories" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Women Hot Collection</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Pink Show</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Bags
                                                                Collection</Link></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="new">New</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Women Pant Collectons</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Bags
                                                                Collection</Link></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="price-dec">30% Off</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Cap For Women</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Polo Dress For Women</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="out-of-stock">Hot</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Black Sunglass For
                                                                Women</Link></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="essential" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Women Hot Collection</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Pink Show</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Bags
                                                                Collection</Link></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="new">New</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Women Pant Collectons</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Bags
                                                                Collection</Link></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="price-dec">30% Off</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Cap For Women</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Polo Dress For Women</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="out-of-stock">Hot</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Black Sunglass For
                                                                Women</Link></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="prices" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Women Hot Collection</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Pink Show</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Bags
                                                                Collection</Link></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="new">New</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Women Pant Collectons</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Bags
                                                                Collection</Link></h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="price-dec">30% Off</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Awesome Cap For Women</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Polo Dress For Women</Link>
                                                            </h3>
                                                            <div className="product-price">
                                                                <span>$29.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <Link to="product-details.html">
                                                                <img className="default-img"
                                                                     src="https://via.placeholder.com/550x750" alt="#"/>
                                                                    <img className="hover-img"
                                                                         src="https://via.placeholder.com/550x750"
                                                                         alt="#"/>
                                                                        <span className="out-of-stock">Hot</span>
                                                            </Link>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <Link data-toggle="modal" data-target="#exampleModal"
                                                                       title="Quick View" href="#"><i
                                                                        className=" ti-eye"></i><span>Quick Shop</span></Link>
                                                                    <Link title="Wishlist" href="#"><i
                                                                        className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                                                                    <Link title="Compare" href="#"><i
                                                                        className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <Link title="Add to cart" href="#">Add to cart</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <h3><Link to="product-details.html">Black Sunglass For
                                                                Women</Link></h3>
                                                            <div className="product-price">
                                                                <span className="old">$60.00</span>
                                                                <span>$50.00</span>
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
                    </div>
                </div>
            </div>

            <section className="midium-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="https://via.placeholder.com/600x370" alt="#"/>
                                    <div className="content">
                                        <p>Man's Collectons</p>
                                        <h3>Man's items Up to<span> 50%</span></h3>
                                        <a href="#">Shop Now</a>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="https://via.placeholder.com/600x370" alt="#"/>
                                    <div className="content">
                                        <p>shoes women</p>
                                        <h3>mid season  up to <span>70%</span></h3>
                                        <a href="#" className="btn">Shop Now</a>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="product-area most-popular section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Hot Item</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="owl-carousel popular-slider">
                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src="https://via.placeholder.com/550x750"
                                                 alt="#"/>
                                                <img className="hover-img" src="https://via.placeholder.com/550x750"
                                                     alt="#"/>
                                                    <span className="out-of-stock">Hot</span>
                                        </a>
                                        <div className="button-head">
                                            <div className="product-action">
                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View"
                                                   href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                            </div>
                                            <div className="product-action-2">
                                                <a title="Add to cart" href="#">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="product-details.html">Black Sunglass For Women</a></h3>
                                        <div className="product-price">
                                            <span className="old">$60.00</span>
                                            <span>$50.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src="https://via.placeholder.com/550x750"
                                                 alt="#"/>
                                                <img className="hover-img" src="https://via.placeholder.com/550x750"
                                                     alt="#"/>
                                        </a>
                                        <div className="button-head">
                                            <div className="product-action">
                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View"
                                                   href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                            </div>
                                            <div className="product-action-2">
                                                <a title="Add to cart" href="#">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="product-details.html">Women Hot Collection</a></h3>
                                        <div className="product-price">
                                            <span>$50.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src="https://via.placeholder.com/550x750"
                                                 alt="#"/>
                                                <img className="hover-img" src="https://via.placeholder.com/550x750"
                                                     alt="#"/>
                                                    <span className="new">New</span>
                                        </a>
                                        <div className="button-head">
                                            <div className="product-action">
                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View"
                                                   href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                            </div>
                                            <div className="product-action-2">
                                                <a title="Add to cart" href="#">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="product-details.html">Awesome Pink Show</a></h3>
                                        <div className="product-price">
                                            <span>$50.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-product">
                                    <div className="product-img">
                                        <a href="product-details.html">
                                            <img className="default-img" src="https://via.placeholder.com/550x750"
                                                 alt="#"/>
                                                <img className="hover-img" src="https://via.placeholder.com/550x750"
                                                     alt="#"/>
                                        </a>
                                        <div className="button-head">
                                            <div className="product-action">
                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View"
                                                   href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                            </div>
                                            <div className="product-action-2">
                                                <a title="Add to cart" href="#">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="product-details.html">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                            <span>$50.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="shop-home-list section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="shop-section-title">
                                        <h1>On sale</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="single-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#"/>
                                                <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                                        <div className="content">
                                            <h4 className="title"><a href="#">Licity jelly leg flat Sandals</a></h4>
                                            <p className="price with-discount">$59</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#"/>
                                                <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                                        <div className="content">
                                            <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                            <p className="price with-discount">$44</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#"/>
                                                <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                                        <div className="content">
                                            <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                            <p className="price with-discount">$89</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="shop-section-title">
                                        <h1>Best Seller</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="single-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#"/>
                                                <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                                        <div className="content">
                                            <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                            <p className="price with-discount">$65</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#"/>
                                                <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                                        <div className="content">
                                            <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                            <p className="price with-discount">$33</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#"/>
                                                <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                                        <div className="content">
                                            <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                            <p className="price with-discount">$77</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="shop-section-title">
                                        <h1>Top viewed</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="single-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#"/>
                                                <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                                        <div className="content">
                                            <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                            <p className="price with-discount">$22</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#"/>
                                                <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                                        <div className="content">
                                            <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                            <p className="price with-discount">$35</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#"/>
                                                <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 no-padding">
                                        <div className="content">
                                            <h5 className="title"><a href="#">Licity jelly leg flat Sandals</a></h5>
                                            <p className="price with-discount">$99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cown-down">
                <div className="section-inner ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-12 padding-right">
                                <div className="image">
                                    <img src="https://via.placeholder.com/750x590" alt="#"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 padding-left">
                                <div className="content">
                                    <div className="heading-block">
                                        <p className="small-title">Deal of day</p>
                                        <h3 className="title">Beatutyful dress for women</h3>
                                        <p className="text">Suspendisse massa leo, vestibulum cursus nulla sit amet,
                                            frungilla placerat lorem. Cars fermentum, sapien. </p>
                                        <h1 className="price">$1200 <s>$1890</s></h1>
                                        <div className="coming-time">
                                            <div className="clearfix" data-countdown="2021/02/30"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shop-blog section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>From Our Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="shop-single-blog">
                                <img src="https://via.placeholder.com/370x300" alt="#"/>
                                    <div className="content">
                                        <p className="date">22 July , 2020. Monday</p>
                                        <a href="#" className="title">Sed adipiscing ornare.</a>
                                        <a href="#" className="more-btn">Continue Reading</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="shop-single-blog">
                                <img src="https://via.placeholder.com/370x300" alt="#"/>
                                    <div className="content">
                                        <p className="date">22 July, 2020. Monday</p>
                                        <a href="#" className="title">Man’s Fashion Winter Sale</a>
                                        <a href="#" className="more-btn">Continue Reading</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="shop-single-blog">
                                <img src="https://via.placeholder.com/370x300" alt="#"/>
                                    <div className="content">
                                        <p className="date">22 July, 2020. Monday</p>
                                        <a href="#" className="title">Women Fashion Festive</a>
                                        <a href="#" className="more-btn">Continue Reading</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shop-services section home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-service">
                                <i className="ti-rocket"></i>
                                <h4>Free shiping</h4>
                                <p>Orders over $100</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-service">
                                <i className="ti-reload"></i>
                                <h4>Free Return</h4>
                                <p>Within 30 days returns</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-service">
                                <i className="ti-lock"></i>
                                <h4>Sucure Payment</h4>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-service">
                                <i className="ti-tag"></i>
                                <h4>Best Peice</h4>
                                <p>Guaranteed price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shop-newsletter section">
                <div className="container">
                    <div className="inner-top">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-12">
                                <div className="inner">
                                    <h4>Newsletter</h4>
                                    <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
                                    <form action="mail/mail.php" method="get" target="_blank"
                                          className="newsletter-inner">
                                        <input name="EMAIL" placeholder="Your email address" required="" type="email"/>
                                            <button className="btn">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                className="ti-close" aria-hidden="true"></span></button>
                        </div>
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="product-gallery">
                                        <div className="quickview-slider-active">
                                            <div className="single-slider">
                                                <img src="https://via.placeholder.com/569x528" alt="#"/>
                                            </div>
                                            <div className="single-slider">
                                                <img src="https://via.placeholder.com/569x528" alt="#"/>
                                            </div>
                                            <div className="single-slider">
                                                <img src="https://via.placeholder.com/569x528" alt="#"/>
                                            </div>
                                            <div className="single-slider">
                                                <img src="https://via.placeholder.com/569x528" alt="#"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="quickview-content">
                                        <h2>Flared Shift Dress</h2>
                                        <div className="quickview-ratting-review">
                                            <div className="quickview-ratting-wrap">
                                                <div className="quickview-ratting">
                                                    <i className="yellow fa fa-star"></i>
                                                    <i className="yellow fa fa-star"></i>
                                                    <i className="yellow fa fa-star"></i>
                                                    <i className="yellow fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <a href="#"> (1 customer review)</a>
                                            </div>
                                            <div className="quickview-stock">
                                                <span><i className="fa fa-check-circle-o"></i> in stock</span>
                                            </div>
                                        </div>
                                        <h3>$29.00</h3>
                                        <div className="quickview-peragraph">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste
                                                laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti
                                                nam in quos qui nemo ipsum numquam.</p>
                                        </div>
                                        <div className="size">
                                            <div className="row">
                                                <div className="col-lg-6 col-12">
                                                    <h5 className="title">Size</h5>
                                                    <select>
                                                        <option selected="selected">s</option>
                                                        <option>m</option>
                                                        <option>l</option>
                                                        <option>xl</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-6 col-12">
                                                    <h5 className="title">Color</h5>
                                                    <select>
                                                        <option selected="selected">orange</option>
                                                        <option>purple</option>
                                                        <option>black</option>
                                                        <option>pink</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="quantity">
                                            <div className="input-group">
                                                <div className="button minus">
                                                    <button type="button" className="btn btn-primary btn-number"
                                                            disabled="disabled" data-type="minus" data-field="quant[1]">
                                                        <i className="ti-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" name="quant[1]" className="input-number" data-min="1"
                                                       data-max="1000" value="1"/>
                                                    <div className="button plus">
                                                        <button type="button" className="btn btn-primary btn-number"
                                                                data-type="plus" data-field="quant[1]">
                                                            <i className="ti-plus"></i>
                                                        </button>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="add-to-cart">
                                            <a href="#" className="btn">Add to cart</a>
                                            <a href="#" className="btn min"><i className="ti-heart"></i></a>
                                            <a href="#" className="btn min"><i className="fa fa-compress"></i></a>
                                        </div>
                                        <div className="default-social">
                                            <h4 className="share-now">Share:</h4>
                                            <ul>
                                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
                                                </li>
                                                <li><a className="twitter" href="#"><i
                                                    className="fa fa-twitter"></i></a></li>
                                                <li><a className="youtube" href="#"><i
                                                    className="fa fa-pinterest-p"></i></a></li>
                                                <li><a className="dribbble" href="#"><i
                                                    className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="footer">
                <div className="footer-top section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-12">
                                <div className="single-footer about">
                                    <div className="logo">
                                        <a href="index.html"><img src="images/logo2.png" alt="#"/></a>
                                    </div>
                                    <p className="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                                        augue, magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,
                                        accumsan porttitor, facilisis luctus, metus.</p>
                                    <p className="call">Got Question? Call us 24/7<span><a href="tel:123456789">+0123 456 789</a></span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                <div className="single-footer links">
                                    <h4>Information</h4>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Faq</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                <div className="single-footer links">
                                    <h4>Customer Service</h4>
                                    <ul>
                                        <li><a href="#">Payment Methods</a></li>
                                        <li><a href="#">Money-back</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer social">
                                    <h4>Get In Tuch</h4>
                                    <div className="contact">
                                        <ul>
                                            <li>NO. 342 - London Oxford Street.</li>
                                            <li>012 United Kingdom.</li>
                                            <li>info@eshop.com</li>
                                            <li>+032 3456 7890</li>
                                        </ul>
                                    </div>
                                    <ul>
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter"></i></a></li>
                                        <li><a href="#"><i className="ti-flickr"></i></a></li>
                                        <li><a href="#"><i className="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="left">
                                        <p>Copyright © 2020 <a href="https://www.wpthemesgrid.com"
                                                               target="_blank">Wpthemesgrid</a> - All Rights Reserved.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="right">
                                        <img src="images/payments.png" alt="#"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <script src="js/jquery.min.js"></script>
            <script src="js/jquery-migrate-3.0.0.js"></script>
            <script src="js/jquery-ui.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/colors.js"></script>
            <script src="js/slicknav.min.js"></script>
            <script src="js/owl-carousel.js"></script>
            <script src="js/magnific-popup.js"></script>
            <script src="js/waypoints.min.js"></script>
            <script src="js/finalcountdown.min.js"></script>
            <script src="js/nicesellect.js"></script>
            <script src="js/flex-slider.js"></script>
            <script src="js/scrollup.js"></script>
            <script src="js/onepage-nav.min.js"></script>
            <script src="js/easing.js"></script>
            <script src="js/active.js"></script>
        </>
)
}
