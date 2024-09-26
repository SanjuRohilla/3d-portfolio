// import React, { useRef, useState } from "react";
// import emailjs from '@emailjs/browser'

// const Contact = () => {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = ({ target: { name, value } }) =>
//     setFormState((prevState) => ({ ...prevState, [name]: value }));

//   const handleSubmitForm = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     try {
//       await emailjs.send(
//         'service_m6vcdzo',
//         'template_v48lrtv',
//         {
//           from_name: formState.name,
//           to_name: 'Sanju',
//           from_email: formState.email,
//           to_email: 'sanjurohillla2022@gmail.com',
//           message: formState.message,
//         },
//         'GmMUaBWV8ssJ-X9hU'
//       );
//       setLoading(false);
//       alert('Your message has been sent!');
//       setFormState({
//         name: '',
//         email: '',
//         message: '',
//       });
//     } catch (error) {
//       setLoading(false);
//       console.error(error);
//       alert('Something went wrong! ');
//     }
//   };

//   return (
//     <section className="c-space my-20">
//       <div className="relative min-h-screen flex items-center justify-center flex-col">
//         <img
//           src="/assets/terminal.png"
//           alt="terminal background"
//           className="absolute inset-0 min-h-screen"
//         />
//         <div className="contact-container">
//           <h3 className="head-text mt-8">Let's Talk</h3>
//           <p className="text-lg text-white-600 mt-3">
//             Whether you're looking to build a new website , improve your existing
//             platform, or bring a unique project to life, I'm here to help.
//           </p>
//           <form onSubmit={handleSubmitForm} className="mt-12 flex flex-col space-y-7">
//             <label className="space-y-3">
//          <span className="field-label">Full Name</span>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="field-input"
//                 placeholder="ex., John Doe"
//               />
//             </label>

//             <label className="space-y-3">
//               <span className="field-label">Email address</span>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="field-input"
//                 placeholder="ex., johndoe@gmail.com"
//               />
//             </label>

//             <label className="space-y-3">
//               <span className="field-label">Your message</span>
//               <textarea
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="field-input"
//                 placeholder="Share your thoughts or inquiries..."
//               />
//             </label>

//             <button className="field-btn" type="submit" disabled={loading}>
//               {loading ? 'Sending...' : 'Send Message'}
//               <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_m6vcdzo',
        'template_oi3rog4',
        {
          from_name: form.name,
          to_name: 'Sanju',
          from_email: form.email,
          to_email: 'sanjurohillla2022@gmail.com',
          message: form.message,
        },
        'GmMUaBWV8ssJ-X9hU',
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-30" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />
        <div className='my-16'>
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Your name"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="example@google.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts ..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;