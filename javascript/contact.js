const boton = document.querySelector('#formulario');
boton.addEventListener('submit', aplicar);
function aplicar(e) {
  e.preventDefault();
  captureData();
  const valor = document.querySelector('#name').value;
  if (valor === "") {
    Swal.fire({
      title: 'Mistake',
      text: 'Field is required',
      icon: 'error',
      confirmButtonText: 'Confirm'
    })
  } else {
    Swal.fire({
      title: `${valor}`,
      text: 'Thank you for contacting us, we will be in touch shortly.',
      icon: 'success',
      confirmButtonText: 'Confirm'
    })
    boton.reset();
  }
}
let dataCapture = []
function captureData() {
  let name = document.getElementById('name')
  let email = document.getElementById('email')
  let message = document.getElementById('message')
  let dataCapture = {
    [name.name]: name.value,
    [email.name]: email.value,
    [message.name]: message.value
  }
  console.log(dataCapture);
}
