import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findByName, getProducts} from "../../services/productsService";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {getCategory} from "../../services/categoruService";
import button from "bootstrap/js/src/button";



export default function HomeProduct(){
    const dispatch = useDispatch();


    // const [page] = useSearchParams()
    // const page1 = page.get('page') || 1;
    // const load = useSelector(state=>{
    //     return state.products.loading
    // })
    // const totalPages = useSelector(state => {
    //     if (state.products.products !== undefined) {
    //         return state.products.products.totalPage;
    //     }
    // })
    const user = useSelector(state=>{
        return state.user.currentUser
    })
    const products = useSelector(state => {
        return   state.products.products
    })

    useEffect(()=>{
        dispatch(getProducts()).then(()=>{
        })
    },[]);

    const categories = useSelector(state => {
        return   state.categories.category
    })

    useEffect(()=>{
        dispatch(getCategory()).then(()=>{
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
                                                    <Link  style={{textDecoration: 'none'}} href="#" className="btn">Shop Now!</Link>
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
                                        <Link  style={{textDecoration: 'none'}} to="#">Discover Now</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="https://via.placeholder.com/600x370" alt="#"/>
                                    <div className="content">
                                        <p>Bag Collectons</p>
                                        <h3>Awesome Bag 2020</h3>
                                        <Link  style={{textDecoration: 'none'}} to="#">Shop Now</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">

                            <div className="single-banner tab-height">
                                <img src="https://via.placeholder.com/600x370" alt="#"/>
                                    <div className="content">
                                        <p>Flash Sale</p>
                                        <h3>Mid Season  Up to <span>40%</span> Off</h3>
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
                                                {products.map((product, ind)=>(
                                                    <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                        <div className="single-product">
                                                            <div className="product-img">
                                                                <Link  style={{textDecoration: 'none'}} to={`/home/focus-product/${product.id}`}>
                                                                    <img className="default-img"
                                                                         src={product.image} alt="#" style={{width:320, height:450}}/>
                                                                    <span className="out-of-stock">Hot</span>

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
                </div>
            </div>

        </>
)
}