import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import dropdown from "bootstrap/js/src/dropdown";

export default function Navbar(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state=>{
        return state.user.currentUser
    })
    return(
        <>
                <header className="header shop">
                    <div className="topbar">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-12">

                                    <div className="top-left">
                                        <ul className="list-main">
                                            <li><i className="ti-headphone-alt"></i> +0692326555</li>
                                            <li><i className="ti-email"></i> trungponhup@gmail.com</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-lg-8 col-md-12 col-12">

                                    <div className="right-content">
                                        <ul className="list-main">
                                            <li><i className="ti-location-pin"></i><Link style={{textDecoration:"none"}} to="https://www.google.com/maps/@20.9997628,105.8071965,16z?hl=vi-VN">Store location</Link> </li>
                                            <li><i className="ti-alarm-clock"></i> <Link  style={{textDecoration: 'none'}} to="#">History</Link></li>
                                            <li><i className="ti-user"></i> <Link  style={{textDecoration: 'none'}} to="#" >{user.username}</Link></li>
                                            <li><i className="ti-power-off"></i><a type={'summit'} onClick={()=>{
                                                localStorage.clear()
                                                navigate('/')
                                            }}>Logout</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="middle-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-12">

                                    <div className="logo">
                                        <Link  style={{textDecoration: 'none'}} to="/home"><img style={{width:110,height:80}} src="/images/logo3.png" alt="logo"/></Link>
                                    </div>

                                </div>
                                <div className="col-lg-8 col-md-7 col-12">
                                    <div className="search-top">
                                        <div className="top-search"><Link  style={{textDecoration: 'none'}} to="#0"><i className="ti-search"></i></Link></div>
                                    </div>
                                    <div className="mobile-nav"></div>

                            </div>
                                <div className="col-lg-2 col-md-3 col-12">
                                    <div className="right-bar">

                                        <div className="sinlge-bar">
                                            <Link  style={{textDecoration: 'none'}} to="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></Link>
                                        </div>
                                        <div className="sinlge-bar">
                                            <Link  style={{textDecoration: 'none'}} to="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></Link>
                                        </div>
                                        <div className="sinlge-bar shopping">
                                            <Link  style={{textDecoration: 'none'}} to={`/home/show-cart/${user.idUser}`} className="single-icon"><i className="ti-bag"></i> <span className="total-count">2</span></Link>

                                            <div className="shopping-item" >
                                                <div className="dropdown-cart-header">
                                                    <span>2 Items</span>
                                                    <Link  style={{textDecoration: 'none'}} to="#">View Cart</Link>
                                                </div>
                                                <ul className="shopping-list">
                                                    <li>
                                                        <Link  style={{textDecoration: 'none'}} to="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></Link>
                                                        <Link  style={{textDecoration: 'none'}}  to="#" className="cart-img"><img src="https://via.placeholder.com/70x70" alt="#"/></Link>
                                                        <h4><Link  style={{textDecoration: 'none'}} to="#">Woman Ring</Link></h4>
                                                        <p className="quantity">1x - <span className="amount">$99.00</span></p>
                                                    </li>
                                                    <li>
                                                        <Link  style={{textDecoration: 'none'}} to="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></Link>
                                                        <Link  style={{textDecoration: 'none'}}  to="#" className="cart-img"><img src="https://via.placeholder.com/70x70" alt="#"/></Link>
                                                        <h4><Link  style={{textDecoration: 'none'}} to="#">Woman Necklace</Link></h4>
                                                        <p className="quantity">1x - <span className="amount">$35.00</span></p>
                                                    </li>
                                                </ul>
                                                <div className="bottom">
                                                    <div className="total">
                                                        <span>Total</span>
                                                        <span className="total-amount">$134.00</span>
                                                    </div>
                                                    <Link  style={{textDecoration: 'none'}} to="checkout.html" className="btn animate">Checkout</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-inner">
                        <div className="container">
                            <div className="cat-nav-head">
                                <div className="row">
                                    <div className="col-lg-9 col-12">
                                        <div className="menu-area">
                                            <nav className="navbar navbar-expand-lg">
                                                <div className="navbar-collapse">
                                                    <div className="nav-inner">
                                                        <ul className="nav main-menu menu navbar-nav">
                                                            <li className="active"><Link  style={{textDecoration: 'none'}} to="/home" >Home</Link></li>
                                                            {user.role === 'admin' &&
                                                                <>
                                                                    <li><Link  style={{textDecoration: 'none'}} to="/home/manager-product">Manager Product <i className="ti-angle-down"></i></Link>
                                                                        <ul className="dropdown">
                                                                            <li><Link  style={{textDecoration: 'none'}} to="shop-grid.html">Manager Home</Link></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><Link  style={{textDecoration: 'none'}} to="/home/add-product">Add Product <i className="ti-angle-down"></i></Link>
                                                                    <ul className="dropdown">
                                                                        <li><Link  style={{textDecoration: 'none'}} to="/home/add-category">Add Category</Link></li>
                                                                        <li><Link  style={{textDecoration: 'none'}} to="shop-grid.html">Add Home </Link></li>
                                                                    </ul>
                                                                    </li>
                                                                </>
                                                            }
                                                            <li><Link  style={{textDecoration: 'none'}} to="my-product">Products</Link></li>
                                                            <li><Link  style={{textDecoration: 'none'}} to="#">Shop<i className="ti-angle-down"></i><span className="new">New</span></Link>
                                                                <ul className="dropdown">
                                                                    <li><Link  style={{textDecoration: 'none'}} to="shop-grid.html">Shop Grid</Link></li>
                                                                    <li><Link  style={{textDecoration: 'none'}} to="cart.html">Cart</Link></li>
                                                                    <li><Link  style={{textDecoration: 'none'}} to="checkout.html">Checkout</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link  style={{textDecoration: 'none'}} to="#">Pages</Link></li>
                                                            <li><Link  style={{textDecoration: 'none'}} to="#">Blog<i className="ti-angle-down"></i></Link>
                                                                <ul className="dropdown">
                                                                    <li><Link  style={{textDecoration: 'none'}} to="blog-single-sidebar.html">Blog Single Sidebar</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link  style={{textDecoration: 'none'}} to="contact.html">Contact Us</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </nav>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            
        </>
    )
}