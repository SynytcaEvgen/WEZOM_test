window.addEventListener("DOMContentLoaded", init);
function init() {
  var formSelect = document.querySelector(".form-filter"),
    wraperSelect = formSelect.querySelector(".cus-filter-option-wrapper"),
    btnReset = formSelect.querySelector(".reset-filter-btn"),
    contSelect = formSelect.querySelectorAll(".select-selected"),
    selectValue = formSelect.querySelectorAll(".select-items > div"),
    defaultValue = formSelect.querySelectorAll(
      ".custom-select > select >option:first-child"
    );

  var removeClass = function () {
    for (var i = 0; i < selectValue.length; i++) {
      if (selectValue[i].classList.contains("same-as-selected")) {
        selectValue[i].removeAttribute("class");
      }
    }
  };
  var setDefualt = function () {
    for (var i = 0; i < contSelect.length; i++) {
      contSelect[i].innerHTML = defaultValue[i].innerHTML;
    }
  };

  btnReset.addEventListener("click", function (event) {
    event.preventDefault;
    setDefualt();
    removeClass();
  });
}
