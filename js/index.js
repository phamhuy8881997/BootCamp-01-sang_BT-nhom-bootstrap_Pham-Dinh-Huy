//scroll to
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 200) {
    document.getElementById("header__menu").style.backgroundColor = "#f8f9fa";
    document.getElementById("header__menu").style.padding = "0 5%";
    document.getElementById("header__menu").style.color = "#000";
  } else {
    document.getElementById("header__menu").style.backgroundColor =
      "transparent";
    document.getElementById("header__menu").style.padding = "2% 5%";
    document.getElementById("header__menu").style.color = "#fff";
  }
});
//dark-mode
document.getElementById("button-mode").onclick = function () {
  document.getElementById("MyBody").classList.toggle("bg__dark");
};
