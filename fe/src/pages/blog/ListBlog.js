import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addBlog, deleteBlog, getBlogs} from "../../services/blogsService";

import {Link, useNavigate, useSearchParams} from "react-router-dom";


export default function ListBlog(){


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
                                                                    <Link title="Add to cart" to="/home/addCart">Add to cart</Link>
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

        </>
)
}