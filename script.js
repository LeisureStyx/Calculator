import { inputAndResult, history, buttons, historyList, clearInput, backspaceInput, percentageInput, divideInput, multiplyInput, minusInput, plusInput, resultInput, zeroInput,
  oneInput, twoInput, threeInput, fourInput, fiveInput, sixInput, sevenInput, eightInput, nineInput } from "./buttons.js";

buttons.forEach(button => {
  document.getElementById(button).addEventListener("click", () => {
    switch(button) {
      case "clear":
        clearInput();
        break;
      case "backspace":
        backspaceInput();
        break;
      case "percentage":
        percentageInput();
        break;
      case "divide":
        divideInput();
        break;
      case "multiply":
        multiplyInput();
        break;
      case "minus":
        minusInput();
        break;
      case "plus":
        plusInput();
        break;
      case "zero":
        zeroInput();
        break;
      case "one":
        oneInput();
        break;
      case "two":
        twoInput();
        break;
      case "three":
        threeInput();
        break;
      case "four":
        fourInput();
        break;
      case "five":
        fiveInput();
        break;
      case "six":
        sixInput();
        break;
      case "seven":
        sevenInput();
        break;
      case "eight":
        eightInput();
        break;
      case "nine":
        nineInput();
        break;
      case "result":
        resultInput();
        break;
    }
  });
});

inputAndResult.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const input = inputAndResult.value;
    const result = math.evaluate(input);
    inputAndResult.textContent = result;
    inputAndResult.value = result;
    historyList.push(`${input} = ${result}`);
    history.textContent = historyList.join("\n");
    console.log(result);
  }
});