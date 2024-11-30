
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_49ftcth','template_tgivjet', form.current, {
      publicKey: 'vilH_qG7HHXC5rJEt',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};   

//     emailjs
//       .sendForm(
//         "service_tn4aevu",
//         "template_3oe4zkv",
//         form.current,
//         "your_user_id"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("Message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

  return (
    <StyledContactForm>
      <div>
        <h2>Get in Touch</h2>
        {/* <form ref={form} onSubmit={sendEmail}> */}
        <form action="https://formspree.io/f/mblrogev" method="POST">
        {/* <form action="https://api.web3forms.com/submit" method="POST" className='contact'> */}
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensures the form is always vertically centered */
  background-color: #1c1c1c;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2a2a2a;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 30px;
    width: 500px;
    min-height: 400px; /* Increased height for a taller form */
  }

 h2 {
    color: #f9690e;
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-bottom: 2px solid #f9690e;
    padding-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    input,
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: none;
      border-radius: 5px;
      background-color: #3c3c3c;
      color: #e0e0e0;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
        outline: none;
      }
    }

    label {
      margin-top: 1rem;
      color: #e0e0e0;
    }

    input[type="submit"] {
      margin-top: 20px;
      cursor: pointer;
      background: #f9690e;
      color: white;
      border: none;
      width: 100%;
      padding: 10px;
      font-size: 18px;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #e55d0c;
      }
    }
  }
`;
