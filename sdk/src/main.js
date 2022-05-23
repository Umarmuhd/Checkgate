const checkgateEl = document.getElementById('checkgate');

document.addEventListener('DOMContentLoaded', async () => {
  const amount = checkgateEl.attributes['amount'].value;
  const wallet_address = checkgateEl.attributes['to'].value;

  const btn = document.createElement('button');

  btn.setAttribute('id', 'myBtn');
  btn.textContent = 'Open Modal';

  checkgateEl.appendChild(btn);

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = 'block';
  };

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.setAttribute('id', 'myModal');

  modal.innerHTML = ` <form class="form" id="login">
  <h3>Login Here</h3>

  <div class="form__message form__message--error"></div>

  <label for="loginEmail">Email address</label>
  <input type="text" placeholder="Email" id="loginEmail" class="form__input" autocomplete="off">

  <label for="loginPassword">Password</label>
  <input type="password" placeholder="Password" id="loginPassword" class="form__input" autocomplete="off">

  <button>Login</button>

  <p class="form__text">
    <a class="form__link" href="./" id="linkRegister">Don't have an account? Register</a>
  </p>

</form>

<form class="form form--hidden" id="checkgateCard">
<h3>Checkgate</h3>

<div class="form__message checkout__message">
  You’re about to checkout from smileys.africa</div>

<div class="cart_box">
  <p class="cart_summary--title">Cart Summary <span class="cart_qty">(3)</span></p>

  <ul class="cart_list">
    <li class="flex cart_item">
      <div class="cart_image_name">
        <img src="" alt="">
        <div class="">
          <h4>Brown Men Shirt</h4>
          <span class="cart_item--category">Clothings</span>
        </div>
      </div>
      <div class="price_qty">
        <p class="price">$ 500.00</p>
        <p class="qty">X 3</p>
      </div>
    </li>
  </ul>

  <hr>

  <div class="mt-5 flex">
    <span class="total_price">Total amount:</span>
    <span class="total_amount">$ 1500.00</span>
  </div>
</div>

<div class="location_box">
  <p class="location_head--title">Delivery Location</p>

  <div class="radiobtn">
    <input type="radio" id="huey" name="drone" value="huey" checked />
    <label for="huey">Pri. School Street.</label>
  </div>

  <div class="radiobtn">
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey">Current Location</label>
  </div>

</div>

<button>Finalize</button>

</form>
`;

  checkgateEl.appendChild(modal);

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

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

      const resp = await fetch('http://localhost:4000/api/users', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data.jwt,
        },
        credentials: 'include',
        mode: 'cors', // no-cors, *cors, same-origin
      });

      const user_respo = await resp.json();

      console.log('user: ', user_respo);

      loginForm.style.display = 'none';
      checkgateCard.style.display = 'block';
    } catch (err) {
      console.error(err.message);
    }
  });

  console.log(user_data);

  const handleMakePurchase = async () => {
    const payload = {};

    try {
      console.log(payload);
      const response = await fetch('', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        credentials: 'include', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + '',
        },
        body: JSON.stringify(payload), // body data type must match "Content-Type" header
      });
    } catch (err) {
      console.error(err);
    }
  };

  window.checkgateCheckout = () => {
    console.log('here');
  };
  checkgateCheckout();
});
