import "./Home.css";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import TrackContainer from "../../components/TrackContrainer/TrackContrainer";
import { useState, useEffect, useContext } from "react";
import { MusicData } from "../../global.d";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import playerContext from "../../context/playerContext";

interface HomePageProps {
  isLoggedIn: boolean;
  usename: string;
}

function HomePage({ isLoggedIn, usename }: HomePageProps) {
  const [songData, setSongData] = useState<MusicData>({
    "New Released": [],
    "Popular Artists": [],
    "Popular Tracks": [],
  });

  const { setPlaylist, currentSong } = useContext(playerContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await (await fetch("../../api/songData.json")).json();

      const response1 = Object.keys(response)
        .map((key) => response[key])
        .flat();

      setPlaylist(response1);
      return response;
    };

    fetchData().then((data) => {
      setSongData(data);
    });
  }, []);

  return (
    <div className="homepage-container relative">
      <SideNavbar isLoggedIn={isLoggedIn} />
      <div className="homepage-content">
        {isLoggedIn && <h1>Welcome, {usename}</h1>}
        <TrackContainer />
      </div>
      {currentSong ? <AudioPlayer /> : null}
    </div>
  );
}

export default HomePage;
