function donate(amount) {
  const hostedButtonId = 'TU_ID_DE_PAYPAL_AQUI'; // Reemplazar con el real
  const url = `https://www.paypal.com/donate/?hosted_button_id=${hostedButtonId}&amount=${amount}`;
  window.open(url, '_blank');
}
