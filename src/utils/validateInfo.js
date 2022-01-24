export default function validateInfo(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    !/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/i.test(values.email)
  ) {
    errors.email = "Email address is invalid";
  }

  if (!values.message) {
    errors.message = "Message is required";
  }

  return errors;
}
