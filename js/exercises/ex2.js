const inputMeter = document.querySelector('#ex2__input-meter');

inputMeter.addEventListener('click', meterToCentimeter);
inputMeter.addEventListener('keyup', meterToCentimeter);

function meterToCentimeter() {
  let centimeter = inputMeter.value * 100;

  document.querySelector('#ex2__input-disabled-centimeter').value = centimeter;
}
