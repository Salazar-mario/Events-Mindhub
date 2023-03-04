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