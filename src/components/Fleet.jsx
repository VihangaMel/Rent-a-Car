import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Fleet = () => {
  const cars = [
    {
      id: 1,
      name: 'Toyota Prius',
      image: '/assets/car_prius_1777892842311.png',
      seats: 5,
      bags: 2,
      price: '8,000'
    },
    {
      id: 2,
      name: 'Suzuki Alto',
      image: '/assets/car_compact_1777892867032.png',
      seats: 4,
      bags: 1,
      price: '4,500'
    },
    {
      id: 3,
      name: 'Honda Accord',
      image: '/assets/car_sedan_1777892886204.png',
      seats: 5,
      bags: 3,
      price: '12,000'
    },
    {
      id: 4,
      name: 'Toyota Prius',
      image: '/assets/car_prius_1777892842311.png',
      seats: 5,
      bags: 2,
      price: '8,000'
    },
    {
      id: 5,
      name: 'Suzuki Alto',
      image: '/assets/car_compact_1777892867032.png',
      seats: 4,
      bags: 1,
      price: '4,500'
    },
    {
      id: 6,
      name: 'Honda Accord',
      image: '/assets/car_sedan_1777892886204.png',
      seats: 5,
      bags: 3,
      price: '12,000'
    }
  ];

  return (
    <section id="fleet" className="fleet section-padding">
      <div className="container">
        <h2 className="section-title">The Fleet</h2>
        <Swiper loop={true}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: '40px' }} // Space for pagination dots
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id}>
              <div className="fleet-card">
                <div className="fleet-img-wrap">
                  <img src={car.image} alt={car.name} />
                </div>
                <div className="fleet-info">
                  <h3>{car.name}</h3>
                  <p className="car-specs">
                    <span><i className="fa-solid fa-user"></i> {car.seats} Seats</span> 
                    <span><i className="fa-solid fa-suitcase"></i> {car.bags} {car.bags > 1 ? 'Bags' : 'Bag'}</span>
                  </p>
                  <div className="fleet-footer">
                    <span className="price">Rs. {car.price}<small>/Day</small></span>
                    <a href="#contact" className="btn btn-primary btn-sm">Book Now</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Fleet;
