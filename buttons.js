export const inputAndResult = document.getElementById("inputs");
export const history = document.querySelector("#history");
export const buttons = ["clear", "backspace", "percentage", "divide", "multiply", "minus", "plus", "result", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
export let historyList = [];

export function clearInput() {
  inputAndResult.value = "";
}

export function backspaceInput() {
  inputAndResult.value = inputAndResult.value.slice(0, -1);
}

export function percentageInput() {
  if (!inputAndResult.value.includes("%")) {
    inputAndResult.value += "%";
  }
}

export function divideInput() {
  if (!inputAndResult.value.includes("/")) {
    inputAndResult.value += "/";
  }
}
export function sevenInput() {
  inputAndResult.value += 7;
}

export function eightInput() {
  inputAndResult.value += 8;
}

export function nineInput() {
  inputAndResult.value += 9;
}

export function multiplyInput() {
  if (!inputAndResult.value.includes("*")) {
    inputAndResult.value += "*";
  }
}

export function fourInput() {
  inputAndResult.value += 4;
}

export function fiveInput() {
  inputAndResult.value += 5;
}

export function sixInput() {
  inputAndResult.value += 6;
}

export function minusInput() {
  if (!inputAndResult.value.includes("-")) {
    inputAndResult.value += "-";
  }
}

export function oneInput() {
  inputAndResult.value += 1;
}

export function twoInput() {
  inputAndResult.value += 2;
}

export function threeInput() {
  inputAndResult.value += 3;
}

export function plusInput() {
  if (!inputAndResult.value.includes("+")) {
    inputAndResult.value += "+";
  }
}

export function zeroInput() {
  inputAndResult.value += 0;
}

export function resultInput() {
  const input = inputAndResult.value;
  const result = math.evaluate(input);
  inputAndResult.textContent = result;
  inputAndResult.value = result;
  historyList.push(`${input} = ${result}`);
  history.textContent = historyList.join("\n");
  console.log(result);
}