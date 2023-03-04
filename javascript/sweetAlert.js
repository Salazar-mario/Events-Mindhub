async function getEmail() {
    const {value: email} = await swal({
        title: 'Input email address',
        input: 'email',
        inputPlaceholder: 'Enter your email address'
    })
  
    if (email) {
        swal('Entered email: ' + email)
    }
}