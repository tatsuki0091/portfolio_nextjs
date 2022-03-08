import React, { useState } from "react";
import axios from "axios";
import { CpIptxt } from "../styles/formStyle";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(process.env.NEXT_PUBLIC_SEND_EMAIL);
    const res = await axios.post(
      process.env.REACT_APP_SEND_EMAIL_PRODUCTION,
      values,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // return res.data;
  };

  return (
    <>
      <main className="max-w-4xl mx-auto mt-10 antialiased">
        <div className="container px-4 mx-auto">
          <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse">
            <form className="w-full" onSubmit={(e) => sendEmail(e)}>
              <CpIptxt>
                <input
                  placeholder="Subject"
                  type="text"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
              </CpIptxt>
              <CpIptxt>
                <input
                  placeholder="Your mail address"
                  type="text"
                  value={emailAddress}
                  onChange={(event) => setEmailAddress(event.target.value)}
                />
              </CpIptxt>
              <CpIptxt>
                <textarea
                  placeholder="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </CpIptxt>
              <CpIptxt>
                <input type="submit" value="SEND" />
              </CpIptxt>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
