//when "add to order" button pushed
//add item to order, calculate subtotal, tax, total
var subtotal = 0;
var tax = 0;
var total = 0;
var burgerQ = 0;
var pizzaQ = 0;
var icQ = 0;
var ribQ = 0;
var burgerP = 0;
var pizzaP = 0;
var icP = 0;
var ribP = 0;
function taxCalc (subtotal) {
  return (subtotal * .08);
}
function totalCalc (tax) {
  return (subtotal + tax);
}
function quantity(name, price) {
  if (name === "burger") {
    $('#burger-qty').text('');
    $('#burger-prc').text('');
    burgerQ += 1;
    burgerP += parseFloat(price);
    $('#burger-qty').text(burgerQ);
    $('#burger-prc').text(burgerP.toFixed(2));
  } else if (name === "pizza") {
    $('#pizza-qty').text('');
    $('#pizza-prc').text('');
    pizzaQ += 1;
    pizzaP += parseFloat(price);
    $('#pizza-qty').text(pizzaQ);
    $('#pizza-prc').text(pizzaP.toFixed(2));
  } else if (name === "ice-cream") {
    $('#ic-qty').text('');
    $('#ic-prc').text('');
    icQ += 1;
    icP += parseFloat(price);
    $('#ic-qty').text(icQ);
    $('#ic-prc').text(icP.toFixed(2));
  } else {
    $('#rib-qty').text('');
    $('#rib-prc').text('');
    ribQ += 1;
    ribP += parseFloat(price);
    $('#rib-qty').text(ribQ);
    $('#rib-prc').text(ribP.toFixed(2));
  }
}

$('.order-button').on('click', function() {
  //add button's value attritube to subtotal, tax, total
  $('#subtotal').text('');
  $('#tax').text('');
  $('#total').text('');
  subtotal += parseFloat(this.value);
  $('#subtotal').append(subtotal.toFixed(2));
  tax = taxCalc(parseFloat(subtotal));
  $('#tax').append(tax.toFixed(2));
  total = totalCalc(parseFloat(tax));
  $('#total').append(total.toFixed(2  ));
  quantity(this.id, this.value);
});


$('#submit').on('click', function(event) {
  if (total === 0) {
    Materialize.toast('Error. Please fill out all fields.', 5000);
    event.preventDefault();
  } else if ( $('.form-name')[0].checkValidity() === false ) {

    Materialize.toast('Error. Please enter name.', 5000);
    event.preventDefault();
  } else if ( $('.form-tel')[0].checkValidity() === false ) {
    Materialize.toast('Error. Please enter phone number.', 5000);
    event.preventDefault();
  } else if ($('.form-ady')[0].checkValidity() === false ) {
    Materialize.toast('Error. Please enter address', 5000);
    event.preventDefault();
  }
  else {
    Materialize.toast('Success. Order Placed.', 10000);
  }
});
