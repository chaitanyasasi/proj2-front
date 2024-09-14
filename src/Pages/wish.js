import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import "./Wish.css"; // Import CSS for styling the modal





const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [wish, setWish] = useState([]);
    const [buttonText, setButtonText] = useState([]);
    // const [one, setOne] = (null)


    useEffect(() => {

        if (sessionStorage.getItem('ltk') != null){
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setWish(storedProducts);
        }else{
            alert("please Sign In")
        }
    }, [])

    const openModal = () => {

        setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);

    const removeItemFromLocalStorage = (itemId) => {
        // Get the array of products from localStorage
        let products = JSON.parse(localStorage.getItem('products')) || [];

        // Filter out the object with the matching productId
        products = products.filter(product => product.productId !== itemId);
        setWish(products)
        // Save the updated array back to localStorage
        localStorage.setItem('products', JSON.stringify(products));
    };



    console.log(wish);

    const SessionCart = (id) => {

        const localStorageData = localStorage.getItem('products');
        const parsedLocalStorageData = localStorageData ? JSON.parse(localStorageData) : [];
        const foundObject = parsedLocalStorageData.find(item => item.productId === id);

        console.log(foundObject)

        

        const existingProducts = JSON.parse(sessionStorage.getItem('buyProduct')) || [];

        // Add new product to the array
        const updatedProducts = [...existingProducts, foundObject];

        // Store updated array back in localStorage
        sessionStorage.setItem('buyProduct', JSON.stringify(updatedProducts));

        setButtonText(updatedProducts);

        let products = JSON.parse(localStorage.getItem('products')) || [];

        // Filter out the object with the matching productId
        products = products.filter(product => product.productId !== id);
        setWish(products)
        // Save the updated array back to localStorage
        localStorage.setItem('products', JSON.stringify(products));

        cartStore()
    };

    const cartStore = () => {
        const storedProducts = JSON.parse(sessionStorage.getItem('buyProduct')) || [];
        setButtonText(storedProducts);
    }

    return (
        <div>
            <div className='modal-text'>
                <h1 className='bg-black text-white mb-4'>Have a look on your favorites</h1>
                <button className='fw-bold bg-warning p-2 rounded-3' onClick={openModal}>wishlist</button>
            </div>

            <div class="d-flex flex-wrap">
                {
                    wish.length !== 0 ? wish.map((item) => {
                        return (

                            <div className="firstline" key={item.productId}>
                                <a href="#">
                                    <img src={item.images[0]} alt="" width="200" />
                                </a>
                                <p className="descri">{item.brandName}</p>
                                {/* <p className="descrip">{item.color}</p> */}
                                <p className="descri">{item.cost}</p>
                                <div>
                                    <button className="text-danger fw-bold p-2 rounded-2 mt-2 me-2" onClick={() => SessionCart(item.productId)}>Add to Cart</button>

                                    {/* <span>
                                        {buttonText.length !== 0 ? <Link to={`/cart`}><button className="Cart" >GO TO CART  <i class="fa-solid fa-bag-shopping"></i></button></Link> : <button className="Cart" onClick={() => SessionCart(item.productId)}>ADD TO CART</button>}
                                    </span> */}

                                    <button className='text-primary fw-bold p-2 rounded-2 mt-2' onClick={() => removeItemFromLocalStorage(item.productId)}>Del <i class="fa-solid fa-trash-arrow-up"></i></button>
                                </div>
                            </div>
                        )

                    }) : <div className="text-info fw-bold"> please Add your favorites</div>


                }
            </div>
            
        </div>
    );
};

export default App;
