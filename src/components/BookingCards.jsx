const BookingCards = () => {
  return (
    <div className="booking-options container">
      <div className="booking-card slide-up">
        <i className="fa-solid fa-car-side"></i>
        <h3>Affordable Booking</h3>
      </div>
      <div className="booking-card slide-up delay-1">
        <i className="fa-solid fa-shield-halved"></i>
        <h3>Secure Car Booking</h3>
      </div>
      <div className="booking-card slide-up delay-2">
        <i className="fa-solid fa-truck"></i>
        <h3>Commercial Car Booking</h3>
      </div>
    </div>
  );
};

export default BookingCards;
