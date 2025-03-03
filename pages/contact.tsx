import React, { useState } from 'react';
import { CpIptxt, ERROR_MESSAGE } from '../styles/contactStyle';
import { validateInfo } from '../components/contacts/validation';
import axios from 'axios';
import Check from '../components/commons/modals/Check';
import Modal from '../components/commons/modals/Modal';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (errors.length > 1) {
      setErrors([]);
    }
    const validation = validateInfo(subject, emailAddress, message);
    try {
      if (validation.success) {
        await axios.post('/api/email', {
          from: emailAddress,
          subject: subject,
          text: message,
        });
        setErrors([]);
        setIsModalOpen(true);
      } else {
        for (const issue of validation.error.issues) {
          setErrors((prev) => [...prev, issue.message]);
        }
      }
    } catch (err) {
      console.log(err);
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
                <input
                  className="hover:bg-red-600 hover:text-white dark:hover:bg-blue-600"
                  type="submit"
                  value="SEND"
                />
              </CpIptxt>
            </form>
          </div>
        </div>
        {errors.length > 0 &&
          errors.map((error) => (
            <>
              <div
                className="flex justify-center items-center mt-5"
                key={error}
              >
                <ERROR_MESSAGE>{error}</ERROR_MESSAGE>
              </div>
            </>
          ))}
        <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} path={'/'}>
          <h1 className="text-center text-xl font-bold">
            Your Email Was Sent.
          </h1>
          <Check />
        </Modal>
      </main>
    </>
  );
};

export default Contact;
