const loginButton = document.getElementById('login-button');
const usernam = document.getElementById('username').value;
const passwor = document.getElementById('password').value;

loginButton.addEventListener('click', () => {
  fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username: usernam, password: passwor }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
        if (response.status == "200") {
            window.open('dashbord.html')
        }
        else {
            console.log("access denied")
        }

    } )
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});