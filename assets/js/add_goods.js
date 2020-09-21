window.addEventListener("DOMContentLoaded", init);
function init() {
  var wrapGoods = document.querySelector(".goods-card-wrapper"),
    btnComper = wrapGoods.querySelectorAll(".goods-comper > span"),
    btnFavorit = wrapGoods.querySelectorAll(".goods-favorit-add > span"),
    btnBacket = wrapGoods.querySelectorAll(".buy-goods"),
    compareNumb = document.getElementById("compare-numb"),
    compareWrap = document.getElementById("compare"),
    favoritWrap = document.getElementById("favorit"),
    favoritNumb = document.getElementById("favorit-numb"),
    backetWarap = document.getElementById("backet"),
    backetNumb = document.getElementById("backet-numb"),
    maxQuantity = 9;

  var removeNumb = function (wrap, numb) {
    numb.innerHTML = +numb.innerHTML - 1;
    if (+numb.innerHTML == 0) {
      wrap.classList.add("none");
    }
  };
  var addNumb = function (wrap, numb) {
    if (+numb.innerHTML == 0) {
      wrap.classList.remove("none");
      numb.innerHTML = +numb.innerHTML + 1;
    } else {
      numb.innerHTML = +numb.innerHTML + 1;
    }
  };
  var controlComper = function (e) {
    if (!e.target.classList.contains("activ-click")) {
      e.target.classList.add("activ-click");
      addNumb(compareWrap, compareNumb);
    } else {
      e.target.classList.remove("activ-click");
      removeNumb(compareWrap, compareNumb);
    }
  };
  var controlFavorit = function (e) {
    if (!e.target.classList.contains("activ-click")) {
      e.target.classList.add("activ-click");
      addNumb(favoritWrap, favoritNumb);
    } else {
      e.target.classList.remove("activ-click");
      removeNumb(favoritWrap, favoritNumb);
    }
  };
  var controlBacket = function () {
    if (backetWarap.classList.contains("none")) {
      backetWarap.classList.remove("none");
      backetNumb.innerHTML = +backetNumb.innerHTML + 1;
    } else if (+backetNumb.innerHTML < maxQuantity) {
      backetNumb.innerHTML = +backetNumb.innerHTML + 1;
    }
  };
  var setUpListeners = function () {
    btnComper.forEach(function (item) {
      item.addEventListener("click", controlComper);
    });
    btnFavorit.forEach(function (item) {
      item.addEventListener("click", controlFavorit);
    });
    btnBacket.forEach(function (item) {
      item.addEventListener("click", controlBacket);
    });
  };

  setUpListeners();
}
