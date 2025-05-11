const mainBtn = document.getElementById("navigation-js");
const wrapper = document.querySelector(".wrapper");
let click = 0;

const transformArr1 = [
  "48px",
  "34px",
  "53px",
  "-4px",
  "28px",
  "-34px",
  "-11px",
  "-34px",
  "-37px",
  "-6px",
];

const transformArr2 = [
  "10px",
  "10px",
  "10px",
  "10px",
  "10px",
  "10px",
  "10px",
  "10px",
  "10px",
  "10px",
];

function animateMenu(arr, btnA1, btnA2) {
  mainBtn.children[0].style.right = arr[0];
  mainBtn.children[0].style.top = arr[1];
  mainBtn.children[1].style.right = arr[2];
  mainBtn.children[1].style.top = arr[3];
  mainBtn.children[2].style.right = arr[4];
  mainBtn.children[2].style.top = arr[5];
  mainBtn.children[3].style.right = arr[6];
  mainBtn.children[3].style.top = arr[7];
  mainBtn.children[4].style.right = arr[8];
  mainBtn.children[4].style.top = arr[9];

  mainBtn.style.right = btnA1;
  mainBtn.style.transform = btnA2;
}

function onHovers(el1, el2, el3, el4, el5) {
  wrapper.children[0].style.flex = el1;
  wrapper.children[1].style.flex = el2;
  wrapper.children[2].style.flex = el3;
  wrapper.children[3].style.flex = el4;
  wrapper.children[4].style.flex = el5;
}

mainBtn.addEventListener("click", (e) => {
  if (!click) {
    animateMenu(transformArr1, "40px", "rotate(23deg)");
    wrapper.classList.add("events");
    click += 1;
  } else {
    animateMenu(transformArr2, "20px", "rotate(0deg)");
    click = 0;
    wrapper.classList.remove("events");
    [...wrapper.children].forEach((item) => {
      item.style = "";
    });
  }
});

mainBtn.children[0].addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.currentTarget.nodeName !== "SPAN") {
    return;
  }
  onHovers("4", "1", "1", "1", "1");
});

mainBtn.children[1].addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.currentTarget.nodeName !== "SPAN") {
    return;
  }
  onHovers("1", "4", "1", "1", "1");
});

mainBtn.children[2].addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.currentTarget.nodeName !== "SPAN") {
    return;
  }
  onHovers("1", "1", "4", "1", "1");
});

mainBtn.children[3].addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.currentTarget.nodeName !== "SPAN") {
    return;
  }
  onHovers("1", "1", "1", "4", "1");
});

mainBtn.children[4].addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.currentTarget.nodeName !== "SPAN") {
    return;
  }
  onHovers("1", "1", "1", "1", "4");
});
