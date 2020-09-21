window.addEventListener("DOMContentLoaded", init);

function init() {
  var wrapCab = document.getElementById("pers-cab"),
    btnCab = document.getElementById("btn-cab"),
    escCab = document.getElementById("esc-cab"),
    wrapCall = document.getElementById("wrap-callback"),
    btnCall = document.getElementById("btn-callback"),
    escCall = document.getElementById("esc-callback");

  class OpenClosePopUp {
    constructor(wrapper, btn, esc) {
      this.overlay = document.createElement("div");
      this.openPop_ = () => {
        document.body.appendChild(this.overlay);
        setTimeout(() => {
          wrapper.classList.remove("none");
        }, 200);
      };
      this.hidePop_ = () => {
        wrapper.classList.add("none");
        setTimeout(() => {
          document.body.removeChild(this.overlay);
        }, 400);
      };
      this.events_ = () => {
        btn.addEventListener("click", this.openPop_);
        this.overlay.addEventListener("click", this.hidePop_);
        esc.addEventListener("click", this.hidePop_);
      };
      this.init_ = () => {
        this.events_();
        this.overlay.classList.add("overlay");
      };
      this.init_();
    }
  }
  const persCabinet = new OpenClosePopUp(wrapCab, btnCab, escCab);
  const callBack = new OpenClosePopUp(wrapCall, btnCall, escCall);
}
