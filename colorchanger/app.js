const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

// console.log(body);

buttons.forEach(function (x) {
  console.log(x);
  x.addEventListener("click", function (i) {
    console.log(i);
    console.log(i.target);
    if (i.target.id === "grey") {
      body.style.backgroundColor = i.target.id;
    }
    if (i.target.id === "white") {
      body.style.backgroundColor = i.target.id;
    }
    if (i.target.id === "yellow") {
      body.style.backgroundColor = i.target.id;
    }
    if (i.target.id === "blue") {
      body.style.backgroundColor = i.target.id;
    }
  });
});
