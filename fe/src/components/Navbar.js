import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

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
                                            <li><i className="ti-email"></i> support@shophub.com</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-lg-8 col-md-12 col-12">

                                    <div className="right-content">
                                        <ul className="list-main">
                                            <li><i className="ti-location-pin"></i> Store location</li>
                                            <li><i className="ti-alarm-clock"></i> <Link to="#">Daily deal</Link></li>
                                            <li><i className="ti-user"></i> <Link to="#" >{user.username}</Link></li>
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
                                        <Link to="index.html"><img src="images/logo.png" alt="logo"/></Link>
                                    </div>

                                    <div className="search-top">
                                        <div className="top-search"><Link to="#0"><i className="ti-search"></i></Link></div>

                                        <div className="search-top">
                                            <form className="search-form">
                                                <input type="text" placeholder="Search here..." name="search"/>
                                                    <button value="search" type="submit"><i className="ti-search"></i></button>
                                            </form>
                                        </div>

                                    </div>

                                    <div className="mobile-nav"></div>
                                </div>
                                <div className="col-lg-8 col-md-7 col-12">
                                    <div className="search-bar-top">
                                        <div className="search-bar">
                                            <select>
                                                <option selected="selected">All Category</option>
                                                <option>watch</option>
                                                <option>mobile</option>
                                                <option>kid’s item</option>
                                            </select>
                                            <form>
                                                <input name="search" placeholder="Search Products Here....." type="search"/>
                                                    <button className="btnn"><i className="ti-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-12">
                                    <div className="right-bar">

                                        <div className="sinlge-bar">
                                            <Link to="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></Link>
                                        </div>
                                        <div className="sinlge-bar">
                                            <Link to="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></Link>
                                        </div>
                                        <div className="sinlge-bar shopping">
                                            <Link to="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">2</span></Link>

                                            <div className="shopping-item">
                                                <div className="dropdown-cart-header">
                                                    <span>2 Items</span>
                                                    <Link to="#">View Cart</Link>
                                                </div>
                                                <ul className="shopping-list">
                                                    <li>
                                                        <Link to="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></Link>
                                                        <Link  to="#" className="cart-img"><img src="https://via.placeholder.com/70x70" alt="#"/></Link>
                                                        <h4><Link to="#">Woman Ring</Link></h4>
                                                        <p className="quantity">1x - <span className="amount">$99.00</span></p>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></Link>
                                                        <Link  to="#" className="cart-img"><img src="https://via.placeholder.com/70x70" alt="#"/></Link>
                                                        <h4><Link to="#">Woman Necklace</Link></h4>
                                                        <p className="quantity">1x - <span className="amount">$35.00</span></p>
                                                    </li>
                                                </ul>
                                                <div className="bottom">
                                                    <div className="total">
                                                        <span>Total</span>
                                                        <span className="total-amount">$134.00</span>
                                                    </div>
                                                    <Link to="checkout.html" className="btn animate">Checkout</Link>
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
                                                            <li className="active"><Link to="/home">Home</Link></li>
                                                            {user.role === 'admin' &&
                                                                <>
                                                                    <li><Link to="/home/manager-product">Manager Product</Link></li>
                                                                    <li><Link to="/home/add-product">Add Product</Link></li>
                                                                </>
                                                            }
                                                            <li><Link to="#">Service</Link></li>
                                                            <li><Link to="#">Shop<i className="ti-angle-down"></i><span className="new">New</span></Link>
                                                                <ul className="dropdown">
                                                                    <li><Link to="shop-grid.html">Shop Grid</Link></li>
                                                                    <li><Link to="cart.html">Cart</Link></li>
                                                                    <li><Link to="checkout.html">Checkout</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link to="#">Pages</Link></li>
                                                            <li><Link to="#">Blog<i className="ti-angle-down"></i></Link>
                                                                <ul className="dropdown">
                                                                    <li><Link to="blog-single-sidebar.html">Blog Single Sidebar</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link to="contact.html">Contact Us</Link></li>
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