import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main';
import HeaderOne from "./Header";
import FooterOne from "./Footer";
import HomePage from "./Pages/HomePage";
import Ethnic from "./Pages/ethnic";
import DetailsPage from "./Pages/details";
import Wishlist from "./Pages/wish";
import CartData from "./Pages/cart";

const RoutingOne = () => {
    return (
        <>
            <BrowserRouter>
                <HeaderOne />
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={<HomePage />} />
                        <Route path="/category" element={<Ethnic />} />
                        <Route path="/details" element={<DetailsPage />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/cart" element={<CartData />} />

                    </Route>
                </Routes>
                <FooterOne />
            </BrowserRouter>
        </>
    )
}
export default RoutingOne;
