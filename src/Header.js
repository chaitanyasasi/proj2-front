import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import './Header.css'

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

const LogModal = ({ isOpen, onClose, children }) => {
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

const HeaderOne = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isLogOpen, setIsLogOpen] = useState(false);


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openLog = () => setIsLogOpen(true);
    const closeLog = () => setIsLogOpen(false);

    const [userData, setUserData] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem('ltk') != null) {
            fetch(`http://localhost:6530/userinfo`, {
                method: 'GET',
                headers: {
                    'x-access-token': sessionStorage.getItem('ltk')
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setUserData(data)
                    console.log(data);
                })
        }
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo');
        setUserData('');
        navigate('/')
    }



    const conditionalHeader = () => {
        if (userData) {
            if (userData.name) {
                sessionStorage.setItem('userInfo', JSON.stringify(userData))
                return (
                    <>
                        {/* <a href='/home'><button className="btn btn-primary me-3">go to home</button></a> */}
                        <button className="username">Hi {userData.name}</button>
                        &nbsp;
                        <button onClick={handleLogout} className='logout'>
                            Logout
                        </button>
                    </>
                )
            }
        } else {
            return (
                <>
                    <div>

                        <button className="logBut" onClick={openLog}>LogIn</button>

                        <button className="signBut" onClick={openModal}>SignUp</button>

                    </div>
                </>
            )
        }
    }

    const [values, setValues] = useState();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const checkout = () => {
        console.log(values)
        fetch(`http://localhost:6530/register`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(navigate('/login'))
    }

    //log in

    const [message, setMessage] = useState()



    const [logInfo, setLogInfo] = useState();

    const handleLogChange = (e) => {
        const { name, value } = e.target;
        setLogInfo({
            ...logInfo,
            [name]: value
        })
    }


    const LogCheckout = () => {
        console.log(logInfo)
        fetch(`http://localhost:6530/login`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(logInfo)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.auth === false) {
                    setMessage(data.token)
                    console.log(message)
                    window.location.reload();
                } else {
                    sessionStorage.setItem('ltk', data.token)
                    navigate('/')
                    window.location.reload();
                }
            })
    }


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbox">
                    <div className="container-fluid">

                        <Link to={'/'}><img src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" alt="myntra-logo" width="53px" height="53px" className="myntralogo" /></Link>
                       
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav headbar">
                                <li className="nav-item navheadings">
                                    <a className="nav-link text-dark fw-semibold" href="/category?type=casual">MEN</a>
                                </li>
                                <li className="nav-item navheadings">
                                    <a className="nav-link text-dark fw-semibold" href="/category?type=bra">WOMEN</a>
                                </li>
                                <li className="nav-item navheadings">
                                    <a className="nav-link text-dark fw-semibold" href="/">KIDS</a>
                                </li>
                                <li className="nav-item navheadings">
                                    <a className="nav-link text-dark fw-semibold" href="/">HOME & LIVING</a>
                                </li>
                                <li className="nav-item navheadings">
                                    <a className="nav-link text-dark fw-semibold" href="/">BEAUTY</a>
                                </li>
                                
                            </ul>

                            <div className="nav-item search-bar">
                                <form className="d-flex">
                                    <i className="fa-sharp fa-solid fa-magnifying-glass text-dark-emphasis"></i>
                                    <input className="form-control border-0" type="search"
                                        placeholder="Search for products, brands and more" aria-label="" />
                                    {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                                </form>
                            </div>
                            {/* <div className="iconstext">
                                <i className="fa-regular fa-user ms-1"></i>
                                <h6 className="profile-text">Profile</h6>
                            </div> */}
                            <div className="iconstext">
                                <Link to={'/wishlist'} style={{ textDecoration: 'none' }}>
                                    <i className="fa-regular fa-heart ms-2 text-black"></i>
                                    <h6 className="profile-text">Wishlist</h6></Link>
                            </div>
                            <div className="iconstext">
                                <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                                    <i className="fa-solid fa-bag-shopping text-black"></i>
                                    <h6 className="profile-text">Bag</h6></Link>
                            </div>
                            <div>
                                {conditionalHeader()}
                                {/* <button className='fw-bold bg-warning p-2 rounded-3' onClick={openModal}>CART</button> */}

                                {/* <button className='fw-bold bg-warning p-2 rounded-3' onClick={openLog}>LOG</button> */}

                            </div>

                        </div>
                    </div>
                </nav>
            </header>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div>
                    <div className="container">
                        <hr />
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h3>Regsiter</h3>
                            </div>
                            <div className='panel-body'>
                                <div className='row'>
                                    <div className='col-md-6 form-group'>
                                        <label for="fname" className='control-label'>Name</label>
                                        <input className='form-control' type="text" id="fname"
                                            name="name" onChange={handleInputChange} />
                                    </div>
                                    <div className='col-md-6 form-group'>
                                        <label for="email" className='control-label'>Email</label>
                                        <input className='form-control' id="email" type="email"
                                            name="email" onChange={handleInputChange} />
                                    </div>
                                    <div className='col-md-6 form-group'>
                                        <label for="password" className='control-label'>Password</label>
                                        <input className='form-control' id="password"
                                            name="password" type="password" onChange={handleInputChange} />
                                    </div>
                                    <div className='col-md-6 form-group'>
                                        <label for="phone" className='control-label'>userName</label>
                                        <input className='form-control' id="phone"
                                            name="userName" onChange={handleInputChange} />
                                    </div>

                                </div>

                                <button className='btn btn-success mt-2 mb-2' onClick={checkout}>
                                    Register
                                </button>

                                <p>Already existing user ? <span onClick={closeModal}><Link onClick={openLog}>Sign In</Link></span></p>

                            </div>

                        </div>
                    </div>
                </div>
                <button className="mt-1 fw-bold" onClick={closeModal} >Close</button>

            </Modal>

            <LogModal isOpen={isLogOpen} onClose={closeLog}>
                <div>
                    <div className="container">
                        <hr />
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h3>Login</h3>
                            </div>
                            <div className='panel-body'>
                                <div className='row'>
                                    <h2 style={{ color: 'red' }}>{message}</h2>
                                    <div className='col-md-6 form-group'>
                                        <label for="userName" className='control-label'>userName</label>
                                        <input className='form-control' type="text" id="userName"
                                            name="userName" onChange={handleLogChange} />
                                    </div>
                                    <div className='col-md-6 form-group'>
                                        <label for="password" className='control-label'>Password</label>
                                        <input className='form-control' type="password" id="password"
                                            name="password" onChange={handleLogChange} />
                                    </div>


                                </div>
                                <button className='btn btn-warning mt-2 mb-2' onClick={LogCheckout}>
                                    Login
                                </button>
                                <p>Don't have an account? <span onClick={closeLog}><Link onClick={openModal}>SignUp</Link></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="mt-1 fw-bold" onClick={closeLog}>Close</button>
            </LogModal>
        </>
    )
}

export default HeaderOne;