function calcSum() {
    let x = document.getElementById('number1');
    let y = document.getElementById('number2');
    let result = (+x.value + +y.value);
    results.innerHTML = x.value + " + " + y.value + " = " + result;
}

function calcSubstraction() {
    let x = document.getElementById('number1');
    let y = document.getElementById('number2');
    let result = (x.value - y.value);
    results.innerHTML = x.value + " - " + y.value + " = " + result;
}

function calcDevision() {
    let x = document.getElementById('number1');
    let y = document.getElementById('number2');

    if (y.value == 0) {
        results.innerHTML = "На ноль делить нельзя";
    } else {
        let result = (x.value / y.value);
        results.innerHTML = x.value + " / " + y.value + " = " + result;
    }
}

function calcMultiply() {
    let x = document.getElementById('number1');
    let y = document.getElementById('number2');
    let result = (x.value * y.value);
    results.innerHTML = x.value + " * " + y.value + " = " + result;
}

function clearInput() {
    document.getElementById('number1').value = null;
    document.getElementById('number2').value = null;
    results.innerHTML = null;
}

function colorChange() {
    switch (document.getElementById("bgrColor").value)
    {
        case "Blank" : document.getElementById("bodyColor").style.backgroundColor = 'rgb(213, 156, 165)'; break;
        case "Dark" : document.getElementById("bodyColor").style.backgroundColor = 'darkslateblue'; break;
        case "Light" : document.getElementById("bodyColor").style.backgroundColor = 'mistyrose'; break;
    }
}

// function colorChange() {
//     if (document.getElementById("bgrColor").value == "Dark") 
//     document.getElementById("bodyColor").style.backgroundColor = "yellow";

//     if (document.getElementById("bgrColor").value == "Light")
//     document.getElementById("bodyColor").style.backgroundColor = "green";
// }