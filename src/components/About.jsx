const About = () => {
  return (
    <section className="about section-padding bg-light">
      <div className="container about-container">
        <div className="about-title">
          <h2>Driven by Elegance,<br/>Defined by Trust</h2>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <i className="fa-solid fa-tags"></i>
            <h4>Transparent Pricing</h4>
            <p>No hidden fees or unexpected charges. What you see is what you pay. Enjoy peace of mind with our straightforward pricing structure.</p>
          </div>
          <div className="about-card">
            <i className="fa-solid fa-map-location-dot"></i>
            <h4>24/7 Roadside Assistance</h4>
            <p>Drive with confidence knowing our dedicated support team is available around the clock to assist you with any roadside emergencies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
