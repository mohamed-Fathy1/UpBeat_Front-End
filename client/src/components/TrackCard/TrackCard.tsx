import { Link } from "react-router-dom";
import "./TrackCard.css";
import { Song } from "../../global.d";

function TrackCard({link, image, artist, title, alt}: Song) {
  return (
    <li>
      <Link to={link} className="content-item">
        <img src={image} alt={alt} />
        <h3>{artist}</h3>
        <h5>{title}</h5>
      </Link>
    </li>
  );
}

export default TrackCard;
