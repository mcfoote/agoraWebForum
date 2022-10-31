const loginBtn = document.getElementById('loginSubmit');
const accountCreateBtn = document.getElementById('accountSubmit');

loginBtn.addEventListener('click', login());
accountCreateBtn.addEventListener('click', registerAccount());

async function registerAccount(){
    const userName = document.getElementById('inputUserName2').value;
    const userEmail = document.getElementById('inputEmail2').value;
    const userPass = document.getElementById('inputPassword2').value;
    console.log(userName);
    console.log(userEmail);
    console.log(userPass);

    await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        //mode: 'cors',
        body: {
            user_name: userName,
            email: userEmail,
            password: userPass,
        },
    });
};

async function login(){
    const userName = document.getElementById('inputUserName2').value;
    const userPass = document.getElementById('inputPassword2').value;
    console.log(userName);
    console.log(userPass);

    await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        //mode: 'no-cors',
        body: {
            user_name: userName,
            password: userPass,
        },
    });
};