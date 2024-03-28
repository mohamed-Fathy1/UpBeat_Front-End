import SideNavbar from "../../components/SideNavbar/SideNavbar";

interface PlaylistsProps {
  isLoggedIn: boolean;
  usename: string;
}

function Playlists({ isLoggedIn, usename }: PlaylistsProps) {
  return (
    <div className="homepage-container relative">
      <SideNavbar isLoggedIn={isLoggedIn} />
      <div className="homepage-content">
        {isLoggedIn && <h1>Welcome, {usename}</h1>}
      </div>
    </div>
  );
}

export default Playlists;
