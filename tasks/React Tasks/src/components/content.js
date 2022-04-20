import pic from "../im1.jpg"
let im = {
    width: "40%",
    textAlign: "center"
}
let style = {
    marginLeft: "80%",
    textAlign: "left",

}
let buttons = {
    marginLeft: "10%"
}
export let content = <div id="md">

    <div className="header" id="hd">
        <div className="dropdown" id="d" >

            <h3 id="t" local="t">choose the car </h3>
            <select name="car" id="car" >
                <option ></option>
                <option value="M">Mercedes</option>
                <option value="H">Hyundai</option>
            </select>
        </div>

        <div className="main" id="m">


            <img src={pic} style={im}></img>
            <h1>Modern Cars</h1>
        </div>
        <div className="head" style={style}>

            <button id="b1" style={buttons} onClick={
                () => {
                    setImage(val1);
                    setText("Modern Hyundai ")

                }
            }>Content1</button>
            <button id="b2" style={buttons}
                onClick={
                    () => {
                        setImage(val2);
                        setText("Mercedes Car")

                    }
                }
            >Content2</button>
        </div>
    </div>
    <div id="d1">
        <h3>{text}</h3>
        {/* <img  src={pics}></img> */}


        <Carousel className="st"  >
            <div onClick={() => showimg("0")} id="im"><img src={val.im1.src} index={0} ></img></div>
            <div onClick={() => showimg("1")} id="im"><img src={val.im2.src} index={1} ></img></div>
            <div onClick={() => showimg("2")} id="im"><img src={val.im3.src} index={2}></img></div>
            <div onClick={() => showimg("3")} id="im"> <img src={val.im4.src} index={3}></img></div>
        </Carousel>
    </div>
</div>

