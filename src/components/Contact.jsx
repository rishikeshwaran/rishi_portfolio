import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
  'service_8erx92p',        // ✅ Your real Service ID
  'template_s8e8bgu',        // ✅ Your real Template ID
  form.current,
  'SfuquD15VncN8mSzd'             // ✅ Your Public API Key
).then(() => {
        toast.success('📩 Message sent successfully!');
        form.current.reset();
      }, (error) => {
        toast.error('❌ Failed to send message: ' + error.text);
      });
  };

  return (
    <section id="contact" className="contact">
      <h3>Contact Me</h3>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default Contact;

