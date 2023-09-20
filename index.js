//fetching all the things I need to manipulate the page
const root = document.documentElement;
const main1 = document.getElementById("main");
const main2 = document.getElementById("main2");
const btnContainer = document.getElementById("btnCont");
const fsSwitch = document.getElementById("fullScreen");
const fsLabel = document.getElementById("fullscreenlabel");
const bgBtn = document.getElementById("bgbtn");
const textBtn = document.getElementById("textbtn");
const conBgBtn = document.getElementById("conbgbtn");
const btnBgBtn = document.getElementById("btnbgbtn");
const btnTextBtn = document.getElementById("btntextbtn");
const allRdmBtn = document.getElementById("allrdmbtn");
//Making the button that makes the two parent containers fullscreen.
fsSwitch.addEventListener("click", (event) => {
  if (fsSwitch.checked) {
    main1.style.width = "100vw";
    main2.style.width = "100vw";
    fsLabel.textContent = "No, shrink me!";
    btnContainer.style.display = "none";
  } else {
    main1.style.width = "50vw";
    main2.style.width = "50vw";
    fsLabel.textContent = "Fullscreen Me!";
    btnContainer.style.display = "flex";
  }
});
//hexcode generator
function randColor() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  val = "#" + n.slice(0, 6);
  return val;
}
//I make individual functions for each color, because honestly at my current level i don't know any other way.
function bgColor() {
  randColor();
  root.style.setProperty("--bgcolor", val);
}
function textColor() {
  randColor();
  root.style.setProperty("--text-color", val);
}
function containerColor() {
  randColor();
  root.style.setProperty("--con-bg-color", val);
}
function buttonColor() {
  randColor();
  root.style.setProperty("--btn-bg-color", val);
}
function buttonTextColor() {
  randColor();
  root.style.setProperty("--btn-text-color", val);
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
