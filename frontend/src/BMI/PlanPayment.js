import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlanPayment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidCardNumber(cardNumber)) {
      alert("Please enter a valid credit card number.");
      return;
    }

    if (!isValidExpiryDate(expiryDate)) {
      alert("Please enter a valid expiry date in MM/YY format.");
      return;
    }

    if (!isValidCvv(cvv)) {
      alert("Please enter a valid CVV.");
      return;
    }

    alert("Your Details has been submitted!");
    navigate("/BmiCal");
  };

  const isValidCardNumber = (number) => {
    const sanitizedNumber = number.replace(/\s/g, "");
    let sum = 0;
    let doubleUp = false;

    for (let i = sanitizedNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitizedNumber.charAt(i), 10);
      if (doubleUp) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      doubleUp = !doubleUp;
    }

    return sum % 10 === 0;
  };

  const isValidExpiryDate = (date) => {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    return regex.test(date);
  };

  const isValidCvv = (cvv) => {
    const regex = /^[0-9]{3}$/;
    return regex.test(cvv);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  return (
    <div className="mt-4 mb-4 row wrapper">
      <div className="col-10 col-lg-5">
        <form onSubmit={handleSubmit} className="shadow-lg">
          <h1 className="mb-4">Card Info</h1>
          <div className="form-group">
            <label htmlFor="card_num_field">Card Number</label>
            <input
              type="text"
              id="card_num_field"
              className="form-control"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="Enter the Card number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="card_exp_field">Card Expiry</label>
            <input
              type="text"
              id="card_exp_field"
              className="form-control"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              placeholder="MM/YY"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="card_cvc_field">Card CVC</label>
            <input
              type="text"
              id="card_cvc_field"
              className="form-control"
              value={cvv}
              onChange={handleCvvChange}
              required
              placeholder="CVC Number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              placeholder="Enter the name"
            />
          </div>

          <button
            type="submit"
            id="shipping_btn"
            className="py-3 btn btn-block"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlanPayment;
