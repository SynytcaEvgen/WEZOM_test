window.addEventListener("DOMContentLoaded", init);
function init() {
  var wrapSub = document.getElementById("wrapper-sub"),
    escSub = document.getElementById("esc-sub");

  var presCabForm = document.querySelector(".form-user"),
    callBackForm = document.querySelector(".form-callback"),
    searchForm = document.querySelector(".form-search"),
    searchFormWrap = document.querySelector(".cus-search-wrapper"),
    filterPrice = document.querySelector(".form-filter"),
    subscForm = document.querySelector(".form-sub"),
    subscBody = document.querySelector(".sub-body"),
    subscEmail = subscForm.querySelector(".sub-emil"),
    priceWrap = filterPrice.querySelector(".cus-btn-wrapper"),
    btnPrice = filterPrice.querySelector(".submit-filter-btn"),
    minPrice = filterPrice.querySelector(".min-cost"),
    maxPrice = filterPrice.querySelector(".max-cost"),
    emCont = presCabForm.querySelector(".email-cont"),
    password = presCabForm.querySelector(".pass-cont"),
    fildArea = presCabForm.querySelectorAll(".valid"),
    phone = callBackForm.querySelector(".tel-ph"),
    searchLine = searchForm.querySelector(".cus-finder"),
    overlay = document.createElement("div"),
    body = document.body,
    reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  var openPop_ = function (wrapper) {
    overlay.classList.add("overlay");
    body.appendChild(overlay);
    wrapper.classList.remove("none");
  };
  var listOverlay = function () {
    overlay.addEventListener("click", function () {
      hidePop_(wrapSub);
    });
  };
  var hidePop_ = function (wrapper) {
    wrapper.classList.add("none");
    body.removeChild(overlay);
  };
  var generateError = function (text) {
    var error = document.createElement("div");
    error.classList.add("error");
    error.innerHTML = text;
    return error;
  };
  var removeValidion = function (elem) {
    var errorFind = elem.querySelectorAll(".error");
    for (var i = 0; i < errorFind.length; i++) {
      errorFind[i].remove();
    }
  };
  var checkFild = function (per) {
    for (var i = 0; i < fildArea.length; i++) {
      if (!fildArea[i].value) {
        var error = generateError("Поле не заполнено");
        per[i].parentElement.insertBefore(error, fildArea[i]);
      }
    }
  };
  // simulate form submission
  var sendButton = function () {
    if (emCont.value && password.value.length > 4 && reg.test(emCont.value)) {
      location.reload();
      return true;
    }
  };
  var checkPassword = function () {
    if (password.value.length <= 4 && password.value.length != 0) {
      var passError = generateError("Пароль должен содержать более 3 символов");
      password.parentElement.insertBefore(passError, password);
    }
  };
  var checkEmail = function (element) {
    if (!reg.test(element.value) && element.value) {
      var emailError = generateError("Введите коректный email");
      element.parentElement.insertBefore(emailError, element);
    }
  };
  var checkPhone = function () {
    if (phone.value.length < 17) {
      var phoneError = generateError("Введите коректный номер телефона");
      phone.parentElement.insertBefore(phoneError, phone);
    } else {
      location.reload(); // simulate form submission
    }
  };
  var checkSearch = function () {
    if (searchLine.value.length <= 2) {
      var searchError = generateError(
        "Поисковый запрос должен содержать более 2 символов"
      );
      searchForm.parentElement.insertBefore(searchError, searchForm);
    } else {
      location.reload(); // simulate searching
    }
  };
  var checkNegativNumb = function () {
    if (minPrice.value < 0 || maxPrice.value < 0) {
      var priceError = generateError("Цена не может быть отрицательной");
      btnPrice.parentElement.insertBefore(priceError, btnPrice);
    }
  };
  var checkEmailSub = function (element, par) {
    if (!reg.test(element.value)) {
      var emailError = generateError("Введите коректный email");
      par.parentElement.insertBefore(emailError, par);
    } else {
      openPop_(wrapSub);
      element.value = "";
    }
  };
  subscForm.addEventListener("submit", function (event) {
    event.preventDefault;
    removeValidion(subscBody);
    checkEmailSub(subscEmail, subscForm);
  });
  filterPrice.addEventListener("submit", function (event) {
    event.preventDefault;
    removeValidion(priceWrap);
    checkNegativNumb();
  });
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault;
    removeValidion(searchFormWrap);
    checkSearch();
  });

  callBackForm.addEventListener("submit", function (event) {
    event.preventDefault;
    removeValidion(callBackForm);
    checkPhone();
  });
  presCabForm.addEventListener("submit", function (event) {
    event.preventDefault;
    removeValidion(presCabForm);
    checkFild(presCabForm);
    checkPassword();
    sendButton();
    checkEmail(emCont);
  });
  escSub.addEventListener("click", function () {
    hidePop_(wrapSub);
  });
  listOverlay();
}
