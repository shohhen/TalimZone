import React, { useState } from "react";
import MainPage from "../main-page/MainPage";
import './register.scss'

const Register = () => {
  const [status, setStatus] = useState("Send");
  const [formData, setFormData] = useState({
    "entry.1786450440": "",
    "entry.361551795": "",
    "entry.1223164623": "",
    "entry.1041557467": "",
    "entry.233674365": "",
  });

  const handleChange = (input, option) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
      [option]: value,
    }));
    console.log([option]);
    setStatus("Send");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending");

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfzwasI-HctuKmYw3y8yLYmIGJVR4U9LKAlF09xXnhfED8ZOQ/formResponse";

    const formDataEntries = Object.entries(formData)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formDataEntries,
    };

    try {
      const res = await fetch(googleFormUrl, requestOptions);
      if (res.ok) {
        setStatus("Sent");
        setFormData({
          "entry.1786450440": "",
          "entry.361551795": "",
          "entry.1223164623": "",
          "entry.1041557467": "",
          "entry.233674365": "",
        });
        window.location.href = "/";
      } else {
        setStatus("Error");
      }
    } catch (error) {
      setStatus("Error");
    }
  };

  const onClose = () => {
    window.location.href = "/";
  }

  return (
    <>
      <div className="contact main-wrapper" id="contact">
        <div className="contact__block main-component">
          <p className="close-btn" onClick={onClose}>
            X
          </p>
          <h2>Register To The Course</h2>
          <form
            onSubmit={handleSubmit}
            target="_self"
            className="contact__block-form"
          >
            <input
              name="entry.1786450440"
              value={formData["entry.1786450440"]}
              onChange={handleChange("entry.1786450440")}
              required
              autoComplete={"off"}
              type="text"
              placeholder="Your Full Name"
            />
            <input
              name="entry.361551795"
              value={formData["entry.361551795"]}
              onChange={handleChange("entry.361551795")}
              required
              autoComplete={"off"}
              type="email"
              placeholder="Your Email"
            />
            <input
              type="text"
              placeholder="Your Telegram Username (if applicable)"
              name="entry.1223164623"
              value={formData["entry.1223164623"]}
              onChange={handleChange("entry.1223164623")}
              required
              autoComplete={"off"}
            />
            <input
              type="tel"
              placeholder="your phone number"
              name="entry.1041557467"
              value={formData["entry.1041557467"]}
              onChange={handleChange("entry.1041557467")}
              required
              autoComplete={"off"}
            />
            <select
              onChange={handleChange("entry.233674365")}
              name="entry.233674365"
              id=""
              placeholder="choose the course"
            >
              <option value=" ">Choose the course</option>
              <option value="Admissions course (Standard plan)">
                Admissions course (Standard plan)
              </option>
              <option value="Admissions course (Basic plan)">
                Admissions course (Basic plan)
              </option>
              <option value="Admissions course (Full support)">
                Admissions course (Full support)
              </option>
              <option value="Bootcamp (UofT & UBC)">
                Bootcamp (UofT & UBC)
              </option>
              <option value="Duolingo English Test course">
                Duolingo English Test course
              </option>
              <option value="Canadian Visa Application">
                Canadian Visa Application
              </option>
            </select>
            <button className="contact__block-form-submit" type="submit">
              {status}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
