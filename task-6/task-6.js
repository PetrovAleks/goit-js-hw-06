const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('input', e => {
  if (e.target.value.length === Number(inputRef.getAttribute('data-length'))) {
    inputRef.classList.replace('invalid', 'valid');
  }
  inputRef.classList.add('invalid');
});
console.log(inputRef);
