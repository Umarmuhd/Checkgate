(async () => {
  const styles = document.createElement('style');
  styles.innerHTML = `
  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #080710;
  }

  .background {
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }

  .background .shape {
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
  }

  .shape:first-child {
    background: linear-gradient(#1845ad,
        #23a2f6);
    left: -80px;
    top: -80px;
  }

  .shape:last-child {
    background: linear-gradient(to right,
        #ff512f,
        #f09819);
    right: -30px;
    bottom: -80px;
  }

  form {
    height: 600px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 40px 32px;
  }

  form * {
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }

  form h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }


  .form__message--error {
    color: red;
    margin-top: 0.5rem;
    font-size: 0.85rem;
    text-align: center;
  }

  .welcome__text {
    text-align: center;
  }

  .bg__white {
    background: #fff;
    padding: 16px;
  }

  .bg__white .welcome__text,
  .bg__white .full_name {
    color: #000 !important;
  }

  label {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
  }

  input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
  }

  ::placeholder {
    color: #e5e5e5;
  }

  button {
    margin-top: 32px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
  }

  .form__text {
    text-align: center;
    margin-top: 8px;
  }

  .form__link {
    color: var(--color-secondary);
    text-decoration: none;
    cursor: pointer;
  }

  .form__link:hover {
    text-decoration: underline;
  }

  .form--hidden {
    display: none;
  }

  .checkout__message {
    color: #fff;
    margin-top: 0.5rem;
    font-size: 0.85rem;
    text-align: center;
  }

  .cart_box {
    margin-top: 30px;
    margin-bottom: 32px;
  }

  p.cart_summary--title,
  p.location_head--title {
    display: block;
    font-size: 1.125rem
      /* 18px */
    ;
    line-height: 1.75rem
      /* 28px */
    ;
    font-weight: 500;
  }

  ul.cart_list {
    list-style: none;
    margin-top: 24px;
  }

  li.cart_item.flex {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .cart_item h4,
  .cart_item .price {
    margin-bottom: .5rem;
  }

  .cart_item .cart_image_name {
    display: flex;
  }

  .cart_item--category,
  .cart_item .qty {
    font-size: 0.875rem
      /* 14px */
    ;
    line-height: 1.25rem
      /* 20px */
    ;
  }

  .cart_box .mt-5 {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .cart_box .total_price,
  .cart_box .total_amount {
    font-size: 0.875rem
      /* 14px */
    ;
    line-height: 1.25rem
      /* 20px */
    ;
  }

  .cart_box hr {
    border-top: 1px solid #fff;
  }


  .radiobtn {
    position: relative;
    display: block;
  }

  .radiobtn label {
    display: block;
    background-color: rgba(97, 154, 234, 0.16);
    color: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    border: 2px solid #9570C0;
    margin-bottom: 5px;
    cursor: pointer;
    margin-top: .5rem;
  }

  .radiobtn label:after,
  .radiobtn label:before {
    content: "";
    position: absolute;
    right: 11px;
    top: 11px;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    background: rgba(97, 154, 234, 0.16);
  }

  .radiobtn label:before {
    background: transparent;
    transition: 0.1s width cubic-bezier(0.075, 0.82, 0.165, 1) 0s, 0.3s height cubic-bezier(0.075, 0.82, 0.165, 2) 0.1s;
    z-index: 2;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 13px;
    background-position: center;
    width: 0;
    height: 0;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNS4zIDEzLjIiPiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjcuOGwtLjQtLjRhMS43IDEuNyAwIDAgMC0yLjMuMUw1LjIgOC4yIDMgNi40YTEuNyAxLjcgMCAwIDAtMi4zLjFMLjQgN2ExLjcgMS43IDAgMCAwIC4xIDIuM2wzLjggMy41YTEuNyAxLjcgMCAwIDAgMi40LS4xTDE1IDMuMWExLjcgMS43IDAgMCAwLS4yLTIuM3oiIGRhdGEtbmFtZT0iUGZhZCA0Ii8+PC9zdmc+);
  }

  .radiobtn input[type=radio] {
    display: none;
    position: absolute;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .radiobtn input[type=radio]:checked+label {
    background: rgba(97, 154, 234, 0.16);

    -webkit-animation-name: blink;
    animation-name: blink;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    border-color: #9570C0;
  }

  .radiobtn input[type=radio]:checked+label:after {
    background-color: rgba(97, 154, 234, 0.16);
    color: #fff;
  }

  .radiobtn input[type=radio]:checked+label:before {
    width: 20px;
    height: 20px;
  }


  /* The Modal (background) */
  .modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
  }

  /* Modal Content */
  .modal-content {
    margin: auto;
    padding: 20px;
    width: 80%;
  }`;
  document.body.appendChild(styles);

  const checkgateEl = document.getElementById('checkgate');

  // const amount = checkgateEl.attributes['amount'].value;
  // const wallet_address = checkgateEl.attributes['to'].value;

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.setAttribute('id', 'myModal');

  modal.innerHTML = ` 
  
  <form class="form" id="login" onsubmit={(e)=> e.preventDefault()}>
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
    console.log(e);
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
      return;
    }
  });

  console.log(user_data);

  const handleMakePurchase = async () => {
    const payload = {};

    try {
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

  window.checkgateCheckout = (values) => {
    modal.style.display = 'block';

    const { amount, products, to, url, shipment_info } = values;
    console.log(values);
  };
})();
