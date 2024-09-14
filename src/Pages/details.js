import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
import { Link } from "react-router-dom";

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap's JS bundle (includes Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./details.css"


const Details = () => {
    const [cloth, setCloth] = useState();

    const [buttonText, setButtonText] = useState([]);
    const [size, setSize] = useState();
    const [fav, setFav] = useState([]);




    const q = queryString.parse(window.location.search);
    const { product } = q;
    const int = parseInt(product);

    // const filterObject = {
    //     product: int
    // };

    useEffect(() => {
        axios({
            url: `http://localhost:6530/oneProduct/${int}`,
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => {
                setCloth(res.data.singleOne); // Assuming filterData is the correct path in your response
                // console.log(res);
            })
            .catch((err) => console.log(err));
    }, [int]); // Add 'int' as a dependency to avoid infinite loops

    if (!cloth) return <div>Loading...</div>; // Show loading state until cloth data is available

    // console.log(cloth);

    // const handleClick = () => {

    //     if (size) {
    //         setButtonText('Go to Cart');
    //     } else {
    //         alert("please select size")

    //     }
    // };

    const SessionCart = () => {

        if (size) {
            const existingProducts = JSON.parse(sessionStorage.getItem('buyProduct')) || [];

            // Add new product to the array
            const updatedProducts = [...existingProducts, cloth];

            // Store updated array back in localStorage
            sessionStorage.setItem('buyProduct', JSON.stringify(updatedProducts));

            setButtonText(updatedProducts);

            cartStore()
        } else {
            alert("please select size")

        }
    };

    const cartStore = () => {
        const storedProducts = JSON.parse(sessionStorage.getItem('buyProduct')) || [];
        setButtonText(storedProducts);
    }

    console.log(buttonText);

    //local storage
    const addToLocalStorage = () => {
        if (sessionStorage.getItem('ltk') != null) {
            // Get the existing products from localStorage (or initialize with an empty array)
            const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

            // Add new product to the array
            const updatedProducts = [...existingProducts, cloth];

            // Store updated array back in localStorage
            localStorage.setItem('products', JSON.stringify(updatedProducts));

            // Update the products state
            setFav(updatedProducts);

            favStore()
        } else {
            alert("please Sign In first")
        }
    };

    const favStore = () => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setFav(storedProducts);
    }

    // const handleFav = () => {

    //     localStorage.setItem('wish', JSON.stringify(cloth))
    //     const savedCart = localStorage.getItem('wish');
    //     const parsing = JSON.parse(savedCart)
    //     setFav(parsing)

    // };
    // console.log(fav)


    const handleSize = (e) => {
        if (sessionStorage.getItem('ltk') != null) {
            setSize(e.target.value)
        } else {
            alert("please Sign In first")
        }
    }
    console.log(size)

    return (
        <div>
            <div className="d-flex">
                <div className="piContent">
                    {/* <div>
                    <img src={cloth[0].images[0]} alt="product-images" />
                </div> */}

                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={cloth.images[0]} className="d-block w-100" alt="pics" />
                            </div>
                            <div className="carousel-item">
                                <img src={cloth.images[1]} className="d-block w-100" alt="pics" />
                            </div>
                            <div className="carousel-item">
                                <img src={cloth.images[2]} className="d-block w-100" alt="pics" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="m-5">
                    <h2 className="brand mt-3">{cloth.brandName}</h2>
                    <p className="text mt-3">{cloth.text}</p>
                    <hr />
                    <h5 className="prodCost mt-3">MRP ₹ {cloth.cost}</h5>
                    <h6 className="text-success mt-3">inclusive of all taxes</h6>
                    <h5 className="mt-3">{cloth.color}</h5>

                    <div className="mt-3">
                        <p className="fw-bold text-danger">SELECT SIZE</p>
                        <button className="sizes" value={"S"} onClick={handleSize}>S</button>
                        <button className="sizes" value={"M"} onClick={handleSize}>M</button>
                        <button className="sizes" value={"L"} onClick={handleSize}>L</button>
                    </div>
                    <div className="mt-5">
                        {/* <button className="Cart" onClick={handleClick}>{buttonText}</button> */}
                        {/* <button className="Cart" onClick={handleClick}>{size?"gotocart":"addtocart"}</button> */}
                        <span>
                            {buttonText.length !== 0 ? <Link to={`/cart?size=${size}`}><button className="Cart" >GO TO CART  <i class="fa-solid fa-bag-shopping"></i></button></Link> : <button className="Cart" onClick={SessionCart}>ADD TO CART</button>}
                        </span>

                        <span>
                            {fav.length !== 0 ? <Link to={`/wishlist?product=${cloth.productId}`}><button className="wish">Wishlist <i class="fa-solid fa-heart text-danger"></i></button></Link> : <button className="wish" onClick={addToLocalStorage}>Wishlist</button>}
                        </span>

                        {/* <button className="wish">Wishlist <i class="fa-solid fa-heart text-white"></i></button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
