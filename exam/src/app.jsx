import axios from "axios";
import Home from "../src/page/home";
import SingleImg from "../src/page/singl";

import { Component } from "react";

import "./app.scss";
import Navbar from "../src/page/navbar";

export default class App extends Component {
	state = {
		pages: "",
		pruodeks: [],
		pruodeksCopu: [],
		isSingle: false,
		singleidx: 0,
		categories: [],
		isLoading1: false,
		isLoading2: false,


	};
	handleImg = (produksIdx) => {
		this.setState({ isSingle: true, singleidx: produksIdx })
	}
	componentDidMount() {
		axios.get("https://dummyjson.com/products").then((resp) => {
			this.setState({ pruodeks: resp.data.products })
			this.setState({ pruodeksCopu: resp.data.products })
			this.setState({ isLoading1: true })


		});

		axios
			.get(`https://dummyjson.com/products/categories`)
			.then((resp) => {
				console.log("respNavbar ", resp.data);
				this.setState({ categories: resp.data })
				this.setState({ isLoading1: true })


			})
			.catch((err) => {
				console.log("sss", err);
			});

	}
	handlecatigory = (title) => {
		let { pruodeks } = this.state

		let pruodeks1 = pruodeks.filter((item) => item.category == title)
		this.setState({ pruodeksCopu: pruodeks1 })
	}
	render() {
		let { isSingle, singleidx, categories, isLoading1, isLoading2 } = this.state
		if (!isLoading1 && !isLoading2) {
			return <h1>Loading...</h1>
		}
		if (isSingle) {
			return <SingleImg idx={singleidx} />
		}
		return <>
			<section>
				<Navbar categories={categories} oncatigory={this.handlecatigory} />
				<Home pruodeks={this.state.pruodeksCopu} onImg={this.handleImg} />
			</section>
		</>;
	}
}
