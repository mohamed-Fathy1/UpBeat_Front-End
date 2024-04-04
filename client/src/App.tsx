import { WavyBackground } from "./components/wavyBackground";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import PlayerState from "./context/playerState";
import Login from "./pages/Login/Login";
import Playlists from "./pages/Playlists/Playlists";
import Playlist from "./pages/Playlist/Playlist";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import playerContext from "./context/playerContext";
import { useContext } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home isLoggedIn={false} usename="Hajar" />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/playlist",
    element: <Playlists isLoggedIn={false} usename="Hajar" />,
  },
  {
    path: "/playlist/:id",
    element: <Playlist isLoggedIn={false} usename="Hajar" />,
  },
]);

function App() {
  return (
    <>
      <WavyBackground />
      <PlayerState>
        <RouterProvider router={router} />
        <AudioPlayer />
      </PlayerState>
    </>
  );
}

export default App;
