import { useState } from "react";

const useContactForm = ({ validateInfo, onAdd }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onClick = (e) => {
    e.preventDefault();

    setErrors(validateInfo(values));

    onAdd(values);

    setValues({
      name: "",
      email: "",
      message: "",
    });
  };

  return { values, errors, handleChange, onClick };
};

export default useContactForm;
