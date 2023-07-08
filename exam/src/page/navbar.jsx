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



    render() {

        let { categories, oncatigory } = this.state
        return (
            <>
                <main className="main2">
                    <div className="category">
                        <h1>Category</h1>
                        {categories.map((item) => (
                            <p onClick={() => oncatigory(item)} >{item}</p>
                        ))}
                    </div>
                    <button onClick={this.handlebtn} className="btn btn-danger">Clear Filters</button>

                </main>
            </>
        );
    }
}