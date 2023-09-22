//fetching all the things I need to manipulate the page
const root = document.documentElement;
const btnContainer = document.getElementById("btnCont");
const menuBtn = document.getElementById("menucheck");
const menuLabel = document.getElementById("menubtn");
const bgBtn = document.getElementById("bgbtn");
const bgHeader = document.getElementById("bgcolorheader");
const textBtn = document.getElementById("textbtn");
const textHeader = document.getElementById("textcolorheader");
const conBgBtn = document.getElementById("conbgbtn");
const conHeader = document.getElementById("concolorheader");
const btnBgBtn = document.getElementById("btnbgbtn");
const btnBgHeader = document.getElementById("btnbgcolorheader");
const btnTextBtn = document.getElementById("btntextbtn");
const btnTextHeader = document.getElementById("btntextcolorheader");
const allRdmBtn = document.getElementById("allrdmbtn");
const itWorks = document.getElementById("itworks");
const path1 = document.getElementById("path1");
const path2 = document.getElementById("path2");
//Making the button that makes the two parent containers fullscreen.
//hexcode generator
function randColor() {
  // let n = (Math.random() * 0xfffffffff).toString(16);
  let n = (Math.random() * (33554431 - 16777215) + 16777215).toString(16);
  console.log(n);
  val = "#" + n.slice(1, 7);
  itWorks.textContent = "It Works!";
  console.log(val);
  return val;
}
//I make individual functions for each color, because honestly at my current level i don't know any other way.
function bgColor() {
  randColor();
  root.style.setProperty("--bgcolor", val);
  bgHeader.textContent = val;
}
function textColor() {
  randColor();
  root.style.setProperty("--text-color", val);
  textHeader.textContent = val;
}
function containerColor() {
  randColor();
  root.style.setProperty("--con-bg-color", val);
  conHeader.textContent = val;
}
function buttonColor() {
  randColor();
  root.style.setProperty("--btn-bg-color", val);
  btnBgHeader.textContent = val;
}
function buttonTextColor() {
  randColor();
  root.style.setProperty("--btn-text-color", val);
  btnTextHeader.textContent = val;
}
//This is for the all-random button, it just runs all the functions on one button.
function AllRandom() {
  bgColor();
  textColor();
  containerColor();
  buttonColor();
  buttonTextColor();
}
//These are the eventlisteners for every button in the buttoncontainer. Again there might be smarter ways of doing this. I don't know how atm.
bgBtn.addEventListener("click", bgColor);
textBtn.addEventListener("click", textColor);
conBgBtn.addEventListener("click", containerColor);
btnBgBtn.addEventListener("click", buttonColor);
btnTextBtn.addEventListener("click", buttonTextColor);
allRdmBtn.addEventListener("click", AllRandom);

menuBtn.addEventListener("click", (event) => {
  if (menuBtn.checked) {
    btnContainer.style.display = "flex";
    menuLabel.style.gap = "0";

    path1.style.transform = "rotate(45deg) translate(1px, 3px)";

    path2.style.transform = "rotate(-45deg) translate(-1px, -3px)";
  } else {
    btnContainer.style.display = "none";
    menuLabel.style.gap = "20px";

    path1.style.transform = "rotate(0deg)";

    path2.style.transform = "rotate(0deg)";
  }
});
