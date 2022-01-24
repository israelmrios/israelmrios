import React from "react";
import useContactForm from "./useContactForm";
import validateInfo from "../utils/validateInfo";

const ContactForm = ({ onAdd }) => {
  const { values, errors, handleChange, onClick } = useContactForm({
    validateInfo,
    onAdd,
  });

  return (
    <form className="form">
      <div className="form-control">
        <input
          type="text"
          name="name"
          className="form-input"
          placeholder="name"
          aria-label="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div className="form-control">
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="email"
          aria-label="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="form-control">
        <textarea
          type="text"
          name="message"
          className="form-input"
          placeholder="message"
          aria-label="message"
          value={values.message}
          onChange={handleChange}
        />
        {errors.message && <p>{errors.message}</p>}
      </div>
      <button onClick={onClick} className="btn">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
