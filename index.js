const navigationEl = document.querySelector(".navigation");

navigationEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("navigation__link")) {
    this.querySelector(".navigation__checkbox").checked = false;
  }
});
