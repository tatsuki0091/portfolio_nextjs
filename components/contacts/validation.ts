import { SEND_EMAIL } from "../../types/Types";

export function validateInfo(
  subject: string,
  emailAddress: string,
  message: string
) {
  let errors: SEND_EMAIL = {
    subject: "",
    emailAddress: "",
    message: "",
  };
  let emailPattern =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

  if (!subject) {
    errors.subject = "Subject is required";
  } else if (subject.length > 40) {
    errors.subject = "You need to add less than 4å0 characters";
  } else {
    errors.subject = "";
  }

  if (!emailAddress) {
    errors.emailAddress = "Email address is required";
  } else if (!emailPattern.test(emailAddress)) {
    errors.emailAddress = "Please input correct email address";
  } else {
    errors.emailAddress = "";
  }

  if (!message) {
    errors.message = "Message is required";
  } else {
    errors.message = "";
  }

  return errors;
}
