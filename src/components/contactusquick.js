import React from "react";
import "./contactusquick.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

function ContactUsQuick() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ggreld8",
        "template_lyu5pmn",
        form.current,
        "uzp8Yi5HDpdVCCzZ8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <h1>Quick Contact</h1>
      <div className="contactform">
        <div className="info">
          <form ref={form} onSubmit={sendEmail}>
            <h3>Get in touch</h3>
            <input
              type="text"
              id="name"
              name="name" // Đặt name cho từng trường dữ liệu
              placeholder="Your Name"
              required
            ></input>
            <input
              type="text"
              id="phone"
              name="phone" // Đặt name cho từng trường dữ liệu
              placeholder="Your Phonenumber"
              required
            ></input>
            <input
              type="email"
              id="mail"
              name="email" // Đặt name cho từng trường dữ liệu
              placeholder="Your Mail"
              required
            ></input>
            <button type="submit" id="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsQuick;
