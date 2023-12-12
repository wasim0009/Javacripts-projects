const endDate = "Sat Sep 26 2023 11:45";

document.getElementById("endDate").innerHTML = endDate;

// querySelectorAll se pura input me used kr sakte hai
const inputs = document.querySelectorAll("input");
const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  //input me value dalne ke liye value function used kiya
  if (diff < 0) return;
  //days me convert kiya
  inputs[0].value = Math.floor(diff / 3600 / 24);

  //hours me convert kiya
  inputs[1].value = Math.floor(diff / 3600) % 24;
  //Minute me convert kiya
  inputs[2].value = Math.floor(diff / 60) % 60;
  //second me convert kiya
  inputs[3].value = Math.floor(diff) % 60;
};

setInterval(() => {
  clock();
}, 1000);
