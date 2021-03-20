const inputNotes = document.querySelector('#ex6__input-notes');

inputNotes.addEventListener('keyup', arithmeticMean);

function arithmeticMean() {
  const inputMean = document.querySelector('#ex6__input-mean');
  let notes = inputNotes.value.split(';');
  let sum = 0,
    mean = 0;

  notes.forEach(note => {
    sum += parseFloat(note);
  });
  mean = sum / notes.length;

  if (isNaN(mean)) {
    inputMean.value = '';
  } else {
    inputMean.value = mean;
  }
}
