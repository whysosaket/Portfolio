import { useRef } from "react";
import "./Contact.scss";
import { contacts } from "../../Data";
import { socialIcons } from "../../Data";
import { motion } from "framer-motion";

const Contact = (props: {setProgress: (progress: number)=> void}) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const { setProgress } = props

  const handleSubmit = (e: any) => {
    setProgress(30);
    e.preventDefault();
    const firstName = firstNameRef.current!.value;
    const lastName = lastNameRef.current!.value;
    const phone = phoneRef.current!.value;
    const email = emailRef.current!.value;
    const message = messageRef.current!.value;
    if(!firstName || !lastName || !phone || !email || !message) {
      alert("Please fill out all fields");
      setProgress(0);
      return;
    }
    const data = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      message: message,
    };
    setProgress(60);
    fetch(import.meta.env.VITE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setProgress(100);
        if (data.success) {
          alert("Message Sent. Thank you for contacting me.");
          firstNameRef.current!.value = "";
          lastNameRef.current!.value = "";
          phoneRef.current!.value = "";
          emailRef.current!.value = "";
          messageRef.current!.value = "";
        } else {
          console.log(data);
          alert("Message failed to send. Please try again.");
        }
      });
  };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text">
            I am available on almost every social media. You can message me, I
            will reply within 24 hours. I can help you with React, React Native
            and Node.js. I also have experience working with Python, Java,
            Nextjs.
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              return (
                <div key={index}>
                  <a href={socialIcon.url}>{socialIcon.icon}</a>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" placeholder="First Name" ref={firstNameRef} />
            <input type="text" placeholder="Last name" ref={lastNameRef} />
          </div>
          <div className="row">
            <input type="text" placeholder="Phone" ref={phoneRef} />
            <input type="email" placeholder="Email" ref={emailRef} />
          </div>
          <div className="row">
            <textarea placeholder="message" ref={messageRef}></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="btn"
            onClick={handleSubmit}
          >
            <a>Send</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
