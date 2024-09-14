import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from "axios";


import "./cart.css"; // Import CSS for styling the modal

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // If the modal is not open, return nothing

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                {children} {/* This allows you to pass content inside the modal */}
            </div>
        </div>
    );
};



const CartData = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bag, setBag] = useState([]);
    const [price, setPrice] = useState();


    const searchLink = useLocation();
    const queryParams = new URLSearchParams(searchLink.search);
    const searchQuery = queryParams.get('size');
    console.log(searchQuery)



    useEffect(() => {
        if (sessionStorage.getItem('ltk') != null) {
            const storedProducts = JSON.parse(sessionStorage.getItem('buyProduct')) || [];
            setBag(storedProducts);
        } else {
            alert("please Sign In")
        }
    }, [])

    const openModal = () => {

        const totalCost = bag.reduce((acc, item) => acc + item.cost, 0);
        setPrice(totalCost)
        console.log(totalCost);
        setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);

    const removeItemFromSessionStorage = (itemId) => {
        // Get the array of products from localStorage
        let products = JSON.parse(sessionStorage.getItem('buyProduct')) || [];

        // Filter out the object with the matching productId
        products = products.filter(product => product.productId !== itemId);
        setBag(products)
        // Save the updated array back to localStorage
        sessionStorage.setItem('buyProduct', JSON.stringify(products));
    };



    console.log(bag);

    // payment

    const initPayment = (data) => {
        const options = {
            key: "rzp_test_aHrtX1Yu7uUzk1",
            amount: data.amount,
            currency: data.currency,
            description: "Test Transaction",
            order_id: data.id,

            handler: async (response) => {
                try {

                    const verifyLink = "http://localhost:6530/api/payment/verify";
                    const { data } = await Axios.post(verifyLink, response);

                } catch (error) {
                    console.log(error);
                }
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    }

    const razorpayPayment = async () => {



        try {
            const orderLink = "http://localhost:6530/api/payment/orders";
            const { data } = await Axios.post(orderLink, { amount: price });
            console.log(data)

            initPayment(data.data);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div className='modal-text'>
                <h1 className='bg-black text-white mb-4'>Have a look on your Cart</h1>
            </div>

            <div>
                {
                    bag.length !== 0 ? bag.map((item) => {
                        return (

                            <div className="d-flex justify-content-center mb-3" key={item.productId}>
                                <div className='me-4'>
                                    <img src={item.images[0]} alt="display" width="200" />
                                </div>
                                <div>
                                    <h2 className="">{item.brandName}</h2>
                                    <h3 className="">size:  {searchQuery}</h3>
                                    <h5 className="">{item.cost}</h5>
                                    <div>
                                        {/* <button className="text-danger fw-bold p-2 rounded-2 mt-2 me-2">Add to Cart</button> */}
                                        <button className='text-primary fw-bold p-2 rounded-2 mt-2' onClick={() => removeItemFromSessionStorage(item.productId)}>Del <i class="fa-solid fa-trash-arrow-up"></i></button>
                                    </div>
                                </div>

                            </div>

                        )

                    }) : <div className="text-info fw-bold"> please Add items in your CART</div>


                }
                <div className='d-flex justify-content-center mt-4'><button className='fw-bold bg-warning p-2 rounded-3' onClick={openModal}>PAY NOW</button></div>

            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div>
                    <p className='fw-bold fs-4'>Number of items: {bag.length}</p>
                    <p className='fw-bold fs-4'>Total cost : {price}</p>

                    <button className="btn btn-outline-primary" style={{ float: "right", marginTop: "18px", marginRight: "350px" }} onClick={razorpayPayment}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="razorpay" style={{ height: '25px' }} />
                    </button>
                </div>
                <button className='mt-5' onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default CartData;
