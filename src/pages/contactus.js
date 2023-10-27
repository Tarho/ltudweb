import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./contactus.css";
import "./slider.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
const images = [
  "https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMG9uJTIwbGFwdG9wfGVufDB8fDB8fHww&w=1000&q=80",
  "https://images.ctfassets.net/lzny33ho1g45/how-to-give-effective-feedback-p-img/ebc38e191e4280117df2689428221c0c/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
];
function Contactus() {
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
    <div className="body">
      <div class="container">
        <div class="contact-box">
          <div class="left">
            <Carousel useKeyboardArrows={true}>
              {images.map((URL, index) => (
                <div className="slide">
                  <img alt="sample_file" src={URL} key={index} />
                </div>
              ))}
            </Carousel>
          </div>
          <div class="right">
            <h2>Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} className="formformat">
              <input
                type="text"
                id="name"
                name="name"
                class="field"
                placeholder="Your Name"
              />
              <input
                type="text"
                id="mail"
                name="email"
                class="field"
                placeholder="Your Email"
              />
              <input
                type="text"
                id="phone"
                name="phone"
                class="field"
                placeholder="Phone"
              />
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="How can we help you?"
                class="field"
              ></textarea>
              <button class="btn-contact">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
