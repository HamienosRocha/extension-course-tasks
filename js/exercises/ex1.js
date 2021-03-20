document.querySelector('#ex1__btn-ok').addEventListener('click', () => {
  const modal = document.querySelector('#modalID');
  const title = document.querySelector('#modal__title');
  const message = document.querySelector('#modal__message');

  let informedNumber = document.querySelector('#ex1__input').value;

  modal.classList.add('modal--show');
  title.innerText = `Número informado`;

  if (informedNumber == '' || informedNumber == null) {
    message.innerText = 'Nenhum número informado.';
  } else {
    message.innerText = `${informedNumber}`;
  }

  modal.addEventListener('click', e => {
    if (e.target.id == 'modalID' || e.target.className == 'modal__btn-close') {
      modal.classList.remove('modal--show');
    }
  });
});
