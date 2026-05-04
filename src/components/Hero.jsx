const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="fade-in-up">Rent <span className="text-primary">Your</span><br/>Dream Car<br/>Today</h1>
          <p className="fade-in-up delay-1">Discover elegance and performance with our premium fleet. Experience seamless bookings and unparalleled service tailored for you.</p>
          <div className="hero-buttons fade-in-up delay-2">
            <a href="#rates" className="btn btn-primary">Personal Rates</a>
            <a href="#rates" className="btn btn-secondary">Corporate</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
