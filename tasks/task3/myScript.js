let userName = "";
let fetchText = async () => {
    try {
        let response = await fetch("https://randomuser.me/api/?results=10", {
            method: "GET",
            headers: { Accept: "application/json" },
        });
        console.log(response.status);

        const data = await response.json();
        console.log(data);

        userName = data.results.map((user) => {
            return user.name.first;
        });

        const userGender = data.results.map((user) => {
            return user.gender;
        });

        const userPhone = data.results.map((user) => {
            return user.phone;
        });

        const userEmail = data.results.map((user) => {
            return user.email;
        });
        const userLocation = data.results.map((user) => {
            return user.location.city + "," + user.location.country;
        });
        const userPhoto = data.results.map((user) => {
            return user.picture.thumbnail;
        });

        // console.log(userName,userEmail,userGender,userLocation,userPhoto,userPhone);
        let result = "";

        data.results.map((user) => {
            result += `
        <div class="card" id="${user.name.first}">
        <div id="about"><img src="${user.picture.medium}">
          <p style="padding-left:120px;margin-top:-60px;font-size:15px;text-align:left;font-size:15px">${user.name.first} <b>${user.name.last}</b></p>
          <p style="text-align:left;margin-top:50px;font-size:15px">About me
          </p>
        </div>
        <div class="grid-container">
          <div class="grid-item">
            <p><i class="fa-regular fa-user">Gender</i><br>${user.gender}</p>
          </div>
          <div class="grid-item">
            <p><i class="fa-regular fa-envelope style="font-size:14px">Email</i><br>${user.email}</i></p>
          </div>
          <div class="grid-item">
            <p> <i class="fa-solid fa-location-pin">Location</i><br>${user.location.country}</p>
          </div>
          <div class="grid-item">
            <p><i class='fa fa-phone'>Phone</i><br>${user.phone}</p>
          </div>
        </div>
      </div>
               `;
        });
        document.querySelector(".main-container").innerHTML = result;

        return [
            userName,
            userEmail,
            userGender,
            userLocation,
            userPhoto,
            userPhone,
        ];
    } catch (error) {
        console.log(error);
    }
};

fetchText();
let randomColor = () => {
    var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    var newcolor = document.querySelectorAll(".card");
    console.log(newcolor.length);
    let i = colorArray[Math.floor(Math.random() * colorArray.length)];
    let J = colorArray[Math.floor(Math.random() * colorArray.length)];
    let k = colorArray[Math.floor(Math.random() * colorArray.length)];
    let root = document.documentElement;
    root.style.setProperty('--cardR2', i);
    root.style.setProperty('--cardR3', J);
    root.style.setProperty('--cardB', k);

    ;
}


randomColor();

function search(input) {
    console.log(input);
    //let person = document.querySelectorAll('#' + input);
    let card = document.querySelectorAll('.card');
    for (let i = 0; i < card.length; i++) {

        if (card[i].id.indexOf(input) == -1) {
            card[i].style.display = "none";
        }
        else {
            card[i].style.display = "";
        }


    }
    // for (let i = 0; i < card.length; i++) {
    //     for (let j = 0; j < person.length; j++) {
    //         if (card[i].innerHTML != person[j].innerHTML) { card[i].style.display = "none"; }
    //     }

    // }
}
function sort(input) {


    if (input == 1) {
        users = userName.sort();
        for (let i = 0; i < users.length; i++) {
            document.querySelector(('#' + users[i])).style.order = i + 1;
        }
    }
    else if (input == 2) {
        users = userName.sort();

        for (let i = 0; i < users.length; i++) {
            document.querySelector(('#' + users[i])).style.order = users.length - i;


        }

    }

}





