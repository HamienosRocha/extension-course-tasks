const inputRadius = document.querySelector('#ex4__input-radius');

inputRadius.addEventListener('click', areaOfCircle);
inputRadius.addEventListener('keyup', areaOfCircle);

function areaOfCircle() {
  let area = Math.PI * inputRadius.value ** 2;

  document.querySelector('#ex4__input-disabled-area').value = area;
}
