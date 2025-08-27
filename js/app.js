const btn = document.getElementById("btnTopo");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 400) {
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = "0";
  }
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const menu = document.getElementsByTagName("nav");
const menuBtn = document.getElementById("menuBtn");
function toggleMenu() {
  const isVisible = menu[0].style.opacity === "1";
  const main = document.querySelector("main");

  menuBtn.src = isVisible ? "imagens/bars-solid-full.svg" : "imagens/xmark-solid-full.svg";
  menu[0].style.opacity = isVisible ? "0" : "1";
  main.style.filter = isVisible ? "none" : "blur(5px)";
  main.style.transition = "filter 0.3s ease";
  document.body.style.overflow = isVisible ? "auto" : "hidden";
}

