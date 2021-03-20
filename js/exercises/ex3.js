const inputCentimeter = document.querySelector('#ex3__input-centimeter');

inputCentimeter.addEventListener('click', centimeterToInch);
inputCentimeter.addEventListener('keyup', centimeterToInch);

function centimeterToInch() {
  let inch = inputCentimeter.value * 0.393700787;

  document.querySelector('#ex3__input-disabled-inch').value = inch;
}
