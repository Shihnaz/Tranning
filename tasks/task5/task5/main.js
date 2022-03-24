let id = 20;
let Name = "";
let invalidp, incompl, invalidU = false;
let fetchText = async () => {
    try {
        let response = await fetch('https://fakestoreapi.com/products', {
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
        <th>Id</th>
        <th>Title</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Image</th>
    
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
    let x = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(
            {
                title: titl,
                price: pric,
                description: 'lorem ipsum set',
                image: img,
                category: 'new',
                rating: { rate: "not", count: 120 },

            }
        )
    })
    const data = await x.json();
    id += 1;
    document.getElementById("products").innerHTML +=
        `
        <tr>
                <td>${id}</td>
                <td> ${titl}</td>       
                <td>${pric}</td>
                <td>not</td> 
                  <td><img src="${im} " style='width: 100px;' id="${im} "  onclick='showContent("${im} ")' ></td> 

            </tr>
        `

    console.log(data, "ddd");
    closeForm();
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
        var content = `
    <button onclick="closeForm()" class="close">
                <i class='fa fa-close' style="font-size: 13px;"></i></button>
            <h2>Adding Product</h2>
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
        
    `;
        let text = new form(content);
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







