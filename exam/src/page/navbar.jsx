/* eslint-disable no-undef */
import React, { Component } from "react";
import axios from "axios";

export default class Navbar extends Component {
    state = {
        categories: this.props.categories,
        oncatigory: this.props.oncatigory
    };

    handlebtn = () => {
        window.location.reload()
    }
    handelSearch = () => { }


    render() {

        let { categories, oncatigory } = this.state
        return (
            <>
                <main className="main2">
                    <div className="category">
                        <input className="searchProduct" type="text" placeholder="Search" />
                        <h1>Category</h1>
                        <p className="categoryTy">All</p>
                        {categories.map((item) => (
                            <p className="categoryTy" onClick={() => oncatigory(item)} >{item}</p>
                        ))}
                    </div>
                    <button onClick={this.handlebtn} className="btn btn-danger">Clear Filters</button>

                </main>
            </>
        );
    }
}