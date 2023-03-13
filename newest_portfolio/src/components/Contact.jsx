import React from 'react'

export default function Contact() {
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
                  <input type="text" id="name" name="name" className="form-control"></input>
                  <label className="textFont" for="name">Your name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="text" id="email" name="email" className="form-control"></input>
                  <label className="textFont" for="email">Your email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input type="text" id="subject" name="subject" className="form-control"></input>
                  <label className="textFont" for="subject">Subject</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                  <label className="textFont" for="message">Your message</label>
                </div>
              </div>
            </div>
          </form>
          <div className="text-center text-md-left">
            <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
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
    </section>
  )
}









