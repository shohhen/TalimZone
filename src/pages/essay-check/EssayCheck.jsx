import React, { useState } from "react";
import MainPage from "../main-page/MainPage";
import './essay_check.scss'

const EssayCheck = () => {
  const [status, setStatus] = useState("Send");
  const [formData, setFormData] = useState({
    "entry.1195714290": "",
    "entry.1102514207": "",
    "entry.809462150": "",
    "entry.1424589896": "",
    "entry.1163459930": "",
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
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfqjCq1sElVV7KlcO9PvDMLCN064SG-xO3wEUJM_veGpDDoLw/formResponse";

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
          "entry.1195714290": "",
          "entry.1102514207": "",
          "entry.809462150": "",
          "entry.1424589896": "",
          "entry.1163459930": "",
        });
        window.location.href = "/";
      } else {
        setStatus("Error");
      }
    } catch (error) {
      setStatus("Sent");
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
          <h2>Check Your Essay</h2>
          <h3>Transform your essays from good to extraordinary with our free essay checker! Our experts are here to help you refine your writing, ensuring clarity, coherence, and correctness. Simply upload your essay, and let us check for grammar mistakes, punctuation errors, and style improvements. Whether you're a student aiming for top grades or a professional polishing your work, our essay checker form provides detailed feedback to elevate your writing. Get ready to impress your readers with flawless, compelling essays. Try it now and see the difference!</h3>
          <form
            onSubmit={handleSubmit}
            target="_self"
            className="contact__block-form"
          >
            <input
              name="entry.1195714290"
              value={formData["entry.1195714290"]}
              onChange={handleChange("entry.1195714290")}
              required
              autoComplete={"off"}
              type="text"
              placeholder="Your Full Name"
            />
            <input
              name="entry.1102514207"
              value={formData["entry.1102514207"]}
              onChange={handleChange("entry.1102514207")}
              required
              autoComplete={"off"}
              type="email"
              placeholder="Your Email"
            />
            <input
              type="text"
              placeholder="Your Essay Question"
              name="entry.809462150"
              value={formData["entry.809462150"]}
              onChange={handleChange("entry.809462150")}
              required
              autoComplete={"off"}
            />
            <input
              type="tel"
              placeholder="Notes for any details"
              name="entry.1424589896"
              value={formData["entry.1424589896"]}
              onChange={handleChange("entry.1424589896")}
              required
              autoComplete={"off"}
            />
            <textarea
            name="entry.1163459930"
            value={formData["entry.1163459930"]}
            onChange={handleChange("entry.1163459930")}
            required
            autoComplete={"off"}
            placeholder="Your Essay"
          ></textarea>
            
            <button className="contact__block-form-submit" type="submit">
              {status}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EssayCheck;
