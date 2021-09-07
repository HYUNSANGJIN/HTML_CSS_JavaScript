function forclear() {
  // C를 누르면 0으로 돌아가는 함수
  document.getElementById("output").innerHTML = "0";
}

function removeZero() {
  // 작업이 시작되기 전에 0을 제거해야함
  // 작업이 시작되기 전에 0이 있는 경우 0을 공백으로 대체함
  let value = document.getElementById("output").innerHTML;
  if (value == "0") {
    value = " ";
    document.getElementById("output").innerHTML = value;
  }
}

function perc() {
  // 출력 화면에서 값을 가져와 100으로 나눈 다음 다시 보내는 함수(나누기)
  removeZero();
  let value = document.getElementById("output").innerHTML;
  value = value / 100;
  document.getElementById("output").innerHTML = value;
}

function fordisplay(value) {
  // 아무 버튼이나 클릭하면 출력 화면의 값을 업데이트 하고,
  // '='버튼을 클릭하면 출력 화면에서 방정식을 품
  removeZero();
  document.getElementById("output").innerHTML += value;
}

function solve() {
  // '=' 버튼이 트리거되면 출력을 표시해야 한다.
  removeZero();
  let equation = document.getElementById("output").innerHTML;
  // 파라메터로 전달된 방정식을 평가/실행 하는 함수 eval(equation)
  let solved = eval(equation);
  document.getElementById("output").innerHTML = solved;
}
