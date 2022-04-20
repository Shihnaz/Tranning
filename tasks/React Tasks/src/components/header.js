import pic from "../im1.jpg";
import { FaWindowClose } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useReducer } from "react";
import { Carousel } from "react-responsive-carousel";
import { val1, val2, val3 } from "./image";

var myobject = {
    display: "none",
    carName: null,
    model: "2015",
    price: 222222,
};

export function Header() {
    const [val, setImage] = useState(val1);
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState("Modern Hyundai ");

    let content = (
        <div id="md">
            <div className="header" id="hd">
                <div className="dropdown" id="d">
                    <h3 id="t" local="t">
                        choose the car{" "}
                    </h3>
                    <select name="car" id="car" onChange={change}>
                        <option></option>
                        <option value="M">Mercedes</option>
                        <option value="H">Hyundai</option>
                        <option value="B">BMW</option>
                    </select>
                </div>

                <div className="main" id="m">
                    <img src={pic} style={im}></img>
                    <h1>Modern Cars</h1>
                </div>
                <div className="head" style={style}>
                    <button
                        id="b1"
                        style={buttons}
                        onClick={() => {
                            setImage(val1);
                            setText("Modern Hyundai ");
                        }}
                    >
                        Content1
                    </button>
                    <button
                        id="b2"
                        style={buttons}
                        onClick={() => {
                            setImage(val2);
                            setText("Mercedes Car");
                        }}
                    >
                        Content2
                    </button>
                </div>
            </div>
            <div id="d1">
                <h3>{text}</h3>
                {/* <img  src={pics}></img> */}

                <Carousel className="st">
                    <div onClick={() => showimg("0")} id="im">
                        <img src={val.im1.src} index={0}></img>
                    </div>
                    <div onClick={() => showimg("1")} id="im">
                        <img src={val.im2.src} index={1}></img>
                    </div>
                    <div onClick={() => showimg("2")} id="im">
                        <img src={val.im3.src} index={2}></img>
                    </div>
                    <div onClick={() => showimg("3")} id="im">
                        {" "}
                        <img src={val.im4.src} index={3}></img>
                    </div>
                </Carousel>
            </div>
        </div>
    );
    if (visible) {
        content = (
            <div id="md">
                <div className="header" id="hd">
                    <div className="dropdown" id="d">
                        <h3 id="t" local="t">
                            choose the car{" "}
                        </h3>
                        <select name="car" id="car" onChange={change}>
                            <option></option>
                            <option value="M">Mercedes</option>
                            <option value="H">Hyundai</option>
                            <option value="B">BMW</option>
                        </select>
                    </div>

                    <div className="main">
                        <img src={pic} style={im}></img>
                        <h1>Modern Cars</h1>
                    </div>
                    <div className="head" style={style}>
                        <button
                            style={buttons}
                            onClick={() => {
                                setImage(val1);
                                setText("Modern Hyundai ");
                            }}
                        >
                            Content1
                        </button>
                        <button
                            style={buttons}
                            onClick={() => {
                                setImage(val2);
                                setText("Mercedes Car");
                            }}
                        >
                            Content2
                        </button>
                    </div>
                </div>
                <div id="d1">
                    <h3>{text}</h3>
                    <Carousel className="st">
                        <div onClick={() => showimg("0")} id="im">
                            <img src={val.im1.src} index={0}></img>
                        </div>
                        <div onClick={() => showimg("1")} id="im">
                            <img src={val.im2.src} index={1}></img>
                        </div>
                        <div onClick={() => showimg("2")} id="im">
                            <img src={val.im3.src} index={2}></img>
                        </div>
                        <div onClick={() => showimg("3")} id="im">
                            {" "}
                            <img src={val.im4.src} index={3}></img>
                        </div>
                    </Carousel>
                </div>
                <div id="form">
                    <button
                        id="close"
                        onClick={() => {
                            setVisible(false);
                            document.getElementById("md").style.backgroundColor = "";
                        }}
                    >
                        {" "}
                        <FaWindowClose />
                    </button>
                    <h2>
                        {myobject.carName}
                        {myobject.model}{" "}
                    </h2>
                    <img src={myobject.imag}></img>
                    <h4>{myobject.price}</h4>
                </div>
            </div>
        );
    }
    return <div>{content}</div>;
    function change(e) {
        console.log(e.target.value);
        if (e.target.value == "M") {
            setImage(val2);
            setText("Mercedes Car");
        }
        if (e.target.value == "H") {
            setImage(val1);
            setText("Modern Hyundai ");
        }
        if (e.target.value == "B") {
            setImage(val3);
            setText("BMW ");
        }

    }
    function showimg(e) {
        document.getElementById("md").style.backgroundColor = "#595959";

        let carn = text;

        console.log(e);

        if (e == 0) {
            myobject = {
                model: val.im1.model,
                carName: carn,
                imag: val.im1.src,
                price: val.im1.price,
            };
            setVisible(true);
            console.log(myobject);
        }
        if (e == 1) {
            myobject = {
                model: val.im2.model,
                carName: carn,
                imag: val.im2.src,
                price: val.im2.price,
            };
            setVisible(true);
        }
        if (e == 2) {
            myobject = {
                model: val.im3.model,
                carName: carn,
                imag: val.im3.src,
                price: val.im3.price,
            };
            setVisible(true);
        }

        if (e == 3) {
            myobject = {
                model: val.im4.model,
                carName: carn,
                imag: val.im4.src,
                price: val.im4.price,
            };
            setVisible(true);
        }
        console.log(myobject);
    }
}

let style = {
    marginLeft: "80%",
    textAlign: "left",
};
let buttons = {
    marginLeft: "10%",
};
let im = {
    width: "40%",
    textAlign: "center",
};
