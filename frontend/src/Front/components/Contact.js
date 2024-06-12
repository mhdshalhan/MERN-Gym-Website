import React, { useState } from "react";
import Button from "../layouts/Button";
import img from "../../assets/img/contactImg.jpg";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form inputs
    if (
      userName.trim() === "" ||
      userEmail.trim() === "" ||
      userNumber.trim() === ""
    ) {
      alert("Please fill in all fields.");
    } else {
      // Send form data or perform any other actions here
      setIsSubmitted(true);
      alert("Your Details has been submitted!");
      // Reset form fields
      setUserName("");
      setUserEmail("");
      setUserNumber("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-10 text-white bg-black md:px-32">
      <div className="flex flex-col justify-between w-full md:flex-row">
        <form
          onSubmit={handleSubmit}
          className="w-full pt-20 space-y-5 md:w-2/5"
        >
          <h1 className="text-5xl font-semibold text-center">Contact Us</h1>
          <div className="flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className="py-3 px-2 text-black rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className="py-3 px-2 text-black rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber">Your Number</label>
            <input
              className="py-3 px-2 text-black rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your number"
              value={userNumber}
              onChange={(e) => setUserNumber(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-row justify-center">
            <Button title="Send Message" />
          </div>
        </form>

        <div className="flex flex-row items-center w-full my-5 md:w-2/4">
          <img className="rounded-md" src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
