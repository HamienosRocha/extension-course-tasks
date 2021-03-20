const btnVerify = document.querySelector('#ex8__btn-verify');

btnVerify.addEventListener('click', priceGasAlc);

function priceGasAlc() {
  const modal = document.querySelector('#modalID');
  const title = document.querySelector('#modal__title');
  const message = document.querySelector('#modal__message');

  modal.classList.add('modal--show');
  title.innerText = `Com qual é mais vantagoso abastecer?`;

  let priceGas = document.querySelector('#ex8__input-gas').value;
  let priceAlc = document.querySelector('#ex8__input-alc').value;

  if (
    (priceGas == '' && priceAlc == '') ||
    (priceGas == null && priceAlc == null)
  ) {
    message.innerText = `Nenhum valor informado.`;
  } else {
    if (priceAlc <= priceGas * 0.7) {
      message.innerText = `É mais vantagoso abastecer com álcool.`;
    } else {
      message.innerText = `É mais vantagoso abastecer com gasolina.`;
    }
  }

  modal.addEventListener('click', e => {
    if (e.target.id == 'modalID' || e.target.className == 'modal__btn-close') {
      modal.classList.remove('modal--show');
    }
  });
}
