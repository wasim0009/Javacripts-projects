const form = document.querySelector("form");

form.addEventListener("submit", function (i) {
  i.preventDefault(); //form me input aata hai woh direct chalaja tha browser ke paas usko rokne ke liye  " prevent defaulT use krna padta hai"
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height < 0 || height === "" || isNaN(height)) {
    results.innerHTML = `Please give valid height ${height}`;
  } else if (weight < 0 || weight === "" || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`    
  }
});
