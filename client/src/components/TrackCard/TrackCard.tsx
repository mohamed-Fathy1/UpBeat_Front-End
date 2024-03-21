import { Link } from "react-router-dom";
import "./TrackCard.css";
import { Song } from "../../global.d";



function TrackCard({link, image, artist, title, alt}: Song) {
  

  
 
  return (
    
      <Link to={link}>
        <div className="content-item" >
          <img src={image} alt={alt} />
          <h3>{artist}</h3>
          <h5>{title}</h5>
        </div>
      </Link>
    
  );
}

export default TrackCard;
