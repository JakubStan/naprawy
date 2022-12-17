import react from "react";
import "./Contact.scss";

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
  return (
    <>
      <div className="header-bg bg-contact">
        <div className="page-name">
          <h2>KONTAKT</h2>
        </div>
      </div>

      <section className="contact">
        <div className="contact-content">
          <div className="form">
            <h3 className="section-title">NAPISZ DO NAS</h3>
          </div>

          <div className="contact-data">
            <h3 className="section-title contact-title ">DANE KONTAKTOWE</h3>

            <div className="contact-link">
              <img src={phone} />
              <Callto phone="+48888868130">
                <h4>888 868 130</h4>
              </Callto>
            </div>

            <div className="contact-link">
              <img src={at} />
              <Mailto
                email="maciektrebunia@gmail.com"
                subject="Hello & Welcome"
                body="Hello world!"
              >
                <h4>maciektrebunia@gmail.com</h4>
              </Mailto>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
