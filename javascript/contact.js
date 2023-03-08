const boton = document.querySelector('#formulario');
boton.addEventListener('submit', aplicar);

function aplicar(e){
  e.preventDefault();
  const valor = document.querySelector('#name').value;

  if (valor === ""){
    Swal.fire({
      title: 'Mistake',
      text: 'Field is required',
      icon: 'error',
      confirmButtonText: 'Confirm'
    })
}else{
  Swal.fire({
    title: `${valor}`,
    text: 'Thank you for contacting us, we will be in touch shortly.',
    icon: 'success',
    confirmButtonText: 'Confirm'
  })
}
}

function alertWindow (form) {
	return `
  <label for="name">${form.name}<span>*</span></label>
  <input name="name" type="text" id="name" placeholder="name">
  <label for="email">${form.email}<span>*</span></label>
  <input name="email" type="text" id="email" placeholder="email">
  <label for="message">${form.message}</label>
  <textarea id="message" name="message" id="inputEmail" cols="30" rows="10"></textarea>
  <button type="submit">Send message</button>
		`
}