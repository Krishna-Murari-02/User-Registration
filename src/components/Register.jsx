import React, { useRef, useState } from "react";
import "./Register.css";

function Register() {
  const [userRegistration, setuserRegistration] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    state: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserRegistration({ ...userRegistration, [name]: value });
  };
  const [record, setrecord] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    alert("SignUp sucessfully");
    const newRecord = {
      ...userRegistration,
      id: new Date.getTime().toString(),
    };
    setrecord([...record, newRecord]);
  };
  return (
    <>
      <div className="container">
        <div className="main">
          <h2>Register </h2>
          <form className="input_box" onSubmit={submit}>
            <input
              className="input_field"
              onChange={handleInput}
              value={userRegistration.name}
              placeholder="Enter Your Name.."
              type="text"
              name="name"
              required
            />
            <input
              className="input_field"
              onChange={handleInput}
              value={userRegistration.email}
              placeholder="Enter Your Email.."
              type="email"
              name="email"
              required
            />
            <input
              className="input_field"
              onChange={handleInput}
              value={userRegistration.mobile}
              placeholder="Enter Your Mobile No.."
              type="phone"
              name="mobile"
            />
            <input
              className="input_field"
              onChange={handleInput}
              value={userRegistration.country}
              placeholder="Enter Your Country.."
              type="text"
              name="country"
            />
            <input
              className="input_field"
              onChange={handleInput}
              value={userRegistration.state}
              placeholder="Enter Your State.."
              type="text"
              name="state"
            />
            <input
              className="input_field"
              onChange={handleInput}
              value={userRegistration.message}
              placeholder="Enter Your Message.."
              type="text"
              name="message"
            />
            <button type="submit" className="submit_field">
              Registration
            </button>
          </form>
        </div>
      </div>
      <div className="allValue">
        {record.map((item) => {
          <h1>hh</h1>;
        })}
      </div>
    </>
  );
}

export default Register;
