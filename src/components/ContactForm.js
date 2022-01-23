import React from "react";
import { useState } from "react";
// import PropTypes from 'prop-types'

const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onClick = (e) => {
      e.preventDefault()

      if(!name) {
          alert('Please include your name')
      }if(!email) {
          alert('Please include your email')
      }if(!message) {
          alert('Please include a message')
          return
      }

      onAdd({ name, email, message })

      setName('')
      setEmail('')
      setMessage('')
  }

  return (
    <form className="form">
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          placeholder="name"
          aria-label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="email"
          className="form-input"
          placeholder="email"
          aria-label="email"          
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <textarea
          type="text"
          className="form-input"
          placeholder="message"
          aria-label="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button onClick={onClick} className="btn">
        Submit
      </button>
    </form>
  );
};

// ContactForm.propTypes = {
//     onClick: PropTypes.func
// }

export default ContactForm;
