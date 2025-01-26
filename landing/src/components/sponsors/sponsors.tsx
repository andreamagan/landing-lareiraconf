import { SPONSORS } from "./sponsors.info";
import "./sponsors.css";

const Sponsors = () => {
  return (
    <div className="sponsors">
      {SPONSORS.map((sponsor) => (
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="sponsor-image"
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default Sponsors;
