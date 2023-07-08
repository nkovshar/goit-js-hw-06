const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) { 
    evt.preventDefault();

    const { email, password } = evt.currentTarget.elements;

const data = {
    email: email.value,
    password : password.value,

}
    if (email.value === '' || password.value === '') { 
        return alert('Please, fill in all fields' )
    }
       console.log(data);
     formEl.reset();
}
