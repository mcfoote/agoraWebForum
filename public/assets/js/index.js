const loginBtn = document.getElementById('loginSubmit');

const accountCreateBtn = document.getElementById('accountSubmit');

loginBtn.addEventListener('click', login());

accountCreateBtn.addEventListener('click', registerAccount());

function registerAccount(){
    const userName = document.getElementById('inputUserName2').value;
    const userEmail = document.getElementById('inputEmail2').value;
    const userPass = document.getElementById('inputPassword2').value;
    console.log(userName);
    console.log(userEmail);
    console.log(userPass);

    fetch('http://localhost:3001/api/users', {
        method: 'POST',
        mode: 'no-cors',
        body: {
            user_name: userName,
            email: userEmail,
            password: userPass,
        },
    });
};

function login(){
    const userName = document.getElementById('inputUserName2').value;
    const userPass = document.getElementById('inputPassword2').value;
    console.log(userName);
    console.log(userPass);

    fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        mode: 'no-cors',
        body: {
            user_name: userName,
            password: userPass,
        },
    });
};