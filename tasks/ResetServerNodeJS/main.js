let id = 20;
let Name = "";
let invalidp, incompl, invalidU = false;
var contente = "";
var arabic = false;
var Arabic = new Map();
Arabic.set("pname", "اسم المنتج");
Arabic.set("pprice", "سعر المنتج");
Arabic.set("pimage", "صورة المنتج");
Arabic.set("ok", "تأكيد");
Arabic.set("tit", "يرجى ادخال اسم المنتج");
Arabic.set("pric", "يرجى ادخال سعرالمنتج");
Arabic.set("img", "يرجى ادخال صورة المنتج");
Arabic.set("header", "اضافة المنتج");
Arabic.set("op", "اضف منتج");
Arabic.set("t", "اختار اللغة التي تريدها ");
Arabic.set("title", "اسم المنتج");
Arabic.set("id", "رقم المنتج");
Arabic.set("price", "سعر المنتج");
Arabic.set("image", "صورة المنتج");
Arabic.set("rating", "تقييم المنتج");
Arabic.set("search", "  ...ابحث  ");
var English = new Map();
English.set("pname", "Product Name");
English.set("pprice", "Product Price");
English.set("pimage", "Product image");
English.set("ok", "Add");
English.set("tit", "Please enter product name");
English.set("pric", "Please enter product price in$");
English.set("img", "Please enter image Url");
English.set("header", "Adding Product");
English.set("op", "Add Product");
English.set("t", "Select the language ");
English.set("title", "Product Name");
English.set("id", "Product Number");
English.set("price", "Product Price");
English.set("image", "Product Image");
English.set("rating", "Rating");
English.set("search", " Search");
let fetchText = async () => {
    try {
        let response = await fetch("http://localhost:9090/data",{
            method: "GET",
           
            headers: { Accept: "application/json" },
        });
        console.log(response.status);

        const data = await response.json();
        console.log(data);
        Name = data.map((product) => {
            return product.title;
        });

        let results = `
    <tr>
        <th id="id" local="id">Id</th>
        <th id="title" local="title">Title</th>
        <th id="price" local="price">Price</th>
        <th id="rating" local="rating">Rating</th>
        <th id="image" local="image">Image</th>
    
    </tr>`;
        data.map((product) => {
            results +=
                `<tr id="${product.title}">
                <td>${product.id} </td>
                <td style="text-align:center;width:10%">${product.title}</td>       
                <td>${product.price}</td>  
                <td>${product.rating.rate}</td> 
                <td><img src="${product.image} " style='width: 100px;' id="${product.image} "  onclick='showContent("${product.image} ")' ></td> 
            
            </tr>`;
        }
        );
        document.getElementById('products').innerHTML = results;
    }
    catch (error) {
        console.log(error);
    }
}

