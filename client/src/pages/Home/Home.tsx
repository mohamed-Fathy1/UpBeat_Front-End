import "./Home.css";
import songCover1 from "../../assets/The_Weeknd_-_Popular.png";
import songCover2 from "../../assets/264x264.jpg";
import adele from "../../assets/ajeup0ayctw4ztltklrnuvtm-y4xulezgneawbqw4cs_custom-7aa29347d5da230c6101168c71549a7399302d0c-s1100-c50.jpg";
import coldplay from "../../assets/ab6761610000e5eb989ed05e1f0570cc4726c2d3.jpg";
import blinding from "../../assets/The_Weeknd_-_Blinding_Lights.png";
import water from "../../assets/1aa429772140dc310608e2268b8133a6b5-tyla-.rsquare.w330.webp";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import TrackContainer from "../../components/TrackContrainer/TrackContrainer";
import { useState, useEffect } from "react";

interface HomePageProps {
  isLoggedIn: boolean;
  usename: string;
}

function HomePage({ isLoggedIn, usename }: HomePageProps) {
  
  const [songData, setSongData] = useState({});

  const fetchData = async () => {
    let response = await (
      await fetch("../../api/songData.json")
    ).json();
    setSongData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="homepage-container relative">
      <SideNavbar isLoggedIn={isLoggedIn} />
      <div className="homepage-content">
        {isLoggedIn && <h1>Welcome, {usename}</h1>}
        <TrackContainer title="New Released" song={songData}/>
        <TrackContainer title="Popular Artists" song={songData}/>
        <TrackContainer title="Popular Tracks" song={songData}/>
      </div>
    </div>
  );
}

export default HomePage;
