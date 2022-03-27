
var hs, ms, ss;
let index = -2;
var update = false;;

setInterval(() => {
    if (index == -1 && update == false) displayRealTime();
    else { displayFakeTime(); }
}, 1000)

function displayRealTime() {
    const timeNow = new Date();
    hours = timeNow.getHours();
    minutes = timeNow.getMinutes();
    seconds = timeNow.getSeconds();
    weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    today = weekDay[timeNow.getDay()];
    months = timeNow.toLocaleString("default", {
        month: "long"
    });
    year = timeNow.getFullYear();
    period = "AM";
    if (hours > 12) {
        hours -= 12;
        period = "PM";
    }
    if (hours === 0) {
        hours = 12;
        period = "AM";
    }
    let date = today + "," + months + " " + timeNow.getDate() + "," + year;
    document.getElementById('hour').innerHTML = hours + ":";
    document.getElementById('min').innerHTML = minutes + ":";
    document.getElementById('second').innerHTML = seconds;
    document.getElementById('pm').innerHTML = period;
    document.getElementById('day').innerHTML = date;
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

function openform() {
    var content = `
<button onclick="closeForm()" class="close">
   <i class='fa fa-close' style="font-size: 13px;"></i></button>
<h2>Setting Time &#9200;</h2>
<div class="n">
   <label><b>Hours</b><br></label>
   <input type="text" placeholder="Enter Hours" id="H" required>
</div>
<div class="n">
   <label><b>Minutes<br></b></label>
   <input placeholder="Enter Minutes " id="M" required>
</div>
<div class="n">
   <label><b>Seconds <br> </b></label>
   <input placeholder="Enter Seconds" id="S" required>
</div>
<button class="add"
   onclick="DataValidation(document.getElementById('H').value,document.getElementById('M').value,document.getElementById('S').value)"
   style="margin-top:30px;margin-left:30%">Save
</button>

`;
    let clock = new form(content);

    clock.showform();
}
function closeForm() {
    document.getElementById("form").style.display = "none";
    document.getElementById("modal").style.display = "none";

}
function DataValidation(h, m, s) {
    if ((h.length == 0) || (m.length == 0) || (s.length == 0)) {
        alert("please fill out all field");
        incompl = true;
        console.log(incompl);
        return
    }
    if ((h.match(/^\d+$/)) && (m.match(/^\d+$/)) && (s.match(/^\d+$/))) {

        if ((Number(h) < 24) && (Number(m) < 60) && (Number(s) < 60)) {
            hs = h; ms = m;
            ss = s;
            index = 0;
            update = true;
            closeForm();
        }
        else alert("check enterd values")

    }
    else { alert("invaild input"); }

}
function displayFakeTime() {
    ss = Number(ss) + 1;
    if (ss > 59) {
        ms = Number(ms) + 1;
        i = 0;
        ss = 1;

    }
    if (ms > 59) {

        hs = Number(hs) + 1;
        ms = 1;
    }

    if (hs > 12) {
        hs = Number(hs) - 12;
        period = "PM";
    }

    if (hs === 0) {
        hs = 12;
        period = "AM";
    }
    document.getElementById('hour').innerHTML = hs + ":";
    document.getElementById('min').innerHTML = ms + ":";
    document.getElementById('second').innerHTML = ss;
    document.getElementById('pm').innerHTML = period;

}
if (index == -2) {
    setInterval(() => {
        d = new Date();
        hr = d.getHours();
        min = d.getMinutes();
        sec = d.getSeconds();

        if (update == false) {
            hr_r = 30 * hr + min / 2;
            min_r = 6 * min;
            sec_r = 6 * sec;
            hos.style.transform = `rotate(${hr_r}deg)`;
            mos.style.transform = `rotate(${min_r}deg)`;
            sos.style.transform = `rotate(${sec_r}deg)`;
        }
        else {
            hr_r= 30 * hs + ms / 2;
            min_r = 6 * ms;
            sec_r = 6 * ss;
            hos.style.transform = `rotate(${hr_r}deg)`;
            mos.style.transform = `rotate(${min_r}deg)`;
            sos.style.transform = `rotate(${sec_r}deg)`;

        }
    }, 1000);
}

function showDigital() {
    document.getElementById('main').style.display = "flex";
    document.getElementById('clock2').style.display = "none";
    index = -1;


}
function showAnalog() {
    document.getElementById('main').style.display = "none";
    document.getElementById('clock2').style.display = "block ";
    index = -2;


}