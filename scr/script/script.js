const calculator = document.querySelector(".calc-container");
const keys = document.querySelector(".calc-keys");
const display = document.querySelector(".output");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    if (action === "decimal") {
      display.textContent = displayedNum + ".";
    }

    if (action === "clear") {
      console.log("clear key!");
    }

    if (action === "calculate") {
      const secondValue = displayedNum;
      const operator = calculator.dataset.operator;
      const firstVlaue = calculator.dataset.firstValue;
      const calculate = (n1, operator, n2) => {
        let result = "";
        if (operator === "add") {
          result = parseFloat(n1) + parseFloat(n2);
        } else if (operator === "subtract") {
          result = parseFloat(n1) - parseFloat(n2);
        } else if (operator === "multiply") {
          result = parseFloat(n1) * parseFloat(n2);
        } else if (operator === "divide") {
          result = parseFloat(n1) / parseFloat(n2);
        }

        return result;
      };

      display.textContent = calculate(firstVlaue, operator, secondValue);
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
