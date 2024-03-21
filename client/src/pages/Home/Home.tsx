import "./Home.css";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import TrackContainer from "../../components/TrackContrainer/TrackContrainer";


interface HomePageProps {
  isLoggedIn: boolean;
  usename: string;
}

function HomePage({ isLoggedIn, usename }: HomePageProps) {
  
  // const [songData , setSongData] = useState<MusicData>({
  //   "New Released": [],
  //   "Popular Artists": [],
  //   "Popular Tracks": [],
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let response = await (
  //       await fetch("../../api/songData.json")
  //     ).json();

  //     return response;
  //   };
    
  //   fetchData()
  //   .then((data) => {
  //     setSongData(data);
  //   })
  // }, []);

  return (
    <div className="homepage-container relative">
      <SideNavbar isLoggedIn={isLoggedIn} />
      <div className="homepage-content">
        {isLoggedIn && <h1>Welcome, {usename}</h1>}
        <TrackContainer/>
      </div>
    </div>
  );
}

export default HomePage;
