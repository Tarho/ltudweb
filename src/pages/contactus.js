import React, { useRef } from "react";
import emailjs from "emailjs-com";

function ContactUs() {
  // Đặt tên component bằng chữ hoa và đúng tên (ContactUs)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ggreld8",
        "template_akkfjfg",
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
    <div>
      <div className="contactform">
        <div className="info">
          <form ref={form} onSubmit={sendEmail}>
            <h3>Get in touch</h3>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            ></input>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Your Phonenumber"
              required
            ></input>
            <input
              type="text"
              id="mail"
              name="email"
              placeholder="Your Mail"
              required
            ></input>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="How can we help you?"
            ></textarea>
            <button type="submit" id="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs; // Đổi tên export thành ContactUs
