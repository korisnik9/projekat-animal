// https://api.thedogapi.com/v1/breeds

var num = 0;
var arr = [];

function fetchA() {
    url = "https://api.thedogapi.com/v1/breeds";
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            return res;
        })
        .then(function(res) {
            loadAll(res);
        }).then(slider).then(addTopRated);
    }

    fetchA();

    function loadAll(data) {
        for (e of data) {
            arr.push(e);
        }
    }
    document.addEventListener("load", slider);

function slider() {
    var animalsParent = document.getElementsByClassName("animals")[0];
    for (e of arr) {
        if(arr.indexOf(e) === 14) {
            break;
        }
        let animal = document.createElement("div");
        animal.classList.add("slider");
        animal.innerHTML += "<p>Bred for <span class=\"dog\"><i>" + e.bred_for + "</i></span></p>"; console.log(e.bred_for)
        animal.innerHTML += "<div class=\"image\">" + "<h2>" + e.name + "</h2></div>";
        animal.childNodes[1].style.backgroundImage = "url(" + e.image.url + ")"; console.log(e.image.url)
        
        animalsParent.appendChild(animal);
        
    }
    showSlides(0);
}

function w() {
    if (window.innerWidth < 650) {
        return 1;
    } else if (window.innerWidth > 650 && window.innerWidth < 960) {
        return 2;
    } else if (window.innerWidth > 960) {
        return 3;
    }
}

var windowVariable = w();
window.onresize = function() {
     windowVariable = w(); 
    }


function showSlides(num) {
    for (k = 0; k < dogs.length; k++) {
        dogs[k].style.display = "none";
    }
    for (i = 0; i < windowVariable; i++) {
        dogs[i + num].style.display = "grid";
    }
}

dogs = document.getElementsByClassName("slider");
document.getElementById("left").addEventListener("click", slideBack);
document.getElementById("right").addEventListener("click", slideForward);


function slideForward() {
num = num + windowVariable;
if (num >= dogs.length - windowVariable) {
    num = 0;
}
showSlides(num);
}

function slideBack() {
num = num - windowVariable;
if (num < 0) { num = dogs.length - windowVariable - 1; }
showSlides(num);
}


var row = document.getElementsByClassName("row")[0];
var j;

function addTopRated() {
    for (j = 0; j < 6; j++) {
        const articleWrapper = document.createElement("article");
        articleWrapper.innerHTML += "<div class=\"img\">" +
            "<span>" +"  " + "</span><h3>" + arr[j].name + "</h3></div>";
        articleWrapper.childNodes[0].style.backgroundImage = "url(" + arr[j].image.url + ")";
        articleWrapper.innerHTML += "<div class=\"lower\">" +
        "<a href=" + arr[j].image.url +
        "<span class=\"description\">" + arr[j].bred_for  + "</span>" +
        "</div>";
     row.appendChild(articleWrapper);
    }
    
}






