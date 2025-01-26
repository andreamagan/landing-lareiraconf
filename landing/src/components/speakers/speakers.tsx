import { SPEAKERS } from "./speakers.info";
import "./speakers.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Speakers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <section className="speakers">
      <h1 className="speakers-title">Nuestros speakers</h1>
      <Slider {...settings}>
        {SPEAKERS.map((speaker) => (
          <div key={speaker.id} className="speaker-card">
            <div className="content">
              <img
                src={speaker.avatar}
                alt={speaker.speaker}
                className="avatar"
                loading="lazy"
              />
              <div className="info">
                <h2 className="name">{speaker.speaker}</h2>
                <p className="role">{speaker.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Speakers;
