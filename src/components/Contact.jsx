import { useState } from 'react';

const Contact = () => {
  const [btnText, setBtnText] = useState('Send Request');
  const [btnColor, setBtnColor] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText('Sending Request...');
    setDisabled(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/vihangamelindra@gmail.com", {
        method: "POST",
        headers: { 
            'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setBtnText('Request Sent!');
        setBtnColor('#10b981');
        setTimeout(() => {
          e.target.reset();
          setBtnText('Send Request');
          setBtnColor('');
          setDisabled(false);
        }, 3000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setBtnText('Error. Try again.');
      setBtnColor('#ef4444');
      setTimeout(() => {
        setBtnText('Send Request');
        setBtnColor('');
        setDisabled(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="request-form-wrap">
          <h2>Request a Vehicle</h2>
          <p>Fill out the form below and our representative will contact you shortly.</p>
          <form className="request-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="+1 234 567 8900" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Pick-up Location</label>
                <input type="text" name="location" placeholder="City or Airport" required />
              </div>
              <div className="form-group">
                <label>Vehicle Model</label>
                <select name="model" required defaultValue="">
                  <option value="" disabled>Select a model</option>
                  <option value="prius">Toyota Prius</option>
                  <option value="alto">Suzuki Alto</option>
                  <option value="accord">Honda Accord</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Message (Optional)</label>
              <textarea name="message" rows="3" placeholder="Any special requests?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={disabled} style={{ backgroundColor: btnColor || undefined }}>{btnText}</button>
          </form>
        </div>
        
        <div className="contact-info-wrap">
          <h2>Contact Information</h2>
          <ul className="contact-list">
            <li>
              <i className="fa-solid fa-phone"></i>
              <div>
                <strong>Phone</strong>
                <p>+1 (555) 123-4567</p>
              </div>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <p>info@mbcarrental.com</p>
              </div>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <strong>Address</strong>
                <p>New Kandy Road, <br/>Malabe, Sri Lanka</p>
              </div>
            </li>
          </ul>
          <p className="contact-footer-text">Our dedicated support team is available 24/7 to answer your queries.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
