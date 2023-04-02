const inputAndResult = document.getElementById("inputs");
const history = document.querySelector("#history");
let historyList = [];


inputAndResult.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const input = inputAndResult.value;
    const result = eval(input);
    inputAndResult.textContent = result;
    inputAndResult.value = result;
    historyList.push(`${input} = ${result}`);
    history.textContent = historyList.join("\n");
    console.log(result);
  }
});

function clearInput() {
  inputAndResult.value = "";
}

function backspaceInput() {
  inputAndResult.value = inputAndResult.value.slice(0, -1);
}