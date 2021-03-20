const inputFarenheit = document.querySelector('#ex5__input-farenheit');

inputFarenheit.addEventListener('click', farenheitToCelsius);
inputFarenheit.addEventListener('keyup', farenheitToCelsius);

function farenheitToCelsius() {
  let celsius = 5 * ((inputFarenheit.value - 32) / 9);

  document.querySelector('#ex5__input-disabled-celsius').value = celsius;
}
