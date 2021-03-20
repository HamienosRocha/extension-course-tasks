const inputCelsius = document.querySelector('#ex7__input-celsius');

inputCelsius.addEventListener('click', farenheitToCelsius);
inputCelsius.addEventListener('keyup', farenheitToCelsius);

function farenheitToCelsius() {
  let farenheit = inputCelsius.value * 1.8 + 32;

  document.querySelector('#ex7__input-disabled-farenheit').value = farenheit;
}
