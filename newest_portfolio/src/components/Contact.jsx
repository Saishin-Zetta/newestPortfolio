import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'subject') setSubject(value);
    if (name === 'message') setMessage(value);
  }

  const handleOnClick = () => {
    if (name.length < 1) {
      setValidationErrors({
        ...validationErrors,
        name: true
      });
    } else {
      setValidationErrors({
        ...validationErrors,
        name: false
      });
    }
  }

  return (
    <section className="mb-4">
      <h2 className="h1-responsive font-weight-bold text-center my-4 textFont">Contact me</h2>
      <p className="text-center w-responsive mx-auto mb-5 textFont">Do you have any questions? Please do not hesitate to contact me.</p>
      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input value={name} onChange={(event) => { handleOnChange(event) }} type="text" id="name" name="name" className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}></input>
                  <label className="textFont" for="name">Your name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input value={email} onChange={(event) => { handleOnChange(event) }} type="text" id="email" name="email" className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}></input>
                  <label className="textFont" for="email">Your email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input value={subject} onChange={(event) => { handleOnChange(event) }} type="text" id="subject" name="subject" className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}></input>
                  <label className="textFont" for="subject">Subject</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea value={message} onChange={(event) => { handleOnChange(event) }} type="text" id="message" name="message" rows="2" className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}></textarea>
                  <label className="textFont" for="message">Your message</label>
                </div>
              </div>
            </div>
          </form>
          <div className="text-center text-md-left">
            <button className="btn btn-primary" onClick={handleOnClick}>Send</button>
          </div>
          <div className="status"></div>
        </div>
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
              <p className="textFont">Brentwood, TN 37027, USA</p>
            </li>
            <li><i className="fas fa-phone mt-4 fa-2x"></i>
              <p className="textFont">615-587-7113</p>
            </li>
            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
              <p className="textFont">andrewy3295@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <footer>Here's my footer</footer>
    </section>
    
  )
}