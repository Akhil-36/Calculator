const inputValue = document.getElementById("user-input");

function display(value) {
    if (inputValue.value === "0") {
        inputValue.value = value;
    } else {
        inputValue.value += value;
    }
}

function calculate() {
    inputValue.value = eval(inputValue.value);
}

function clearInput() {
    inputValue.value = "0";
}   