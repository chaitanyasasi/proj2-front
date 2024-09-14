import React from "react";
import "./Home.css";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <section className="offersale-time">
                    <p className="text-center pt-2">Sale Ends in 2 days</p>
                </section>
                <section>
                    {/* <div className="d-flex justify-content-center mt-4">
                        <img src="./images/offeerPoster.webp" alt="coupon-img"
                            width="93%" />
                    </div> */}
                    <div className="d-flex justify-content-center">
                        <a href="/category?type=Ethnic">
                            <div>
                                <img src="./images/for-him.webp" alt="ranbir-pic" width="100%" />
                            </div>
                        </a>
                        <a href="/category?type=casual">
                            <div>
                                <img src="./images/for-her.webp" alt="kia-pic" width="100%" />
                            </div>
                        </a>
                    </div>
                    <a href="#">
                        <div>
                            <img src="./images/festive.webp" alt="festive-img" width="100%" />
                        </div>
                    </a>
                </section>
                <section className="d-flex fa-wrap">

                    <div>
                        <a href="/category?type=casual">
                            <img src="./images/festive/uspolo-jj.webp" alt="uspolo" width="100%" />
                        </a>
                    </div>
                    <div>
                        <a href="/category?type=active">
                            <img src="./images/festive/wrong.webp" alt="wrong" width="100%" />
                        </a>
                    </div>
                    <div>
                        <a href="/category?type=casual">
                            <img src="./images/festive/higlander.webp" alt="highlander" width="100%" />
                        </a>
                    </div>
                    <div>
                        <a href="/category?type=bra">
                            <img src="./images/festive/liabas.webp" alt="liabas" width="100%" />
                        </a>
                    </div>
                    <div>
                        <a href="/category?type=Ethnic">
                            <img src="./images/festive/ethnic.webp" alt="ethnic" width="100%" />
                        </a>
                    </div>
                    <div>
                        <a href="/category?type=briefs">
                            <img src="./images/festive/boohoo.webp" alt="boohoo" width="100%" />
                        </a>
                    </div>


                </section>
                <section>
                    <a href="https://play.google.com/store/apps/details?id=com.myntra.android&pli=1">
                        <div className="d-flex justify-content-center ">
                            <img src="./images/download myntra app suggestion.webp" alt="download myntra app" className="img-fluid" width={"100%"} />
                        </div>
                    </a>
                    <div>
                        <img src="./images/cateory specials.webp" alt="category-img" width="100%" />
                    </div>
                </section>
                <section>
                    <div className="d-flex fa-wrap">
                        <div className="category-image">
                            <a href="/category?type=Ethnic">
                                <img src="./images/category/ethnic.webp" alt="ethnic" width="100%" />
                            </a>
                        </div>
                        <div className="category-image">
                            <a href="/category?type=casual">
                                <img src="./images/category/casualwear.webp" alt="casual-wear" width="100%" />
                            </a>
                        </div>
                        <div className="category-image">
                            <a href="/category?type=active">
                                <img src="./images/category/active-wear.webp" alt="active-wear" width="100%" />
                            </a>
                        </div>
                        <div class="category-image">
                            <a href="/category?type=active">
                                <img src="./images/category/active-wear-gents.webp" alt="active-wear-gents" width="100%" />
                            </a>
                        </div>
                        <div className="category-image">
                            <a href="/category?type=Ethnic">
                                <img src="./images/category/western-wear.webp" alt="western-wear" width="100%" />
                            </a>
                        </div>
                        <div className="category-image">
                            <a href="/category?type=active">
                                <img src="./images/category/sports-wear.webp" alt="sports-wear" width="100%" />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex fa-wrap">
                        <div>
                            <a href="/category?type=briefs">
                                <img src="./images/category/lounge-wear.webp" alt="lounge-wear" width="100%" />
                            </a>
                        </div>
                        <div>
                            <a href="/category?type=drawer">
                                <img src="./images/category/innerwear.webp" alt="inner-wear" width="100%" />
                            </a>
                        </div>
                        <div>
                            <a href="/category?type=bra">
                                <img src="./images/category/lingeri.webp" alt="lingerie" width="100%" />
                            </a>
                        </div>
                        <div>
                            <a href="/category?type=Ethnic">
                                <img src="./images/category/watches.webp" alt="watches" width="100%" />
                            </a>
                        </div>
                        <div>
                            <a href="/category?type=Ethnic">
                                <img src="./images/category/grooming.webp" alt="grooming" width="100%" />
                            </a>
                        </div>
                        <div>
                            <a href="/category?type=Ethnic">
                                <img src="./images/category/beauty.webp" alt="beauty" width="100%" />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex fa-wrap">
                        <div>

                            <img src="./images/category/kidswear.webp" alt="kids-wear" width="100%" />

                        </div>
                        <div>

                            <img src="./images/category/ladies footwear.jpg" alt="footwear" width="100%" />

                        </div>
                        <div>

                            <img src="./images/category/mens footwear.webp" alt="footwear" width="100%" />

                        </div>
                        <div>

                            <img src="./images/category/bag-belts.webp" alt="bag-belts" width="100%" />

                        </div>
                        <div>

                            <img src="./images/category/office-wear.webp" alt="office-wear" width="100%" />

                        </div>
                    </div>
                    {/* <div className="d-flex fa-wrap sleep">
                        <div>
                            <a href="#">
                                <img src="./images/category/sleepwear.webp" alt="inclusive" width="100%" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="./images/category/handbag.webp" alt="sleepwear" width="100%" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="./images/category/headphones.jpg" alt="handbag" width="100%" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="./images/category/jewellary.webp" alt="eye-wear" width="100%" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="./images/category/size-inclusive.webp" alt="jewellary" width="100%" />
                            </a>
                        </div>


                    </div> */}
                </section>
                <div className="flat">
                    <p className="flat-content">FLAT ₹200 OFF</p>

                </div>
            </div>
        )
    }
}
export default HomePage;