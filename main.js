//todo quray select

const hex = [1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];


const recipes = [
  "dal",
  "chanamasala",
  "Apple",
  "Misal Pav",
  "palak panner",
  "pavbhaji",
  "Sandwich",
  "Kothimbir Vadi",
  "Batata Vada",
  "Puran Poli",
];
const btn = document.querySelector("#btn");
const chnage = document.querySelector("#chnage");
const nonvegreipe = [
  "chicken",
  "mutton",
  "eggs",
  "Fish",
  "Chiken Biryani",
  "Egg Biryani",
];
const allrecipes = recipes.concat(nonvegreipe);


//* to get random recipe

btn.addEventListener("click", () => {
  if (document.getElementById("non").checked) {
    var index = Math.floor(Math.random() * nonvegreipe.length);

    var val = nonvegreipe[index];

    nonvegreipe.splice(index, 1);
    chnage.textContent = val;
    if (nonvegreipe.length == "") {
      window.location.reload();
    }
  } else if (!allrecipes.length) {
    window.location.reload();
  } else {
    var veg = Math.floor(Math.random() * allrecipes.length);

    var newval = allrecipes[veg];

    allrecipes.splice(veg, 1);

    chnage.textContent = newval;
  }


  //* For change background color 


  var bg = "#";
  for (let i = 0; i < 6; i++) {
    bg += hex[GetRandomColors()]
  }
  document.body.style.backgroundColor = bg;

  function GetRandomColors() {
    return Math.floor(Math.random() * hex.length);
  }
});