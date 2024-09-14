import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import queryString from "query-string";


import "./ethnic.css";


class EthnicPage extends React.Component {
    constructor() {
        super();
        this.state = {
            clothes: []

        }
    }

    componentDidMount() {
        const q = queryString.parse(window.location.search);
        const { type } = q;


        // console.log(type);

        axios({
            url: `https://proj2-server.onrender.com/category/${type}`,
            method: 'get',
            headers: { 'Content-Type': 'application/JSON' }
        })
            .then(res => {
                // console.log(res)
                this.setState({ clothes: res.data.typeOfProducts })
            })
            .catch(err => console.log(err));

    }

    handleGender = (sex) => {

        const { style, lcost, hcost, sorting, page } = this.state


        const filterObject = {
            style,
            lcost,
            hcost,
            sex,
            sorting,
            page

        }

        axios({
            url: "https://proj2-server.onrender.com/filterProduct",
            method: "POST",
            headers: { "Content-Type": "application/JSON" },
            data: filterObject
        })
            .then(res => {
                this.setState({ clothes: res.data.FilterProducts, sex })
            })
            .catch((err => console.log(err)));
    }

    handleCategory = (style) => {

        const { sex, lcost, hcost, sorting, page } = this.state


        const filterObject = {
            style,
            lcost,
            hcost,
            sex,
            sorting,
            page

        }

        axios({
            url: "https://proj2-server.onrender.com/filterProduct",
            method: "POST",
            headers: { "Content-Type": "application/JSON" },
            data: filterObject
        })
            .then(res => {
                this.setState({ clothes: res.data.FilterProducts, style })
            })
            .catch((err => console.log(err)));
    }

    handleCost = (e) => {

        let price = (e.target.value).split(",")
        let lcost = price[0];
        let hcost = price[1];

        const { sex, style, sorting, page } = this.state;

        const filterObject = {
            style,
            lcost,
            hcost,
            sex,
            sorting,
            page

        }

        axios({
            url: "https://proj2-server.onrender.com/filterProduct",
            method: "POST",
            headers: { "Content-Type": "application/JSON" },
            data: filterObject
        })
            .then(res => {
                this.setState({ clothes: res.data.FilterProducts, lcost, hcost });
            })
            .catch((err => console.log(err)))
    }


    handleSort = (sorting) => {
        const { sex, style, lcost, hcost, page } = this.state

        const filterObject = {
            style,
            lcost,
            hcost,
            sex,
            sorting,
            page

        }

        axios({
            url: "https://proj2-server.onrender.com/filterProduct",
            method: "POST",
            headers: { "Content-Type": "application/JSON" },
            data: filterObject
        })
            .then(res => {
                this.setState({ clothes: res.data.FilterProducts, sorting });
            })
            .catch((err => console.log(err)))

    }

    handlePage = (page) => {

        const { sex, style, lcost, hcost, sorting } = this.state

        const filterObject = {
            style,
            lcost,
            hcost,
            sex,
            sorting,
            page

        }

        axios({
            url: "https://proj2-server.onrender.com/filterProduct",
            method: "POST",
            headers: { "Content-Type": "application/JSON" },
            data: filterObject
        })
            .then(res => {
                this.setState({ clothes: res.data.FilterProducts, page });
            })
            .catch((err => console.log(err)))

    }

    resetFilters=()=>{
        window.location.reload();
    }


