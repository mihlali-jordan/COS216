//I chose asynchronous calls because I dont want the entire website to wait for content that takes long to load
//rather load the content while not blocking others from making requests/queries

var a = 0;
var today = new Date();
var count = 1;
var ident = 365;

function myLoad() {
  a++;
  if (this.status === 200) {
    const object = JSON.parse(this.responseText);
    ident = object.id;

    let t = "title" + a;
    //console.log(t);
    var gameTitle = document.getElementsByClassName(t);
    gameTitle[0].innerHTML = object.title;

    let d = "description" + a;
    var className = document.getElementsByClassName(d);
    className[0].innerHTML = "<u> Description: </u>" + object.short_description;

    let g = "genre" + a;
    var className = document.getElementsByClassName(g);
    className[0].innerHTML = "<u> Genre: </u>" + object.genre;

    let p = "platform" + a;
    var className = document.getElementsByClassName(p);
    className[0].innerHTML = "<u> Platform: </u>" + object.platform;

    let pu = "publisher" + a;
    var className = document.getElementsByClassName(pu);
    className[0].innerHTML = "<u> Publisher: </u>" + object.publisher;

    let de = "developer" + a;
    var className = document.getElementsByClassName(de);
    className[0].innerHTML = "<u> Developer: </u>" + object.developer;

    let r = "release" + a;
    var className = document.getElementsByClassName(r);
    className[0].innerHTML = "<u> Release Date: </u>" + object.release_date;

    let i = "image" + a;
    var image = document.getElementsByClassName(i);
    image[0].src = object.thumbnail;

    //console.log(className);
  }
}

var loader;
for (var i = 1; i <= 20; i++) {
  document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById("loader");
    loadScreen(1);
  });

  var pas = "";
  let req = new XMLHttpRequest();
  let url =
    "https://api.allorigins.win/raw?url=https://www.freetogame.com/api/game?id=" +
    count;

  //console.log(url);
  req.addEventListener("load", myLoad);
  req.open("GET", url, true);
  req.send();
  today--;
  count++;
  //}
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

var search = function (event) {
  var queries = event.target.elements["search"].value;
  for (var i = 1; i <= 505; i++) {
    let r = new XMLHttpRequest();
    let url =
      "https://api.allorigins.win/raw?url=https://www.freetogame.com/api/game?id=" +
      i;
    const obj = JSON.parse(this.responseText);
    if (
      obj.title.includes(queries) == true ||
      obj.genre.includes(queries) == true ||
      obj.short_description.includes(queries) == true ||
      obj.developer.includes(queries) == true ||
      obj.platform.includes(queries) == true
    ) {
      let req = new XMLHttpRequest();
      let url =
        "http://api.allorigins.win/raw?url=https://www.freetogame.com/api/game?id=" +
        i;

      //console.log(url);
      req.addEventListener("load", myLoad);
      req.open("GET", url, true);
      req.send();
      break;
    }
  }
};
document.addEventListener("submit", search);

