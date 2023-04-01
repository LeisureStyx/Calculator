const inputAndResult = document.getElementById("inputs");

inputAndResult.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const result = eval(inputAndResult.value);
    inputAndResult.textContent = result;
    inputAndResult.value = result;
    console.log(result);
  }
});

function clearInput() {
  inputAndResult.value = "";
}

function backspaceInput() {
  inputAndResult.value = inputAndResult.value.slice(0, -1);
}