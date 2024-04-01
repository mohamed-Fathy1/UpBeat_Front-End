import { useEffect, useState } from "react";
import AlbumSlider from "../../components/AlbumSlider/AlbumSlider";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import axios from "axios";

interface PlaylistsProps {
  isLoggedIn: boolean;
  usename: string;
}

function Playlists({ isLoggedIn, usename }: PlaylistsProps) {
  const [myPlaylists, setMyPlaylists] = useState<any>([]);

  useEffect(() => {
    axios
      .get(
        "https://upbeat-server.onrender.com/api/v1/playlist/spotify:playlist:37i9dQZF1DWZCOSaet9tpB/tracks"
      )
      .then((response) => {
        response.data.map((item: any) => {
          console.log(item.track);
          setMyPlaylists((prev: any) => [...prev, item.track]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="homepage-container relative">
      <SideNavbar isLoggedIn={isLoggedIn} />
      <div className="w-[90%] h-svh ml-1 p-5 overflow-auto">
        <div className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-slate-700  bg-gray-800 mx-2 text-white py-4 pb-5 px-5 rounded-lg w-full min-h-svh">
          <AlbumSlider tracks={myPlaylists} />
        </div>
      </div>
    </div>
  );
}

export default Playlists;
