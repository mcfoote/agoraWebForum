const loginBtn = document.getElementById('loginSubmit');

const accountCreateBtn = document.getElementById('accountSubmit');

accountCreateBtn.addEventListener('click', registerAccount());

function registerAccount(){
    let userName = document.getElementById('inputUserName2');
    let userEmail = document.getElementById('inputEmail2');
    let userPass = document.getElementById('inputPassword2');

    fetch('http://localhost:3001/api/users', {
        method: 'POST',
        body: {
            user_name: userName,
            email: userEmail,
            password: userPass
        },
    });
};