
// import './Footer.css';
// // import { Button } from './Button';
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <div className='footer-container'>
//       <section className='contact-container'>
//         <form action="https://api.web3forms.com/submit" method="POST" className='contact'>
//           <div className="contact-title">
//             <h2>Get in touch</h2>
//             <div className='contact-underline'></div>
//           </div>
//           <input type="hidden" name="access_key" value="62f62cde-5115-4bc7-b36c-192ec91baf48" />
//           <input type="text" name="name" placeholder='Your Name' className='contact-inputs' />
//           <input type="email" name="email" placeholder='Your Email' className='contact-inputs' />
//           <textarea name="message" placeholder='Your Message' className='contact-inputs' ></textarea>
//           <button type='submit'>Submit</button>
//         </form>
//       </section>
//       <section class='social-media'>
//         <div class='social-media-wrap'>
//           <div class='footer-logo'>
//             <Link to='/' className='social-logo'>
//               StorySaga
//               <i class='fab fa-typo3' />
//             </Link>
//           </div>
//           <small class='website-rights'>StorySaga © 2024</small>
//           <div class='social-icons'>
//             <Link
//               class='social-icon-link facebook'
//               to='/'
//               target='_blank'
//               aria-label='Facebook'
//             >
//               <i class='fab fa-facebook-f' />
//             </Link>
//             <Link
//               class='social-icon-link instagram'
//               to='/'
//               target='_blank'
//               aria-label='Instagram'
//             >
//               <i class='fab fa-instagram' />
//             </Link>
//             <Link
//               class='social-icon-link youtube'
//               to='/'
//               target='_blank'
//               aria-label='Youtube'
//             >
//               <i class='fab fa-youtube' />
//             </Link>
//             <Link
//               class='social-icon-link twitter'
//               to='/'
//               target='_blank'
//               aria-label='Twitter'
//             >
//               <i class='fab fa-twitter' />
//             </Link>
//             <Link
//               class='social-icon-link twitter'
//               to='/'
//               target='_blank'
//               aria-label='LinkedIn'
//             >
//               <i class='fab fa-linkedin' />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Footer;


// import './Contact.css';

// const Contact = () => {
//   return (
//     <div>
//       <form action="https://formspree.io/f/mblrogev" method="POST">
//         <h1>Contact Form</h1>
//         <input type="text" name="First" placeholder="First Name" autoComplete="off" required />
//         <input type="text" name="last" placeholder="Last Name" autoComplete="off" required />
//         <input type="email" name="email" placeholder="Email Address" autoComplete="off" required />
//         <textarea rows="5" cols="60" name="message" placeholder="Enter Text" autoComplete="off" required></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

// import React from 'react';

// const Contact = () => {
//   const styles = {
//     container: {
//       backgroundColor: '#060616',
//       color: 'white',
//       textAlign: 'center',
//       paddingTop: '10px',
//       fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
//     },
//     heading: {
//       fontSize: '60px',
//     },
//     input: {
//       backgroundColor: 'white',
//       width: '70%',
//       marginLeft: '12%',
//       fontSize: '20px',
//       padding: '16px 16px',
//       borderRadius: '10px',
//       borderColor: 'black',
//       marginBottom: '20px',
//       borderWidth: '1px',
//     },
//     textarea: {
//       backgroundColor: 'white',
//       width: '70%',
//       marginLeft: '12%',
//       fontSize: '20px',
//       padding: '16px 16px',
//       borderRadius: '10px',
//       borderColor: 'black',
//       marginBottom: '25px',
//       fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
//       borderWidth: '1px',
//     },
//     inputFocus: {
//       outline: 'none',
//       borderColor: '#5bd183',
//       borderWidth: '3px',
//     },
//     button: {
//       backgroundColor: '#5bd183',
//       borderRadius: '20px',
//       borderColor: 'black',
//       fontSize: '22px',
//       padding: '10px 18px',
//       textAlign: 'center',
//       display: 'flex',
//       margin: 'auto',
//     },
//     buttonHover: {
//       opacity: '80%',
//       cursor: 'pointer',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <form action="https://formspree.io/f/mblrogev" method="POST">
//         <h1 style={styles.heading}>Contact Form</h1>
//         <input
//           type="text"
//           name="First"
//           placeholder="First Name"
//           autoComplete="off"
//           required
//           style={styles.input}
//           onFocus={(e) => (e.target.style.border = `3px solid ${styles.inputFocus.borderColor}`)}
//           onBlur={(e) => (e.target.style.border = `1px solid ${styles.input.borderColor}`)}
//         />
//         <input
//           type="text"
//           name="last"
//           placeholder="Last Name"
//           autoComplete="off"
//           required
//           style={styles.input}
//           onFocus={(e) => (e.target.style.border = `3px solid ${styles.inputFocus.borderColor}`)}
//           onBlur={(e) => (e.target.style.border = `1px solid ${styles.input.borderColor}`)}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           autoComplete="off"
//           required
//           style={styles.input}
//           onFocus={(e) => (e.target.style.border = `3px solid ${styles.inputFocus.borderColor}`)}
//           onBlur={(e) => (e.target.style.border = `1px solid ${styles.input.borderColor}`)}
//         />
//         <textarea
//           rows="5"
//           cols="60"
//           name="message"
//           placeholder="Enter Text"
//           autoComplete="off"
//           required
//           style={styles.textarea}
//           onFocus={(e) => (e.target.style.border = `3px solid ${styles.inputFocus.borderColor}`)}
//           onBlur={(e) => (e.target.style.border = `1px solid ${styles.textarea.borderColor}`)}
//         ></textarea>
//         <button
//           type="submit"
//           style={styles.button}
//           onMouseOver={(e) => (e.target.style.opacity = styles.buttonHover.opacity)}
//           onMouseOut={(e) => (e.target.style.opacity = '100%')}
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

