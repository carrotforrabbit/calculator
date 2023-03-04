const calculator = document.querySelector(".calc-container");
const keys = document.querySelector(".calc-keys");
const display = document.querySelector(".output");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;

    if (!action) {
      console.log("number key!");
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key!");
    }

    if (action === "decimal") {
      console.log("decimal key!");
    }

    if (action === "clear") {
      console.log("clear key!");
    }

    if (action === "calculate") {
      console.log("equal key!");
    }
  }
});

// let x = document.getElementById('number1');
// let y = document.getElementById('number2');

// function calcSum() {
//     let result = (+x.value + +y.value);
//     results.innerHTML = x.value + " + " + y.value + " = " + result;
// }

// function calcSubstraction() {
//     let result = (x.value - y.value);
//     results.innerHTML = x.value + " - " + y.value + " = " + result;
// }

// function calcDevision() {
//     if (y.value == 0) {
//         results.innerHTML = "На ноль делить нельзя";
//     } else {
//         let result = (x.value / y.value);
//         results.innerHTML = x.value + " / " + y.value + " = " + result;
//     }
// }

// function calcMultiply() {
//     let result = (x.value * y.value);
//     results.innerHTML = x.value + " * " + y.value + " = " + result;
// }

// function clearInput() {
//     document.getElementById('number1').value = null;
//     document.getElementById('number2').value = null;
//     results.innerHTML = null;
// }

function colorChange() {
  switch (document.getElementById("bgrColor").value) {
    case "Blank":
      document.getElementById("bodyColor").style.backgroundColor =
        "rgb(213, 156, 165)";
      break;
    case "Dark":
      document.getElementById("bodyColor").style.backgroundColor =
        "darkslateblue";
      break;
    case "Light":
      document.getElementById("bodyColor").style.backgroundColor = "mistyrose";
      break;
  }
}

// function colorChange() {
//     if (document.getElementById("bgrColor").value == "Dark")
//     document.getElementById("bodyColor").style.backgroundColor = "yellow";

//     if (document.getElementById("bgrColor").value == "Light")
//     document.getElementById("bodyColor").style.backgroundColor = "green";
// }
