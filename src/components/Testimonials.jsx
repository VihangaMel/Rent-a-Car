import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "Absolutely wonderful experience. The car was in pristine condition, and the customer service was top-notch. Will definitely rent again!",
      author: "Daniel Romero"
    },
    {
      id: 2,
      text: "The best car rental service I have ever used. The entire process from booking to drop-off was completely seamless and transparent.",
      author: "Anna Johnson"
    },
    {
      id: 3,
      text: "Professional staff and excellent vehicles. I rented a luxury sedan for a business trip and it exceeded all my expectations.",
      author: "James Carter"
    },
    {
      id: 4,
      text: "Highly recommended! The affordable booking option saved me a lot on my family vacation. The car was clean and fueled up.",
      author: "Sarah Williams"
    },
    {
      id: 5,
      text: "Absolutely wonderful experience. The car was in pristine condition, and the customer service was top-notch. Will definitely rent again!",
      author: "Daniel Romero"
    },
    {
      id: 6,
      text: "The best car rental service I have ever used. The entire process from booking to drop-off was completely seamless and transparent.",
      author: "Anna Johnson"
    },
    {
      id: 7,
      text: "Professional staff and excellent vehicles. I rented a luxury sedan for a business trip and it exceeded all my expectations.",
      author: "James Carter"
    },
    {
      id: 8,
      text: "Highly recommended! The affordable booking option saved me a lot on my family vacation. The car was clean and fueled up.",
      author: "Sarah Williams"
    }
  ];

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <h2 className="section-title text-center">What Our Clients Say</h2>
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
          style={{ paddingBottom: '40px' }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="testimonial-card">
                <div className="stars">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p>"{review.text}"</p>
                <h5>- {review.author}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
