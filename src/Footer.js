import React from "react";
import './Footer.css'

const FooterOne = () => {
    return (
        <>
            <footer className="footer-section">
                <section className="d-flex justify-content-center mt-5">

                    <div className="online-shop">
                        <p className="text-black fw-bold">ONLINE SHOPPING</p>
                        <a href="/">Men</a>
                        <a href="/">Women</a>
                        <a href="/">Kids</a>
                        <a href="/">Home&Living</a>
                        <a href="/">Beauty</a>
                        <a href="/">Gift Cards</a>
                        <a href="/">Myntra Insider</a>

                        <p className="text-black fw-bold mt-4">USEFUL LINKS</p>
                        <a href="/">Blog</a>
                        <a href="/">Careers</a>
                        <a href="/">Site Map</a>
                        <a href="/">Corporate information</a>
                        <a href="/">whitehat</a>

                    </div>

                    <div className="online-shop">
                        <p className="text-black fw-bold">CUSTOMER POLICIES</p>
                        <a href="/">Contact Us</a>
                        <a href="/">FAQ</a>
                        <a href="/">T&C</a>
                        <a href="/">Terms of Uses</a>
                        <a href="/">Track Order</a>
                        <a href="/">Shipping</a>
                        <a href="/">cancellation</a>
                        <a href="/">Returns</a>
                        <a href="/">Privacy Police</a>
                        <a href="/">Grievance officer</a>

                    </div>
                    <div className="online-shop">
                        <p className="text-black fw-bold">EXPERIENCE MYNTRA APP ON MOBILE</p>
                        <div>

                            <a href="/">
                                <img src="./images/footer/playstore.png" alt="play-store" width="140px" />
                            </a>


                            <a href="/">
                                <img src="./images/footer/apple.png" alt="app-store" width="140px" />
                            </a>

                        </div>
                        <p className="text-black fw-bold mt-4">KEEP IN TOUCH</p>
                        <i className="fa-brands fa-square-facebook"></i>&nbsp;&nbsp;
                        <i className="fa-brands fa-twitter"></i>&nbsp;&nbsp;
                        <i className="fa-brands fa-youtube"></i>&nbsp;&nbsp;
                        <i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;
                    </div>
                    <div>
                        <div className="online-shop">
                            <img src="./images/footer/original.png
                " alt="100%" width="50px" />
                            <span><span class="fw-bold">100% ORIGINAL</span> guarantee for all products at
                                myntra.com</span>
                        </div>
                        <div className="online-shop mt-0">
                            <img src="./images/footer/14.png" alt="14" width="50px" />
                            <span><span class="fw-bold">Return within 14days</span> of receiving your order</span>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default FooterOne;