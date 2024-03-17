import "./Home.css";
import { Link } from "react-router-dom";
import { FaHome, FaHeart, FaSearch } from "react-icons/fa";
import { BiSolidPlaylist } from "react-icons/bi";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import songCover1 from "../../assets/The_Weeknd_-_Popular.png";
import songCover2 from "../../assets/264x264.jpg";
import adele from "../../assets/ajeup0ayctw4ztltklrnuvtm-y4xulezgneawbqw4cs_custom-7aa29347d5da230c6101168c71549a7399302d0c-s1100-c50.jpg";
import coldplay from "../../assets/ab6761610000e5eb989ed05e1f0570cc4726c2d3.jpg";
import blinding from "../../assets/The_Weeknd_-_Blinding_Lights.png";
import water from "../../assets/1aa429772140dc310608e2268b8133a6b5-tyla-.rsquare.w330.webp";



interface Props {
  isLoggedIn: boolean,
  usename: string
}

function HomePage({ isLoggedIn, usename }: Props) {
  return (
  <div className="homepage-container relative">
        <div className="navbar-container">
          <nav className="navbar">
            <h2>UpBeat</h2>
            <ul className="navbar-items">
              <li>
                <Link to="/home" className="item">
                  <FaHome />
                  <h3>Home</h3>
                </Link>
              </li>
              <li>
                <Link to="/search" className="item">
                  <FaSearch />
                  <h3>Search</h3>
                </Link>
              </li>
              <li>
                <Link to="/favory" className="item">
                  <FaHeart />
                  <h3>Favory</h3>
                </Link>
              </li>
              <li>
                <Link to="/playlist" className="item">
                  <BiSolidPlaylist />
                  <h3>Playlist</h3>
                </Link>
              </li>
            </ul>
            <div className="navbar-login-section navbar">
              {isLoggedIn ? (
                <ul className="navbar-items">
                  <li>
                    <Link to="/account" className="item">
                      <IoPerson />
                      <h3>My Account</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to="/home" className="item">
                      <IoMdLogOut />
                      <h3>Logout</h3>
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-items">
                  <li>
                    <Link to="/login" className="item">
                      <IoMdLogIn />
                      <h3>Login</h3>
                    </Link>
                  </li>
                </ul>
              )}


            </div>
          </nav>
        </div>

        <div className="homepage-content">
        {isLoggedIn && (
        <h1>Welcome, {usename}</h1>
        )}
          <section className="new-released home-sections">
            <h2>New Released</h2>
            <div className="new-relased-items">
              <ul>
                <li>
                  <Link to="/" className="content-item">
                    <img src={songCover1} alt="song1" />
                    <h3>The Weeknd</h3>
                    <h5>Popular</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="content-item">
                    <img src={songCover2} alt="song2" />
                    <h3>Ariana Grande</h3>
                    <h5>Yes, And?</h5>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section className="popular-artists home-sections">
          <h2>Popular Artists</h2>
            <div className="Popular-artists-items">
              <ul>
                <li>
                  <Link to="/" className="content-item">
                    <img src={adele} alt="song2" />
                    <h3>Adele</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="content-item">
                    <img src={coldplay} alt="song2" />
                    <h3>ColdPlay</h3>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section className="popular-tracks home-sections">
          <h2>Popular Tracks</h2>
            <div className="Popular-tracks-items">
              <ul>
                <li>
                  <Link to="/" className="content-item">
                    <img src={blinding} alt="song2" />
                    <h3>The Weeknd</h3>
                    <h5>Blinding lights</h5>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="content-item">
                    <img src={water} alt="song2" />
                    <h3>Tyla</h3>
                    <h5>Water</h5>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>

      </div>
  )
}

export default HomePage