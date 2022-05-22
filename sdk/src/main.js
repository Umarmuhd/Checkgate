// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

const checkgateEl = document.getElementById('checkgate');

const amount = checkgateEl.attributes['amount'].value;
const wallet_address = checkgateEl.attributes['to'].value;

let jwt;

document.addEventListener('DOMContentLoaded', async () => {
  const loginForm = document.querySelector('#login');
  const checkgateCard = document.querySelector('#checkgateCard');

  const loginEmail = document.getElementById('loginEmail');
  const loginPassword = document.getElementById('loginPassword');

  let user_data;

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
      email: loginEmail.value,
      password: loginPassword.value,
    };

    try {
      const response = await fetch('http://localhost:4000/api/auth', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(payload), // body data type must match "Content-Type" header
        credentials: 'include',
        mode: 'cors', // no-cors, *cors, same-origin
      });

      const data = await response.json();

      console.log(data);

      jwt = data.jwt;

      const resp = await fetch('http://localhost:4000/api/users', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data.jwt,
        },
        credentials: 'include',
        mode: 'cors', // no-cors, *cors, same-origin
      });

      const respo = await resp.json();

      user_data = respo;

      // loginForm.style.display = 'none';
      // checkgateCard.style.display = 'block';
    } catch (err) {
      console.error(err.message);
    }
  });

  console.log(user_data);

  const handleMakePurchase = () => {
    const payload = {};

    try {
      console.log(payload);
      const response =  await fetch("",{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        credentials: 'include', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + "",
        },
        body: JSON.stringify(payload) // body data type must match "Content-Type" header
      })
    } catch (err) {
      console.error(err);
    }
  };
});
