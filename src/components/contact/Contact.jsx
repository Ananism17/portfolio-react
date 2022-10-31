import React from "react";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>anandiljar5@gmail.com</h5>
            <a href="mailto:anandiljar5@gmail.com">Send me an Email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Ibtiaj Mahmud Diljar</h5>
            <a href="https://m.me/anandiljar" target="_blank">
              Text me on Messenger
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+880 1733 153488</h5>
            <a href="https://wa.me/+8801733153488" target="_blank">
              Text me on Whatsapp
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder="Message" required></textarea>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
