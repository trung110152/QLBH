import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findByIdProduct} from "../../services/productsService";

export default function FocusProduct(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => {
        return state.products.product
    })
    useEffect(()=>{})
    dispatch(findByIdProduct(id))
    return(
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bread-inner">
                                <ul className="bread-list">
                                    <li><a href="index1.html">Home<i className="ti-arrow-right"></i></a></li>
                                    <li className="active"><a href="blog-single.html">Blog Single Sidebar</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog-single section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="blog-single-main">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image">
                                            <img src="https://via.placeholder.com/950x460" alt="#"/>
                                        </div>
                                        <div className="blog-detail">
                                            <h2 className="blog-title">What are the secrets to start- up success?</h2>
                                            <div className="blog-meta">
                                                <span className="author"><a href="#"><i className="fa fa-user"></i>By Admin</a><a
                                                    href="#"><i className="fa fa-calendar"></i>Dec 24, 2018</a><a
                                                    href="#"><i className="fa fa-comments"></i>Comment (15)</a></span>
                                            </div>
                                            <div className="content">
                                                <p>What a crazy time. I have five children in colleghigh school
                                                    graduates.jpge or pursing post graduate studies Each of my children
                                                    attends college far from home, the closest of which is more than 800
                                                    miles away. While I miss being with my older children, I know that a
                                                    college experience can be the source of great growth and experience
                                                    can be the source of source of great growth and can provide them
                                                    with even greater in future.</p>


                                            </div>
                                        </div>
                                        <div className="share-social">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="content-tags">
                                                        <h4>Tags:</h4>
                                                        <ul className="tag-inner">
                                                            <li><a href="#">Glass</a></li>
                                                            <li><a href="#">Pant</a></li>
                                                            <li><a href="#">t-shirt</a></li>
                                                            <li><a href="#">swater</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="comments">
                                            <h3 className="comment-title">Comments (3)</h3>
                                            <div className="single-comment">
                                                <img src="https://via.placeholder.com/80x80" alt="#"/>
                                                    <div className="content">
                                                        <h4>Alisa harm <span>At 8:59 pm On Feb 28, 2018</span></h4>
                                                        <p>Enthusiastically leverage existing premium quality vectors
                                                            with enterprise-wide innovation collaboration
                                                            Phosfluorescently leverage others enterprisee
                                                            Phosfluorescently leverage.</p>
                                                        <div className="button">
                                                            <a href="#" className="btn"><i className="fa fa-reply"
                                                                                           aria-hidden="true"></i>Reply</a>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="single-comment left">
                                                <img src="https://via.placeholder.com/80x80" alt="#"/>
                                                    <div className="content">
                                                        <h4>john deo <span>Feb 28, 2018 at 8:59 pm</span></h4>
                                                        <p>Enthusiastically leverage existing premium quality vectors
                                                            with enterprise-wide innovation collaboration
                                                            Phosfluorescently leverage others enterprisee
                                                            Phosfluorescently leverage.</p>
                                                        <div className="button">
                                                            <a href="#" className="btn"><i className="fa fa-reply"
                                                                                           aria-hidden="true"></i>Reply</a>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="single-comment">
                                                <img src="https://via.placeholder.com/80x80" alt="#"/>
                                                    <div className="content">
                                                        <h4>megan mart <span>Feb 28, 2018 at 8:59 pm</span></h4>
                                                        <p>Enthusiastically leverage existing premium quality vectors
                                                            with enterprise-wide innovation collaboration
                                                            Phosfluorescently leverage others enterprisee
                                                            Phosfluorescently leverage.</p>
                                                        <div className="button">
                                                            <a href="#" className="btn"><i className="fa fa-reply"
                                                                                           aria-hidden="true"></i>Reply</a>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="reply">
                                            <div className="reply-head">
                                                <h2 className="reply-title">Leave a Comment</h2>
                                                <form className="form" action="#">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-group">
                                                                <label>Your Name<span>*</span></label>
                                                                <input type="text" name="name" placeholder=""
                                                                       required="required"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-group">
                                                                <label>Your Email<span>*</span></label>
                                                                <input type="email" name="email" placeholder=""
                                                                       required="required"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label>Your Message<span>*</span></label>
                                                                <textarea name="message" placeholder=""></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-group button">
                                                                <button type="submit" className="btn">Post comment
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="main-sidebar">
                                <div className="single-widget search">
                                    <div className="form">
                                        <input type="email" placeholder="Search Here..."/>
                                            <a className="button" href="#"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div className="single-widget category">
                                    <h3 className="title">Blog Categories</h3>
                                    <ul className="categor-list">
                                        <li><a href="#">Men's Apparel</a></li>
                                        <li><a href="#">Women's Apparel</a></li>
                                        <li><a href="#">Bags Collection</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Sun Glasses</a></li>
                                    </ul>
                                </div>
                                <div className="single-widget recent-post">
                                    <h3 className="title">Recent post</h3>
                                    <div className="single-post">
                                        <div className="image">
                                            <img src="https://via.placeholder.com/100x100" alt="#"/>
                                        </div>
                                        <div className="content">
                                            <h5><a href="#">Top 10 Beautyful Women Dress in the world</a></h5>
                                            <ul className="comment">
                                                <li><i className="fa fa-calendar" aria-hidden="true"></i>Jan 11, 2020
                                                </li>
                                                <li><i className="fa fa-commenting-o" aria-hidden="true"></i>35</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-post">
                                        <div className="image">
                                            <img src="https://via.placeholder.com/100x100" alt="#"/>
                                        </div>
                                        <div className="content">
                                            <h5><a href="#">Top 10 Beautyful Women Dress in the world</a></h5>
                                            <ul className="comment">
                                                <li><i className="fa fa-calendar" aria-hidden="true"></i>Mar 05, 2019
                                                </li>
                                                <li><i className="fa fa-commenting-o" aria-hidden="true"></i>59</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="single-post">
                                        <div className="image">
                                            <img src="https://via.placeholder.com/100x100" alt="#"/>
                                        </div>
                                        <div className="content">
                                            <h5><a href="#">Top 10 Beautyful Women Dress in the world</a></h5>
                                            <ul className="comment">
                                                <li><i className="fa fa-calendar" aria-hidden="true"></i>June 09, 2019
                                                </li>
                                                <li><i className="fa fa-commenting-o" aria-hidden="true"></i>44</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-widget side-tags">
                                    <h3 className="title">Tags</h3>
                                    <ul className="tag">
                                        <li><a href="#">business</a></li>
                                        <li><a href="#">wordpress</a></li>
                                        <li><a href="#">html</a></li>
                                        <li><a href="#">multipurpose</a></li>
                                        <li><a href="#">education</a></li>
                                        <li><a href="#">template</a></li>
                                        <li><a href="#">Ecommerce</a></li>
                                    </ul>
                                </div>

                                <div className="single-widget newsletter">
                                    <h3 className="title">Newslatter</h3>
                                    <div className="letter-inner">
                                        <h4>Subscribe & get news  latest updates.</h4>
                                        <div className="form-inner">
                                            <input type="email" placeholder="Enter your email"/>
                                                <a href="#">Submit</a>
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