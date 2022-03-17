import React, { useState } from "react";
import { CpIptxt, ERROR_MESSAGE } from "../styles/contactStyle";
import { SEND_EMAIL } from "../types/Types";
import { validateInfo } from "../components/contacts/validation";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<SEND_EMAIL>({
    subject: "",
    emailAddress: "",
    message: "",
  });
  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateInfo(subject, emailAddress, message);
    if (
      validation.subject === "" &&
      validation.emailAddress === "" &&
      validation.message === ""
    ) {
      // const emailEndpoint = process.env.NEXT_PUBLIC_SEND_EMAIL || "";
      // const mailInfo: SEND_EMAIL = {
      //   subject,
      //   emailAddress,
      //   message,
      // };
      // const res = await axios.post(emailEndpoint, mailInfo, {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // return res.data;
    } else {
      setErrors(validation);
    }
  };

  return (
    <>
      <main className="max-w-4xl mx-auto mt-10 antialiased">
        <div className="container px-4 mx-auto">
          <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse">
            <form className="w-full" onSubmit={(e) => sendEmail(e)}>
              <CpIptxt>
                <div>
                  <input
                    placeholder="Subject"
                    type="text"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                  />
                </div>
                {errors.subject && (
                  <ERROR_MESSAGE>{errors.subject}</ERROR_MESSAGE>
                )}
              </CpIptxt>
              <CpIptxt>
                <input
                  placeholder="Your mail address"
                  type="text"
                  value={emailAddress}
                  onChange={(event) => setEmailAddress(event.target.value)}
                />
                {errors.emailAddress && (
                  <ERROR_MESSAGE>{errors.emailAddress}</ERROR_MESSAGE>
                )}
              </CpIptxt>
              <CpIptxt>
                <textarea
                  placeholder="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                {errors.message && (
                  <ERROR_MESSAGE>{errors.message}</ERROR_MESSAGE>
                )}
              </CpIptxt>

              <CpIptxt>
                <input
                  className="hover:bg-red-600 hover:text-white dark:hover:bg-blue-600"
                  type="submit"
                  value="SEND"
                />
              </CpIptxt>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
