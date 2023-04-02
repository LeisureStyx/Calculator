import { inputAndResult, history, clearInput, backspaceInput, percentageInput, divideInput, multiplyInput, minusInput, plusInput, zeroInput,
  oneInput, twoInput, threeInput, fourInput, fiveInput, sixInput, sevenInput, eightInput, nineInput } from "./buttons.js";

document.getElementById("clear").addEventListener("click", clearInput);
document.getElementById("backspace").addEventListener("click", backspaceInput);
document.getElementById("percentage").addEventListener("click", percentageInput);
document.getElementById("divide").addEventListener("click", divideInput);
document.getElementById("multiply").addEventListener("click", multiplyInput);
document.getElementById("minus").addEventListener("click", minusInput);
document.getElementById("plus").addEventListener("click", plusInput);
document.getElementById("zero").addEventListener("click", zeroInput);
document.getElementById("one").addEventListener("click", oneInput);
document.getElementById("two").addEventListener("click", twoInput);
document.getElementById("three").addEventListener("click", threeInput);
document.getElementById("four").addEventListener("click", fourInput);
document.getElementById("five").addEventListener("click", fiveInput);
document.getElementById("six").addEventListener("click", sixInput);
document.getElementById("seven").addEventListener("click", sevenInput);
document.getElementById("eight").addEventListener("click", eightInput);
document.getElementById("nine").addEventListener("click", nineInput);

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