    render() {
        const { clothes } = this.state;
        // console.log(clothes);
        return (
            <div>
                <p className="filt">Trending Wear For people
                </p>
                <span className="filt">FILTERS</span>
                <span className="cler" onClick={()=>this.resetFilters()}>CLEAR ALL</span>
                <main className="mainpart" >

                    <aside className="filtersection">


                        <section>
                            <p>Gender</p>
                            <div>
                                <input type="radio" id="men" value="men" name="sex" onChange={() => this.handleGender('men')} />
                                <label for="men">men
                                </label>
                            </div>
                            <div>
                                <input type="radio" id="Women" name="sex" value="Women" onChange={() => this.handleGender('Women')} />
                                <label for="Women">Women
                                </label>
                            </div>
                        </section>
                        <hr />

                        <section>
                            <p>CATEGORY</p>

                            <div>
                                <input type="checkbox" id="Ethnic" name="Ethnic" value="Ethnic" onChange={() => this.handleCategory("Ethnic")} /> <label for="Ethnic" className="filter-content">Ethnic</label>
                            </div>
                            <div>
                                <input type="checkbox" id="casual" name="casual" value="casual" onChange={() => this.handleCategory("casual")} /> <label for="casual" className="filter-content">casual</label>
                            </div>
                            <div>
                                <input type="checkbox" id="bra" name="bra" value="bra" onChange={() => this.handleCategory("bra")} /> <label for="bra" className="filter-content">Bra</label>
                            </div>
                            <div>
                                <input type="checkbox" id="briefs" name="briefs" value="briefs" onChange={() => this.handleCategory("briefs")} /> <label for="briefs" className="filter-content">briefs</label>
                            </div>
                            <div>
                                <input type="checkbox" id="vest" name="vest" value="vest" onChange={() => this.handleCategory("vest")} /> <label for="vest" className="filter-content">vest</label>
                            </div>
                            <div>
                                <input type="checkbox" id="drawer" name="drawer" value="drawer" onChange={() => this.handleCategory("drawer")} /> <label for="drawer" className="filter-content">drawer</label>
                            </div>

                            <div>
                                <input type="checkbox" id="active" name="active" value="active" onChange={() => this.handleCategory("active")} /> <label for="active" className="filter-content">Active-Wear</label>
                            </div>

                        </section>
                        <hr />

                        <section>
                            <p>PRICE</p>
                            <div>
                                <input type="radio" id="500" value="500, 1000" name="price" onChange={this.handleCost} />
                                <label for="500">Rs.500-Rs.1000
                                </label>
                            </div>
                            <div>
                                <input type="radio" id="1000" value="1000, 2000" name="price" onClick={this.handleCost} />
                                <label for="1000">Rs.1000-Rs.2000
                                </label>
                            </div>
                            <div>
                                <input type="radio" id="2000" value="2000, 5000" name="price" onChange={this.handleCost} />
                                <label for="2000">Rs.2000-Rs.5000
                                </label>
                            </div>

                        </section>

                        <hr />

                        <section>
                            <input type="radio" id="ltoh" name="Sort" value="Price low to high" onClick={() => this.handleSort(1)} /> <label for="ltoh" className="filter-content">Price low to high</label> <br />
                            <input type="radio" id="htol" name="Sort" value="Price high to low" onClick={() => this.handleSort(-1)} /> <label for="htol" className="filter-content">Price high to low</label> <br />
                        </section>

                    </aside >
                    <section class="UsProducts">
                        <div class="d-flex flex-wrap">
                            {
                                clothes.length!==0 ? clothes.map((item) => {
                                    return (
                                        <Link to={`/details?product=${item.productId}`}>
                                            <div className="firstline" key={item.productId}>
                                                <a href="#">
                                                    <img src={item.images[0]} alt="" width="200" />
                                                </a>
                                                <p className="descri">{item.brandName}</p>
                                                <p className="descrip">{item.color}</p>
                                                <p className="descri">{item.cost}</p>
                                            </div>
                                        </Link>
                                    )

                                }) : <div className="text-info fw-bold"> sorry no results found, try with other filters</div>


                            }
                        </div>

                        <div class="flat">
                            <p class="flat-content">FLAT ₹200 OFF</p>

                        </div>

                        {/* <!--Pagination--> */}
                        <div className="mt-5">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="/">
                                        <span> {'<'} </span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#" onClick={() => this.handlePage(1)} >1</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={() => this.handlePage(2)} >2</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={() => this.handlePage(3)} >3</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={() => this.handlePage(4)} >4</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={() => this.handlePage(5)} >5</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="/">
                                        <span> {'>'} </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </section>

                </main>
            </div>
        )
    }
}

export default EthnicPage
