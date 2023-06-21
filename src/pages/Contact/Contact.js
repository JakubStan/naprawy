import "./Contact.scss";
import emailjs from "@emailjs/browser";
import React, { useRef, useEffect } from "react";

import at from "../../images/at.png";
import phone from "../../images/phone.png";

const Callto = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children}</a>;
};

const Mailto = ({ email, subject = "", body = "", children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs

      .sendForm(
        "service_48ec8p3",
        "template_bmj7z97",
        form.current,
        "I7hezVVB0oak98lo5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="header-bg bg-contact">
        <div className="page-name">
          <h2>KONTAKT</h2>
        </div>
      </div>

      <section className="contact" id="Contact">
        <div className="contact-content">
          <div className="form">
            <h3 className="section-title">NAPISZ DO NAS</h3>

            <form ref={form} onSubmit={sendEmail}>
              <label>Imię i Nazwisko</label>
              <input type="text" name="user_name" required />
              <label>Email</label>
              <input type="email" name="user_email" required />
              <label>Numer telefonu</label>
              <input type="tel" name="user_phone" required />
              <label>Wiadomość</label>
              <textarea name="message" required />
              <input className="btn" type="submit" value="WYŚLIJ" />
            </form>

            <div id="message" ref={ref} />
          </div>

          <div className="contact-data">
            <h3 className="section-title contact-title ">DANE KONTAKTOWE</h3>

            <div className="contact-link">
              <img src={phone} alt="Phone" />
              <Callto phone="+48888868130">888 868 130</Callto>
            </div>

            <div className="contact-link">
              <img src={at} alt="mail" />
              <Mailto
                email="maciektrebunia@gmail.com"
                subject="Hello & Welcome"
                body="Hello world!"
              >
                maciektrebunia@gmail.com
              </Mailto>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
