window.addEventListener("DOMContentLoaded", init);

function init() {
  const btnsParent = document.querySelector(".cus-filet-tabs-wrapper");
  const headTypelink = document.querySelector(".cus-tabs-wrapper");
  const linkList = document.querySelectorAll(".cus-tabs-items");
  const svgImg = document.querySelectorAll(".svg-img");

  const anchorList = document.querySelectorAll(".js-anchor");
  const tabsContent = document.querySelectorAll(".tab-content");
  var runBlock = document.querySelector(".cus-btn-select");
  var moveLine = document.querySelector(".cus-btn-accent");
  var posRigth = 0;

  btnsParent.addEventListener("click", function (event) {
    event.preventDefault();

    const anchor = event.target.getAttribute("id").slice(1);

    anchorList.forEach((element) => {
      if (element.classList.contains("white-text")) {
        element.classList.remove("white-text");
        return;
      }
    });
    event.target.classList.add("white-text");

    tabsContent.forEach((element) => {
      if (element.classList.contains("active-tab-content")) {
        element.classList.remove("active-tab-content");
        return;
      }
    });

    document.getElementById(anchor).classList.add("active-tab-content");

    // switch logic
    if (anchor == "tab-1") {
      posRigth = 4;
      runBlock.style.left = `${posRigth}px`;
    } else if (anchor == "tab-2") {
      posRigth = 136;
      runBlock.style.left = `${posRigth}px`;
    }
  });

  headTypelink.addEventListener("click", function (event) {
    event.preventDefault();

    const anchorLink = event.target.getAttribute("id").slice(1);

    linkList.forEach((element) => {
      if (element.classList.contains("white-text")) {
        element.classList.remove("white-text");
        return;
      }
    });
    svgImg.forEach((element) => {
      if (element.classList.contains("tab-icon-active")) {
        element.classList.remove("tab-icon-active");
        return;
      }
    });
    event.target.classList.add("white-text");
    document.getElementById(anchorLink).classList.add("tab-icon-active");

    // switch logic
    if (anchorLink == "itab-1") {
      posRigth = 20;
      moveLine.style.left = `${posRigth}px`;
    } else if (anchorLink == "itab-2") {
      posRigth = 240;
      moveLine.style.left = `${posRigth}px`;
    } else if (anchorLink == "itab-3") {
      posRigth = 440;
      moveLine.style.left = `${posRigth}px`;
    } else if (anchorLink == "itab-4") {
      posRigth = 620;
      moveLine.style.left = `${posRigth}px`;
    } else if (anchorLink == "itab-5") {
      posRigth = 810;
      moveLine.style.left = `${posRigth}px`;
    }
  });
}
