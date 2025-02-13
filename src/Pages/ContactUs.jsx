import React, { useState } from "react";
import Headandfoot from "./../Layout/Headandfoot";
import "../Styles/Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    const whatsappNumber = "923366190190";  

    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`, "_blank");
  };

  return (
    <Headandfoot>
      <div className="contact-page">
        <div className="text-center m-4">
          <h1>Get in Touch</h1>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                Have questions or need assistance? We are here to help! Whether
                you’re looking for information, support, or simply want to say
                hello, our team is eager to connect with you.
              </p>
              <p>
                Use the form to send us a message, and we’ll get
                back to you as soon as possible.
              </p>
              <p>
                Prefer other ways to reach us? Call us at
                <strong> 041-2422722</strong>. We look forward to hearing from
                you!
              </p>
            </div>

            <div className="col-md-6 mb-4">
              <div className="form-container p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Headandfoot>
  );
};

export default ContactUs;
