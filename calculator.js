window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = "0";
  document.getElementById("loan-years").value = "60";
  document.getElementById("loan-rate").value = "0";
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let loan = getCurrentUIValues();
  let payment = calculateMonthlyPayment(loan);
  updateMonthly(payment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let payment = (parseFloat(values.amount) * parseFloat(values.rate)/12) / (1 - (1 + parseFloat(values.rate)/12) ** (-parseFloat(values.years)*12));
  return Math.round(payment * 100) / 100;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
}
