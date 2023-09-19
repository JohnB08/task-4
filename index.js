const fullScreenBtn = document.getElementById("fullScreen");

const main = document.getElementById("main");
const main2 = document.getElementById("main2");
const fsLabel = document.getElementById("fullscreenlabel");
fullScreenBtn.addEventListener("click", (event) => {
  if (fullScreenBtn.checked) {
    main.style.width = "100vw";
    main.style.justifyContent = "space-evenly";
    main2.style.width = "100vw";
    main2.style.justifyContent = "space-evenly";
    fsLabel.textContent = "No, take me back!";
  } else {
    main.style.width = "50vw";
    main.style.justifyContent = "center";
    main2.style.width = "50vw";
    main2.style.justifyContent = "center";
    fsLabel.textContent = "Full Screen Me!";
  }
});
const modeSwitch = document.getElementById("modeswitch");
const msLabel = document.getElementById("modeswitchlabel");
modeSwitch.addEventListener("click", (event) => {
  if (modeSwitch.checked) {
    main.style.flexWrap = "wrap";
    main2.style.flexWrap = "wrap";
    msLabel.textContent = "Too much wrappage!";
  } else {
    main.style.flexWrap = "nowrap";
    main2.style.flexWrap = "nowrap";
    msLabel.textContent = "Wrap Me! ";
  }
});
const borderBtn = document.getElementById("borderbtn");
const bLabel = document.getElementById("borderbtnlabel");
borderBtn.addEventListener("click", (event) => {
  if (borderBtn.checked) {
    main.style.border = "1em solid #E0E1DD";
    main2.style.border = "1em solid #E0E1DD";
    bLabel.textContent = "No Borders!";
  } else {
    main.style.border = "none";
    main2.style.border = "none";
    bLabel.textContent = "Border Me!";
  }
});
