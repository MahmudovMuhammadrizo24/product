

import React, { Component } from "react";
import axios from "axios";

export default class SingleImg extends Component {
    state = {
        idx: this.props.idx,
        pruodeks: [],
        img: "",
    };

    componentDidMount() {
        axios
            .get(`https://dummyjson.com/products/${this.props.idx}`)
            .then((resp) => {
                console.log("resp", resp.data);
                this.setState({ pruodeks: resp.data, img: resp.data.thumbnail });
            })
            .catch((err) => {
                console.log("sss", err);
            });
    }

    handleclickbtn = () => {
        window.location.reload();
    };

    handleclickimg = (img) => {
        this.setState({ img });
    };

    render() {
        const { pruodeks, img } = this.state;

        return (
            <>
                <div className="single">
                    <button
                        onClick={this.handleclickbtn}
                        className="btn btn-warning"
                    >
                        Back to Products
                    </button>
                    <div className="boxs">
                        <div className="imgs">
                            <img src={img} className="mb-5 asosiy" alt="" />
                            <div className="imgss">
                                {pruodeks.images &&
                                    pruodeks.images.map((item) => (
                                        <img
                                            onClick={() => this.handleclickimg(item)}
                                            className="mb-5"
                                            key={item.id}
                                            src={item}
                                            alt=""
                                        />
                                    ))}
                            </div>
                        </div>
                        <div className="matnla">
                            <h1 className="titleSp">{pruodeks.title}</h1>
                            <div className="starsP">
                                <div className="stars">
                                    <span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 16 16"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 16 16"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 16 16"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 16 16"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <p className="reviews">(100 ta mijozning izohlari)</p>
                            </div>
                            <p className="priceP">$ {pruodeks.price}</p>
                            <p>{pruodeks.description}</p>
                            <p>Mavjud: Omborda</p>
                            <p>SCU: recQ0fMd8T0Vk211E</p>
                            <p>Brend: liddy</p>
                            <section className="sc-kEjbxe jbJDWL">
                                <div className="colors">
                                    <span>Ranglar:</span>
                                    <div>
                                        <button
                                            style={{ background: "rgb(0, 0, 0)" }}
                                            className="color-btn active"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="btn-container">
                                    <div className="sc-jrAGrp dXWCyY amount-btsn">
                                        <button type="button" className="amount-btn">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 448 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </button>
                                        <h2 className="amount">1</h2>
                                        <button type="button" className="amount-btn">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 448 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <a className="btn" href="/cart">
                                        Savatga qo'shish
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
