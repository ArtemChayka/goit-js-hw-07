const form = document.querySelector('form.login-form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const email = (event.target.elements.email.value).trim()
    const password = (event.target.elements.password.value).trim()
    if (email == '' || password == '') {
        alert('All form fields must be filled in')
        return
    }
    const objInfo = {}
    objInfo.email = email
    objInfo.password = password
    // console.log(email);
    // console.log(password);
    console.log(objInfo);
    form.reset()
})


