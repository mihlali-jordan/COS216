//I chose asynchronous calls because I dont want the entire website to wait for content that takes long to load
//rather load the content while not blocking others from making requests/queries
var a = 0;
var today = new Date();
var count = 1;
var ident = 365;
var loader;

function myLoad() {
  a += 1;
  if (this.status === 200) {
    const object = JSON.parse(this.responseText);
    let t = "title" + a;
    //console.log(t);
    var gameTitle = document.getElementsByClassName(t);
    gameTitle[0].innerHTML = object.name;

    let d = "description" + a;
    var className = document.getElementsByClassName(d);
    className[0].innerHTML = "<u> Description: </u>" + object.description;

    let de = "developer" + a;
    var className = document.getElementsByClassName(de);
    className[0].innerHTML = "<u> Rating: </u>" + object.rating;

    let r = "release" + a;
    var className = document.getElementsByClassName(r);
    className[0].innerHTML = "<u> Release Date: </u>" + object.released;

    let i = "image" + a;
    var image = document.getElementsByClassName(i);
    image[0].src = object.background_image;

    //console.log(className);
  }
}

for (var i = 1; i <= 20; i++) {
  let req = new XMLHttpRequest();
  url =
    "https://api.allorigins.win/raw?url=https://api.rawg.io/api/games/" +
    i +
    "?key=458af7c0a33a49568976a2281a936a59";
  req.addEventListener("load", myLoad);

  req.open("GET", url, true);

  req.send();
}

function loadScreen(opacity) {
  if (opacity <= 0) {
    showContent();
  } else {
    //  console.log(loader.style.opacity);
    loader[0].style.opacity = opacity;
    window.setTimeout(function () {
      loadScreen(opacity - 0.1);
    }, 100);
  }
}

function showContent() {
  loader.style.display = "none";
  document.getElementsByClassName("content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementsByClassName("loader");
  loadScreen(1);
});

