const Footer = () => {
  return (
    <footer className="site-footer bg-light">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo-box">MB</div>
          <p>Experience the road like never before. Premium cars for every occasion.</p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#fleet">Fleet</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Social Links</h4>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 MB Car Rental. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
