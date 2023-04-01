const inputAndResult = document.getElementById("inputs");

inputAndResult.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const result = eval(inputAndResult.value);
    inputAndResult.innerHTML = result;
    console.log(result);
  }
});