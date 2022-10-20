
it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({
      amount: "200000",
      years: "30",
      rate: "0.03"
    })).toEqual(843.21); // in calc (200000×(.03÷12))÷(1−(1+(.03÷12))^(−30×12))
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({
    amount: "1200",
    years: "1",
    rate: "0.1"
  })).toEqual(105.50); 
});

/// etc
