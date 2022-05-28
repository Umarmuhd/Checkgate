window.onload = function () {
  const params = new URLSearchParams(window.location.search);

  let checkout = new RapydCheckoutToolkit({
    pay_button_text: 'Deposit',
    pay_button_color: 'blue',
    id: params.get('checkout_id'),
    close_on_complete: true,
    page_type: 'collection',
  });

  checkout.displayCheckout();
};

window.addEventListener('onCheckoutPaymentSuccess', function (event) {
  console.log(event.detail);
});
window.addEventListener('onCheckoutFailure', function (event) {
  console.log(event.detail.error);
});
window.addEventListener('onCheckoutPaymentFailure', (event) => {
  console.log(event.detail.error);
});
