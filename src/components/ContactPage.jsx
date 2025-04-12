import React, { useState } from "react";
import "./ContactPage.css"; 

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent! \nName: ${name} \nEmail: ${email} \nMessage: ${message}`);
  };

  return (
    <>
      <div className="quote-section">
        <p>"Let's Brew Conversations."</p>
      </div>
      <section className="contact-container">
        <div className="contact-content">
          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <h2 className="form-title">Get in Touch</h2>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  required
                />
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          <div className="contact-image">
            <img
              src="https://i.pinimg.com/736x/6c/1e/35/6c1e35d59732b51edb484f5810651023.jpg"
              alt="Coffee"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