let addNewp = async (titl, pric, im) => {
    let x = await fetch('http://localhost:9090/add', {
        method: "POST",
        body: JSON.stringify(
            {   id:id,
                title: titl,
                price: pric,
                description: 'lorem ipsum set',
                image: im,
                category: 'new',
                rating: { rate: "not", count: 120 },

            }),
            headers:{
                "Content-type": 'application/json'
            }
    
        
        
    })
    const data = await x.json();
    id += 1;
    // document.getElementById("products").innerHTML +=
    //     `
    //     <tr>
    //             <td>${id}</td>
    //             <td> ${titl}</td>       
    //             <td>${pric}</td>
    //             <td>not</td> 
    //               <td><img src="${im} " style='width: 100px;' id="${im} "  onclick='showContent("${im} ")' ></td> 

    //         </tr>
    //     `;
        closeForm();
    console.log(data, "ddd");
  
}
class form {
    static cont;
    constructor(con) {
        form.cont = con;

    }
    showform() {
        document.getElementById("form").innerHTML = form.cont;
        document.getElementById("form").style.display = "block";
        document.getElementById("modal").style.display = "block";

    }

}
fetchText();
let showContent = (num) => {
    if (num == 1) {
        if (arabic==false){
         contente = `
         <button onclick="closeForm()" class="close">
         <i class='fa fa-close' style="font-size: 13px;"></i></button>
     <h2 id="d3">Adding Product</h2>
     <div class="n">
         <label><b>Product Name</b><br></label>
         <input type="text" placeholder="Enter product Name" id="tit" required>
     </div>

     <div class="n">
         <label><b>Product Price<br></b></label>
         <input placeholder="Enter Price in $" id="pric" required>
     </div>

     <div class="n">
         <label><b>Product Image <br> </b></label>
         <input placeholder="Enter Image URL" id="img" required>
     </div>

     <button class="add"
         onclick="DataValidation(document.getElementById('tit').value,document.getElementById('pric').value,document.getElementById('img').value)"
         style="margin-top:30px;margin-left:30%">ADD
     </button>
 
`;} 
else {
    contente = `
    <button onclick="closeForm()" class="close">
                <i class='fa fa-close' style="font-size: 13px;"></i></button>
            <h2 id="header">اضافة منتج</h2>
            <div class="n">
                <label style="margin-left:55%;" id="pname"><b>اسم المنتج</b><br></label>
                <input style="text-align:right" placeholder="يرجى ادخال اسم المنتج" id="tit" required>
            </div>

            <div class="n">
                <label style="margin-left:55%;"  id="pprice"><b>سعر المنتج<br></b></label>
                <input style="text-align:right" placeholder="يرجى ادخال سعر المنتج" id="pric" required>
            </div>

            <div class="n">
                <label style="margin-left:54%;" id="pimage"><b>صورة المنتج <br> </b></label>
                <input style="text-align:right" placeholder="يرجى ادخال عنوان الصورة" id="img" required>
            </div>

            <button class="add" id="ok"
                onclick="DataValidation(document.getElementById('tit').value,document.getElementById('pric').value,document.getElementById('img').value)"
                style="margin-top:30px;margin-left:30%">تأكيد
            </button>
        
    `;
}
        let text = new form(contente);
        text.showform();
    }
    else {
        var content = `
    <button onclick="closeForm()" class="close">
    <i class='fa fa-close' style="font-size: 13px;"></i></button>
    <div  style="width:80%;height:300px;background-color: #c5dbea;">
        <img src="${num}" style="width:100%; height:300px">
     </div>
    `;
        let bigIM = new form(content);

        bigIM.showform();

    }


}
function closeForm() {
    document.getElementById("form").style.display = "none";
    document.getElementById("modal").style.display = "none";

}
function search(value) {
    let tr = document.querySelectorAll('tr');
    for (let i = 0; i < tr.length; i++) {

        if (tr[i].id.indexOf(value) == -1) {
            tr[i].style.display = "none";
        }
        else {
            tr[i].style.display = "table-row";
        }
    }


}
function isValidURL(str) {
    var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}
function DataValidation(titile, price, img) {
    var message = " ";
    console.log(titile, price, img);
    if ((titile.length == 0) || (price.length == 0) || (img.length == 0)) {
        alert("please fill out all field");
        incompl = true;
        console.log(incompl);
        return
    }
    else {
        incompl = false;
        if (price.match(/^\d+$/) || (price.match(/^\d+\.\d+$/))) {
            invalidp = false;
        }
        else {
            invalidp = true;
        }
        isValidURL(img) ? invalidU = false : invalidU = true;
    }
    console.log("pric", invalidp, "img", invalidU, "data", incompl);

    if (invalidp) { message = "invald price"; alert(message); }
    if (invalidU) { message += "invald Image url"; alert(message); }
    if (invalidp && invalidU) { { message = "invald Image url and invaild Price"; alert(message); } }

    if ((invalidU == false) && (invalidp == false)) addNewp(titile, price, img);

}

function update(val) {
    var _a, _b;
    if (val == "Arabic") {
        var results = document.querySelectorAll('[local]');
        arabic = true;
        for (var i = 0; i < results.length; i++) {
            var elemnt = document.getElementById(results[i].id);
            var id = (_a = document.getElementById(results[i].id)) === null || _a === void 0 ? void 0 : _a.id;
            var k = Arabic.get(id);
            elemnt.innerText = k;
        }
        var table = document.getElementById('products');
        table.style.direction = "rtl";
    }
    if (val == "English") {
        var results = document.querySelectorAll('[local]');
        arabic = false;
        for (var i = 0; i < results.length; i++) {
            var elemnt = document.getElementById(results[i].id);
            var id = (_b = document.getElementById(results[i].id)) === null || _b === void 0 ? void 0 : _b.id;
            var k = English.get(id);
            elemnt.innerText = k;
        }
        var table = document.getElementById('products');
        table.style.direction = "";
    }
}








